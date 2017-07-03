/* SmartMirror
 * The Core App (Server)
 */

var fs = require("fs");
var Server = require(__dirname + "/server.js");
var defaultModules = require(__dirname + "/../modules/default/defaultmodules.js");
var path = require("path");

// Get version number.
global.version = JSON.parse(fs.readFileSync("package.json", "utf8")).version;
console.log("Starting SmartMirror: v" + global.version);

// global absolute root path
global.root_path = path.resolve(__dirname + "/../");

// The next part is here to prevent a major exception when there
// is no internet connection. This could probable be solved better.
process.on("uncaughtException", function (err) {
	console.log("Whoops! There was an uncaught exception...");
	console.error(err);
	console.log("Maybe no internet connection?");
	console.log("Please check your internet connection");
});

/* App - The core app.
 */
var App = function() {
	var nodeHelpers = [];

	/* loadConfig(callback)
	 * Loads the config file. combines it with the defaults,
	 * and runs the callback with the found config as argument.
	 *
	 * argument callback function - The callback function.
	 */

	var loadConfig = function(callback) {
		console.log("Loading config ...");
		var defaults = require(__dirname + "/defaults.js");
		var configFilename = path.resolve(global.root_path + "/config/config.js");
		try {
			fs.accessSync(configFilename, fs.F_OK);
			var c = require(configFilename);
			var config = Object.assign(defaults, c);
			callback(config);
		} catch (e) {
			if (e.code == "ENOENT") {
				console.error("WARNING! Could not find config file. Please create one. Starting with default configuration.");
				callback(defaults);
			} else if (e instanceof ReferenceError || e instanceof SyntaxError) {
				console.error("WARNING! Could not validate config file. Please correct syntax errors. Starting with default configuration.");
				callback(defaults);
			} else {
				console.error("WARNING! Could not load config file. Starting with default configuration. Error found: " + e);
				callback(defaults);
			}
		}
	};

	/* loadModule(module)
	 * Loads a specific module.
	 *
	 * argument module string - The name of the module (including subpath).
	 */
	var loadModule = function(module) {

		var elements = module.split("/");
		var moduleName = elements[elements.length - 1];
		var moduleFolder =  __dirname + "/../modules/" + module;

		if (defaultModules.indexOf(moduleName) !== -1) {
			moduleFolder =  __dirname + "/../modules/default/" + module;
		}

		var helperPath = moduleFolder + "/node_helper.js";

		var loadModule = true;
		try {
			fs.accessSync(helperPath, fs.R_OK);
		} catch (e) {
			loadModule = false;
			console.log("starting.. " + moduleName + ".");
		}

		if (loadModule) {
			var Module = require(helperPath);
			var m = new Module();

			if (m.requiresVersion) {
				console.log("Check node version for node helper '" + moduleName + "' - Minimum version:  " + m.requiresVersion + " - Current version: " + global.version);
				if (cmpVersions(global.version, m.requiresVersion) >= 0) {
					console.log("Version is ok!");
				} else {
					console.log("Version is incorrect. Skip module: '" + moduleName + "'");
					return;
				}
			}

			m.setName(moduleName);
			m.setPath(path.resolve(moduleFolder));
			nodeHelpers.push(m);
		}
	};

	/* loadModules(modules)
	 * Loads all modules.
	 *
	 * argument module string - The name of the module (including subpath).
	 */
	var loadModules = function(modules) {
		console.log("Loading module helpers ...");

		for (var m in modules) {
			loadModule(modules[m]);
		}

		console.log("All module helpers loaded.");
	};

	/* cmpVersions(a,b)
	 * Compare two symantic version numbers and return the difference.
	 *
	 * argument a string - Version number a.
	 * argument a string - Version number b.
	 */
	function cmpVersions(a, b) {
		var i, diff;
		var regExStrip0 = /(\.0+)+$/;
		var segmentsA = a.replace(regExStrip0, "").split(".");
		var segmentsB = b.replace(regExStrip0, "").split(".");
		var l = Math.min(segmentsA.length, segmentsB.length);

		for (i = 0; i < l; i++) {
			diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
			if (diff) {
				return diff;
			}
		}
		return segmentsA.length - segmentsB.length;
	}

	/* start(callback)
	 * This methods starts the core app.
	 * It loads the config, then it loads all modules.
	 * When it"s done it executs the callback with the config as argument.
	 *
	 * argument callback function - The callback function.
	 */
	this.start = function(callback) {

		loadConfig(function(c) {
			config = c;

			var modules = [];

			for (var m in config.modules) {
				var module = config.modules[m];
				if (modules.indexOf(module.module) === -1 && !module.disabled) {
					modules.push(module.module);
				}
			}

			loadModules(modules);

			var server = new Server(config, function(app, io) {
				console.log("Server started ...");

				for (var h in nodeHelpers) {
					var nodeHelper = nodeHelpers[h];
					nodeHelper.setExpressApp(app);
					nodeHelper.setSocketIO(io);
					nodeHelper.start();
				}

				console.log("Sockets connected & modules started ...");

				if (typeof callback === "function") {
					callback(config);
				}

			});
		});
	};
};

module.exports = new App();
