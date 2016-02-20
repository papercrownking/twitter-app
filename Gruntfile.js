//Gruntfile
module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('lint', ['jshint']);

    grunt.registerTask('unit-test', ['mochaTest']);

    grunt.registerTask('default', ['lint', 'unit-test']);

};