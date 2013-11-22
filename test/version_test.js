'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var css = "test/fixtures/assets/css/main.min.css";
var js = "test/fixtures/assets/js/scripts.min.js";

var hashed = function(filepath, algorithm, length) {
  var crypto = require('crypto');

  algorithm = algorithm || 'md5';
  length = length || 8;

  var hash = crypto.createHash(algorithm).update(fs.readFileSync(filepath)).digest('hex');
  var suffix = hash.slice(0, length);
  var ext = path.extname(filepath)
  return [suffix, path.basename(filepath, ext), ext.slice(1)].join('.');
};
console.log(hashed(css));

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

});
