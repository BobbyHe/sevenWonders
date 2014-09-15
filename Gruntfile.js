'ust strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'src/public/javascript/*.js', 'test/**/*.js', 'routes/', 'app.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
            // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    require: true
                }
            }
        },

        watch:{
            express: {
                files:  [ '<%= jshint.files %>' ],
                tasks:  [ 'express:dev' ],
                options: {
                    spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
                }
            }
        },

        open: {
            server: {
                url: 'http://localhost:3000'
            }
        },

        express: {
            options: {
                debug: true
            },
            dev: {
                options: {
                    script: './bin/www',
                }
            },
        }

    });

    grunt.registerTask('default', ['jshint', 'express:dev', 'watch']);

};