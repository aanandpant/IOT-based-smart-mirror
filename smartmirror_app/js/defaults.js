

/*
 * Config Defauls

 */

var defaults = {
	port: 8080,
	kioskmode: false,
	electronOptions: {},
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 24,
	units: "metric",
	zoom: 1,

	modules: [
		{
			module: "updatenotification",
			position: "top_center"
		},
		{
			module: "helloworld",
			position: "upper_third",
			classes: "large thin",
			config: {
				text: "Smart Mirror"
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			config: {
				text: "Please check the config file."
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			classes: "small dimmed",
			config: {
				text: "check all the valdity in your config file"
			}
		},
		{
			module: "helloworld",
			position: "middle_center",
			classes: "xsmall",
			config: {
				text: "If you get this message while your config file is already<br>created, your config file probably contains an error.<br>Use a JavaScript linter to validate your file."
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			classes: "xsmall dimmed",
			config: {
				text: "Smart mirror team group id:12"
			}
		},
	],

	paths: {
		modules: "modules",
		vendor: "vendor"
	},
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = defaults;}
