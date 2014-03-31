'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var css = "test/fixtures/assets/css/main.min.css";
var js = "test/fixtures/assets/js/scripts.min.js";

var hashed = function(filepath, algorithm, length, format, minify, minifyname) {
  var crypto = require('crypto');

  algorithm = algorithm || 'md5';
  length = length || 8;
  format = typeof format === 'undefined' ? false : !!format;
  minify = minify || true;
  minifyname = minifyname || 'min';
  minifyname = '.' + minifyname;

  var isMinify = (minify || minifyname.indexOf(filepath) !== -1) ? true : false;
  var hash = crypto.createHash(algorithm).update(fs.readFileSync(filepath)).digest('hex');
  filepath = filepath.replace(minifyname, '');
  var suffix = hash.slice(0, length);
  var ext = path.extname(filepath)
  return format ?
    [suffix, path.basename(filepath, ext), ext.slice(1)].join('.'):
      (isMinify) ?
        [path.basename(filepath, ext), suffix + minifyname, ext.slice(1)].join('.') :
        [path.basename(filepath, ext), suffix, ext.slice(1)].join('.');
};

describe('version task', function () {

  describe("without options should", function() {

    it('revision css', function () {
      var original = fs.statSync(css).size;
      var revisioned= fs.statSync('test/fixtures/assets/css/' + hashed(css)).size;
      assert(revisioned === original);
    });

    it('revision js', function () {
      var original = fs.statSync(js).size;
      var revisioned= fs.statSync('test/fixtures/assets/js/' + hashed(js)).size;
      assert(revisioned === original);
    });

  });

  describe("with options should", function() {

    it('revision css: {algorithm: \'sha1\', length: 8, rename: true}', function () {
      var original = fs.statSync(css).size;
      var revisioned= fs.statSync('test/fixtures/assets/css/' + hashed(css, 'sha1', 8)).size;
      assert(revisioned === original);
    });

    it('revision js: {algorithm: \'sha1\', length: 8, rename: true}', function () {
      var original = fs.statSync(js).size;
      var revisioned= fs.statSync('test/fixtures/assets/js/' + hashed(js, 'sha1', 8)).size;
      assert(revisioned === original);
    });

  });

  describe("when using Roots querystring disable", function() {
    if (path.extname(css) === '.css') {
      it('accept option: length: 8', function () {

          var original = fs.statSync(css).size;
          var revisioned= fs.statSync('test/fixtures/assets/css/' + hashed(css, 'md5', 8)).size;
          assert(revisioned === original);

      });
    }
  });

  describe("replacement from file.{hash}.ext", function () {
    if (path.extname(css) === '.css') {
      it('has no scripts.01010101.min.js or main.01010101.min.css', function () {

        var modified = fs.readFileSync('test/fixtures/lib/scripts3.php', 'utf8');

        var oldjs = (new RegExp('scripts.01010101.min.js', 'g')).test(modified);
        var oldcss = (new RegExp('main.01010101.min.css', 'g')).test(modified);
        var newjs = (new RegExp(hashed(js, 'sha1', 8), 'g')).test(modified);
        var newcss = (new RegExp(hashed(css, 'sha1', 8), 'g')).test(modified);
        console.log(hashed(js, 'sha1', 8));

        assert(oldjs === false);
        assert(oldcss === false);
        assert(newjs === true);
        assert(newcss === true);

      });
    }
  });

});
