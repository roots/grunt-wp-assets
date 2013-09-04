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
    }

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
