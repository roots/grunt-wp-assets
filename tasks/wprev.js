/*
 * grunt-assets-wp
 * https://github.com/hariadi/grunt-assets-wp
 *
 * Base from:
 * https://github.com/roots/roots/blob/master/tasks/version.js
 * https://github.com/yeoman/grunt-filerev
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */
'use strict';

var fs = require('fs')
  , path = require('path')
  , crypto = require('crypto');

module.exports = function(grunt) {

  grunt.registerMultiTask('wprev', 'WordPress assets revving', function() {

    var dest = this.data.dest
      , options = this.options({
          encoding: 'utf8',
          algorithm: 'md5',
          format: true,
          length: 4,
          rename: false
        });
 
    this.files.forEach(function(files) {

      files.src.forEach(function (file) {

        if (file.length === 0) {
          grunt.log.warn('src does not exists');
          return false;
        }

        var basename = path.basename
          , name = basename(file)
          , content = grunt.file.read(file)
          , hash = crypto.createHash(options.algorithm).update(content, options.encoding).digest('hex')
          , suffix = hash.slice(0, options.length)
          , ext = path.extname(file)
          , newName = options.format ? [suffix, basename(file, ext), ext.slice(1)].join('.') : [basename(file, ext), suffix, ext.slice(1)].join('.');

        // Copy/rename file base on hash and format
        var resultPath = path.resolve(path.dirname(file), newName);
        if (options.rename) {
          fs.renameSync(file, resultPath);
        } else {
          grunt.file.copy(file, resultPath);
        }

        // Get target, find and change references assets to new hashed. 
        var wpcontent = grunt.file.read(dest)
          , match = new RegExp('[a-z0-9]{'+ options.length +'}.' + name, "g")
          , re = ( match.test(wpcontent) ) ? match : new RegExp(name, "g");
        wpcontent = wpcontent.replace(re, newName);
        
        grunt.file.write(dest, wpcontent);
        grunt.log.writeln('  ' + file.grey + (' changed to ') + newName.green);
      });
    });
  });
};