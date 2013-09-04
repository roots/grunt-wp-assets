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

  grunt.registerMultiTask('wp_rev', 'WordPress assets revving', function() {

    var done = this.async();
    var dest = this.data.dest;
    var options = this.options({
      encoding: 'utf8',
      algorithm: 'md5',
      format: true,
      length: 8,
      rename: false
    });
 
    this.files.forEach(function(files) {

      files.src.forEach(function (file) {

      if (file.length === 0) {
        grunt.log.warn('src does not exists');
        return false;
      }
      var name = path.basename(file);
      var content = grunt.file.read(file);
      var hash = crypto.createHash(options.algorithm).update(content, options.encoding).digest('hex');
      var suffix = hash.slice(0, options.length);
      var ext = path.extname(file);
      var newName = options.format ? [suffix, path.basename(file, ext), ext.slice(1)].join('.') : [path.basename(file, ext), suffix, ext.slice(1)].join('.');
      
      // Copy/rename file base on hash and format
      var resultPath = path.resolve(path.dirname(file), newName);
      if (options.rename) {
        fs.renameSync(file, resultPath);
      } else {
        grunt.file.copy(file, resultPath);
      }

      // Get target, find and change references assets to new hashed. 
      var wpcontent = grunt.file.read(dest);
      wpcontent = wpcontent.replace(new RegExp(name, "g"), newName);
      
      grunt.file.write(dest, wpcontent);
      grunt.log.writeln('  ' + file.grey + (' changed to ') + newName.green);

      });

    });


    done();
  });
};