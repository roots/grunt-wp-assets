'use strict';
var fs = require('fs');
var path = require('path');
var assert = require('assert');

var css = "test/fixtures/assets/css/main.min.css";
var js = "test/fixtures/assets/js/scripts.min.js";

describe('version task', function () {

  describe("without options should", function() {

    it('revision css', function () {
      var original = fs.statSync(css).size;
      var revisioned= fs.statSync('test/fixtures/assets/css/c9f2.main.min.css').size;
      assert(revisioned === original);
    });

    it('revision js', function () {
      var original = fs.statSync(js).size;
      var revisioned= fs.statSync('test/fixtures/assets/js/2a3e.scripts.min.js').size;
      assert(revisioned === original);
    });

  });

  describe("with options should", function() {

    it('revision css: {algorithm: \'sha1\', length: 8, rename: true}', function () {
      var original = fs.statSync(css).size;
      var revisioned= fs.statSync('test/fixtures/assets/css/5934af8d.main.min.css').size;
      assert(revisioned === original);
    });

    it('revision js: {algorithm: \'sha1\', length: 8, rename: true}', function () {
      var original = fs.statSync(js).size;
      var revisioned= fs.statSync('test/fixtures/assets/js/2a3e700c.scripts.min.js').size;
      assert(revisioned === original);
    });

  });

  describe("when querystring enable", function() {
    if (path.extname(css) === '.css') {
      it('length: 8, querystring.cssHandle: roots_main, jsHandle: roots_scripts', function () {

          var original = fs.statSync(css).size;
          var revisioned= fs.statSync('test/fixtures/assets/css/c9f21557.main.min.css').size;
          assert(revisioned === original);

      });
    }
  });

});
