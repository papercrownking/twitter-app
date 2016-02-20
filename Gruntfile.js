//Gruntfile
module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            test: {
                configFile: 'karma.conf.js'
            }
        },
        mochaTest: {
          test: {
            options: {
              reporter: 'spec',
              captureFile: 'results.txt',
              quiet: false
            },
            src: ['test/**/*.js']
          }
        },
        jshint: {
            jshintrc: '.jshintrc',
            src: ['lib/utils/*.js', 'lib/web_services/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('lint', ['jshint']);

    grunt.registerTask('unit-test', ['mochaTest']);

    grunt.registerTask('default', ['lint', 'unit-test']);

};