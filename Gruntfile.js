module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			combine: {
				files: {
					'app/css/style.min.css': ['app/css/style.css']
				}
			}
		},

		uglify: {
			dist: {
				files: {
					'app/scripts/script.min.js': ['app/scripts/controllers/MainCtrl.js']
				}
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask('default', ['cssmin', 'uglify', 'karma']);

};