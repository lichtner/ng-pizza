'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				livereload: true
			},
			files: [
				'app/index.html',
				'app/css/*.css',
				'app/js/*',
				'app/js/**/*'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);

};