'use strict';
module.exports = function (grunt) {

	grunt.initConfig({
		less: {
			development: {
				files: {
					'StandardRegisterHackathon/Content/bootstrap/bootstrap.css': [
					  'StandardRegisterHackathon/Content/bootstrap/bootstrap.less'
					]
				},
				options: {
					compress: false,
					// LESS source map
					// To enable, set sourceMap to true and update sourceMapRootpath based on your install
					sourceMap: true,
					sourceMapFilename: 'StandardRegisterHackathon/Content/bootstrap/bootstrap.css.map',
					//sourceMapRootpath: '/dt.net/',
					sourceMapURL: '/Content/bootstrap/bootstrap.css.map'
				}
			}
		},
		watch: {
			styles: { //LESS
				files: [
				  'StandardRegisterHackathon/Content/bootstrap/*.less',
				  'StandardRegisterHackathon/Content/bootstrap/**/*.less'
				],
				tasks: ['less']
			},
			livereload: {
				// Browser live reloading
				// https://github.com/gruntjs/grunt-contrib-watch#live-reloading
				options: {
					livereload: true
				},
				files: [
				  'StandardRegisterHackathon/Content/bootstrap/bootstrap.css',
				]
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-watch'); //npm install grunt-contrib-watch
	grunt.loadNpmTasks('grunt-contrib-less'); //npm install grunt-contrib-less

	grunt.registerTask('default', [
	  'watch'
	]);

};
