var noCache = require("connect-nocache")();

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			src: [
				"**/*.js",
				"!node_modules/**/*.js",
				"!bower_components/**/*.js"
			]
		},
		connect: {
			server: {
				options: {
					port: 1337,
					base: ".",
					keepalive: true,
					open: "http://localhost:1337/test.html",
					middleware: function(connect, options) {
						return [
							noCache,
							connect.static(options.base)
						];
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("test", ["connect"]);

	grunt.registerTask("default", ["jshint"]);
};