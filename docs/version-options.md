# Options

## rename

Type: `Boolean`  
Default: `false`

It will rename the `src` target instead of copy.

## format

Type: `Boolean`  
Default: `false`

File name format.
```
false: {hash}.{filename}.{ext}
true: {filename}.{hash}.{ext}
```

## minify

Type: `Boolean`  
Default: `true`

It is minify version?

## minifyname

Type: `String`  
Default: `min`

```
// set minifyname: minify if you have filename like this
main.minify.css
scripts.minify.js
```

## encoding

Type: `String`  
Default: `'utf8'`

The file encoding.

## algorithm

Type: `String`  
Default: `'md5'`

`algorithm` is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `'sha1'`, `'md5'`, `'sha256'`, `'sha512'`, etc. On recent releases, `openssl list-message-digest-algorithms` will display the available digest algorithms.

## length

Type: `Number`  
Default: `4`

The number of characters of the file hash to prefix the file name with.

## querystring.style

Type: `String`  
Default: `undefined`

Name used as a handle for the stylesheet.

## querystring.script

Type: `String`  
Default: `undefined`

Name used as a handle for the script.

## manifest

Type: `String`  
Default: `undefined`

Destination of JSON manifest contain the asset `path` (filename path), `handle` and `querystring` (if querystring use), and `hash` for each versioned file.

Sample `manifest.json`
```json
{
  "dest": "assets/manifest.json",
  "assets/css/main.min.css": {
    "path": "assets/css/main.min.css",
    "hash": "060865602e1c6ad3e02ee2ebf60799a0",
    "handle": "roots_css"
  },
  "assets/js/scripts.min.js": {
    "path": "assets/js/scripts.min.js",
    "hash": "0fc6af96786d8f267c8686338a34cd38",
    "handle": "roots_js"
  },
  "querystring": true
}
```

## summaryOnly

Type: `Boolean`  
Default: `false`

Generate manifest json without make change to destination script.

