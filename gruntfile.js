module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			src: [
				"**/*.js",
				"!node_modules/**/*.js",
				"!bower_components/**/*.js"
			]
		},
		jasmine: {
			test: {
				src: [
					"**/*.tests.js",
					"!gruntfile.js",
					"!node_modules/**/*.js",
					"!bower_components/**/*.js"
				],
				options: {
					keepRunner: true,
					template: require("grunt-template-jasmine-requirejs"),
					templateOptions: {
						requireConfig: {
							paths: {
								knockout: "bower_components/knockout/dist/knockout.debug",
								"knockout.integer": "bower_components/knockout-integer/knockout.integer",
								"knockout.money": "bower_components/knockout-money/knockout.money",
								"knockout.moment": "bower_components/knockout-moment/knockout.moment",
								accounting: "bower_components/accounting/accounting",
								moment: "bower_components/moment/moment"
							}
						}
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-jasmine");
	grunt.loadNpmTasks("grunt-contrib-jshint");

	grunt.registerTask("default", ["jshint", "jasmine"]);
};