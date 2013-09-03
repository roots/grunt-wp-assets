'use strict';
module.exports = function(grunt) {

  grunt.initConfig({

    assets: {
      theme: {
          src: ['test/scripts.php'],
          dest: 'test/script2.php'
        }
      },

    /*
    assets: {
      src: ['scripts.php'],
    }
    */



  });

  // Load tasks
  grunt.loadTasks('tasks');

  //grunt.loadNpmTasks('grunt-filerev');

  

  // Register tasks
  grunt.registerTask('default', ['assets',]);

};
