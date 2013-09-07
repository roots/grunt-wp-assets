'use strict';
var fs = require('fs');
var assert = require('assert');

describe('wp_rev task', function () {
  
  it('should revision files based on content', function () {
    var original = fs.statSync('test/fixtures/assets/css/main.min.css').size;
    var revisioned= fs.statSync('test/fixtures/assets/css/c9f2.main.min.css').size;
    assert(revisioned === original);
  });

  it('should accept options: {algorithm: \'sha1\', length: 8, rename: true}', function () {
    var original = fs.statSync('test/fixtures/assets/css/main.min.css').size;
    var revisioned= fs.statSync('test/fixtures/assets/css/5934af8d.main.min.css').size;
    assert(revisioned === original);
  });

});
