# grunt-wp-assets  [![Build Status](https://travis-ci.org/roots/grunt-wp-assets.png?branch=master)](https://travis-ci.org/roots/grunt-wp-assets)

> WordPress assets revisioning.

## Overview

Grunt.js plugin that searches requested WordPress static asset, revisioning, and update static asset reference in given target (tested in `wp_enqueue_style` and `wp_register_script`).

### Getting Started
This plugin requires Grunt `~0.4.1`

Install this plugin with this command:

```shell
npm install grunt-wp-assets --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wp-assets');
```

## Usage Examples

### defaut config


```javascript
version: {
  assets: {
    files: {
      'path/to/target.php': ['path/to/style.css', 'path/to/scripts.js']
    }
  }
},

```

This example task will copy `path/to/style.css` to `assets/css/{md5hash}.style.css` and `path/to/scripts.js` to `path/to/{md5hash}.scripts.js` and update assets reference in `path/to/target.php`.

### Custom config


```javascript
version: {
  assets: {
  options: {
      algorithm: 'sha1',
      length: 4,
      format: false,
      rename: true
  },
    files: {
      'scripts.php': ['assets/css/main.min.css', 'assets/js/scripts.min.js']
    }
  }
},

```

This example task will rename `assets/css/main.min.css` to `assets/css/main.min.{sha1hash}.css` and `assets/js/scripts.min.js` to `assets/js/scripts.min.{sha1hash}.js` and update assets reference in `scripts.php`.

## Options

### rename

Type: `Boolean`  
Default: `false`

It will rename the `src` target instead of copy.

### format

Type: `Boolean`  
Default: `false`

File name format.
```
false: {hash}.{filename}.{ext}
true: {filename}.{hash}.{ext}
```

### minify

Type: `Boolean`  
Default: `true`

It is minify version?

### minifyname

Type: `String`  
Default: `min`

```
// set minifyname: minify if you have filename like this
main.minify.css
scripts.minify.js
```

### encoding

Type: `String`  
Default: `'utf8'`

The file encoding.

### algorithm

Type: `String`  
Default: `'md5'`

`algorithm` is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.

### length

Type: `Number`  
Default: `4`

The number of characters of the file hash to prefix the file name with.

### querystring.style

Type: `String`  
Default: `undefined`

Name used as a handle for the stylesheet.

### querystring.script

Type: `String`  
Default: `undefined`

Name used as a handle for the script.

### manifest

Type: `String`  
Default: `undefined`

Destination of JSON manifest contain the asset path (filename), handle (if querystring use), and hash for each versioned file.



## Release History
**DATE**       **VERSION**   **CHANGES**                                                                
* 2014-02-21   v0.2.2        Support files array format src/dest                                        
* 2014-02-18   v0.2.1        Fix version task not change for the first time.                            
* 2014-02-17   v0.2.0        Add options for `minify` and `minifyname`.,Change default option for format
                             to `false`.,Update simple test assets.                                     
* 2014-02-16   v0.1.9        Move extenal lib use by grunt to deps insteadof devdeps.                   
* 2014-01-10   v0.1.8        Fix replacement of previous hashed filenames does not work when format is  
                             set to false.                                                              
* 2013-11-24   v0.1.7        Change querystring options name to `style` and `script`.,Update docs.      
* 2013-11-23   v0.1.6        Change default filename revving and length.                                
* 2013-11-22   v0.1.5        Update test.,Move to roots org.,Rename task from "wprev" tp "version".     
* 2013-09-07   v0.1.3        Rename source target, not destination.,Change default characters length of 
                             hash file prefix to 4.                                                     
* 2013-09-05   v0.1.2        Refactored docs                                                            
* 2013-09-04   v0.1.0        Initial commit.                                                            

## Author

+ [Hariadi Hinta](https://github.com/hariadi)

## License
Copyright (c) 2014 Hariadi Hinta, contributors.  
Released under the MIT license
