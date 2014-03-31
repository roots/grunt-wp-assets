# Usage Examples

## defaut config


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

## Custom config


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
