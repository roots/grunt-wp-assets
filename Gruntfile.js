'use strict';
module.exports = function(grunt) {

  grunt.initConfig({



    assets: {
      images: {
        //src: ['test/assets/css/{,*/}*.css',
        //      'test/assets/css/{,*/}*.js',],
        src: ['test/assets/css/main.min.css',
              'test/assets/css/scripts.min.js',],
        dest: 'test/script2.php'
      }
    },

    /*
    assets: {
      src: ['scripts.php'],
    }
    */
    clean: {
      tests: ['test/assets/{css,js}/{main,scripts}.min.*.css']
    },


  });

  // Load tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks
  grunt.registerTask('default', [ 'clean', 'assets',]);

};
