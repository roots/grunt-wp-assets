'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

    wp_rev: {
      assets: {
        src: ['test/assets/css/main.min.css',
              'test/assets/js/scripts.min.js',],
        dest: 'test/script2.php'
      }
    },

    clean: {
      //tests: ['test/assets/{css,js}/{main,scripts}.min.*.css']
      tests: ['test/assets/{css,js}/*.{main,scripts}.min.css']
    },


  });

  // Load tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Register tasks
  grunt.registerTask('default', [ 'clean', 'wp_rev',]);

};
