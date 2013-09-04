/*
 * grunt-assets-wp
 * https://github.com/hariadi/grunt-assets-wp
 *
 * Base from roots: https://github.com/roots/roots/blob/master/tasks/version.js
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */
'use strict';

var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

module.exports = function(grunt) {


  grunt.registerMultiTask('assets', 'WordPress assets revving', function() {

    var done = this.async();
    var dest = this.data.dest;
    var options = this.options({
      encoding: 'utf8',
      algorithm: 'md5',
      length: 8
    });
    
 
    this.files.forEach(function(files) {

      files.src.forEach(function (file) {

      if (file.length === 0) {
        grunt.log.warn('src does not exists');
        return false;
      }

      var content = grunt.file.read(file);

      var hash = crypto.createHash(options.algorithm).update(content, options.encoding).digest('hex');

      var suffix = hash.slice(0, options.length);
      var ext = path.extname(file);
      console.log(ext);
      var newName = [path.basename(file, ext), suffix, ext.slice(1)].join('.');

      var resultPath = path.resolve(path.dirname(file), newName);
      console.log(resultPath);
      fs.renameSync(file, resultPath);

      var regex;
      if (ext === '.css') {
        regex = /(wp_enqueue_style(\s*[^,]+,){3})\s*[^,]+,\s*([^\)]+)\);/;
      } else {
        regex = /(wp_register_script(\s*[^,]+,){3})\s*[^,]+,\s*([^\)]+)\);/;
      }

      var wpcontent = grunt.file.read(dest);
      wpcontent = wpcontent.replace(regex, "\$1 '" + hash + "', \$3);");

      //dest = (typeof dest === 'undefined') ? file : dest;
      
      grunt.file.write(dest, wpcontent);
      grunt.log.writeln('  ' + file.grey + (' changed to ') + newName.green);

      });

    });


    done();
  });
};