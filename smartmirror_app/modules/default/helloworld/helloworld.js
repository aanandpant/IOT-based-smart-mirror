/* global Module */



Module.register("helloworld",{

	// Default module config.
	defaults: {
		text: "Hello<p> World!</p>"
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}
});
