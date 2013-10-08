/*
 * grunt-assets-wp
 * https://github.com/hariadi/grunt-assets-wp
 *
 * Base from:
 * https://github.com/yeoman/grunt-filerev
 *
 * Copyright (c) 2013 Hariadi Hinta
 * Licensed under the MIT license.
 */
'use strict';

var fs = require('fs'),
    path = require('path'),
    crypto = require('crypto');

module.exports = function(grunt) {

  grunt.registerMultiTask('wprev', 'WordPress assets revving', function() {

    var dest = this.data.dest,
        options = this.options({
        encoding: 'utf8',
        algorithm: 'md5',
        format: true,
        length: 4,
        rename: false
      });

    grunt.util.async.forEach(this.files, function (files, next) {

      files.src.filter(function(file) {
        if (!grunt.file.exists(file)) {
          grunt.log.warn('Source file "' + file + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(file) {

        var basename = path.basename,
            name = basename(file),
            content = grunt.file.read(file),
            hash = crypto.createHash(options.algorithm).update(content, options.encoding).digest('hex'),
            suffix = hash.slice(0, options.length),
            ext = path.extname(file),
            newName = options.format ? [suffix, basename(file, ext), ext.slice(1)].join('.') : [basename(file, ext), suffix, ext.slice(1)].join('.');

        // Copy/rename file base on hash and format
        var resultPath = path.resolve(path.dirname(file), newName);
        if (options.rename) {
          fs.renameSync(file, resultPath);
        } else {
          grunt.file.copy(file, resultPath);
        }

        // Get target, find and change references assets to new hashed.
        var wpcontent = grunt.file.read(dest),
            match = new RegExp('[a-z0-9]{'+ options.length +'}.' + name, "g"),
            re = ( match.test(wpcontent) ) ? match : new RegExp(name, "g");
            wpcontent = wpcontent.replace(re, newName);

        grunt.file.write(dest, wpcontent);
        var status = (options.rename) ? ' rename' : ' change';
        grunt.log.writeln('  ' + file.grey + status + ' to ' + newName.green);
      });
      next();
    }, this.async());
  });
};
