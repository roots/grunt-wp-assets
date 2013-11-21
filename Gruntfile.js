'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*/*.js'
      ]
    },

    version: {
      assets: {
        src: ['test/fixtures/assets/css/main.min.css',
              'test/fixtures/assets/js/scripts.min.js'],
        dest: 'test/fixtures/script2.php'
      },
      withConfig: {
        options: {
          algorithm: 'sha1',
          length: 8
        },
        src: ['test/fixtures/assets/css/main.min.css',
              'test/fixtures/assets/js/scripts.min.js'],
        dest: 'test/fixtures/index.html'
      },
    },

    simplemocha: {
      options: {
        reporter: 'spec'
      },
      test: {
        src: 'test/*.js'
      }
    },

    clean: {
      tests: ['test/fixtures/assets/{css,js}/*.{main,scripts}.min.{css,js}',]
    },


  });

  // Load tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-readme');

  // Register tasks
  grunt.registerTask('default', [ 'clean', 'version', 'simplemocha', 'readme']);

};
