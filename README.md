# grunt-wp-assets [![Build Status](https://travis-ci.org/hariadi/grunt-wp-assets.png?branch=master)](https://travis-ci.org/hariadi/grunt-wp-assets)

> WordPress assets revisioning

## Overview

Grunt.js plugin that searches requested WordPress static asset, revisioning, and update static asset reference in given target (tested in `wp_enqueue_style` and `wp_register_script`).


## Installation

Install this grunt plugin next to your project's gruntfile with:

```shell
npm install grunt-wp-assets --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wp-assets');
```

## Documentation

### Usage


```javascript
wprev: {
  assets: {
    src: ['path/to/style.css',
          'path/to/scripts.js',],
    dest: 'target.php'
  }
},

```

### Example


```javascript
wprev: {
  assets: {
	options: {
		  algorithm: 'sha1',
		  length: 4,
		  format: false,
		  rename: true
	},
    src: ['assets/css/main.min.css',
          'assets/js/scripts.min.js',],
    dest: 'scripts.php'
  }
},

```

### Options

#### rename

Type: `Boolean`  
Default: `false`

It will update the `dest` target instead of copy:

#### format

Type: `Boolean`  
Default: `true`

File name format. `true`: `{hash}.{filename}.{ext}`, `false`: `{filename}.{hash}.{ext}`

#### encoding

Type: `String`  
Default: `'utf8'`

The file encoding.

#### algorithm

Type: `String`  
Default: `'md5'`

`algorithm` is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.

#### length

Type: `Number`  
Default: `8`

The number of characters of the file hash to prefix the file name with.


[MIT License](LICENSE-MIT)