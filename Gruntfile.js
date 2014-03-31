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
        // Files Array Format
        files: {
          'test/fixtures/script2.php': ['test/fixtures/assets/css/main.min.css', 'test/fixtures/assets/js/scripts.min.js']
        }
      },
      withConfig: {
        options: {
          format: true,
          algorithm: 'sha1',
          length: 8,
          manifest: 'test/fixtures/assets/manifest_withConfig.json',
        },
        // Compact Format
        src: ['test/fixtures/assets/css/main.min.css','test/fixtures/assets/css/custom.min.css',
              'test/fixtures/assets/js/scripts.min.js'],
        dest: 'test/fixtures/index.html'
      },
      // Legacy Roots filename revving.
      querystring: {
        options: {
          format: true,
          length: 32,
          manifest: 'test/fixtures/assets/manifest.json',
          querystring: {
            style: 'roots_main',
            script: 'roots_scripts'
          }
        },
        files: {
          'test/fixtures/lib/scripts2.php': 'test/fixtures/assets/{css,js}/{main,scripts}.min.{css,js}'
        }
      },
      rootsWithoutQuerystring: {
        options: {
          format: true,
          length: 8
        },
        files: {
          'test/fixtures/lib/scripts.php': ['test/fixtures/assets/css/main.min.css', 'test/fixtures/assets/js/scripts.min.js']
        }
      },

      withoutFormat2times: {
        options: {
          length: 8,
          algorithm: 'sha1'
        },
        files: {
          'test/fixtures/lib/scripts3.php': ['test/fixtures/assets/css/main.min.css', 'test/fixtures/assets/js/scripts.min.js']
        }
      }
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
      tests: ['test/fixtures/assets/{css,js}/*.{css,js}', 'test/fixtures/assets/*.json', '!test/fixtures/assets/{css,js}/{main,scripts,custom}.min.{css,js}']
    },


  });

  // Load tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Register tasks
  grunt.registerTask('default', [ 'jshint', 'clean', 'version', 'simplemocha']);

};
