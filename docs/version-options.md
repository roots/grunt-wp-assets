# Options

## rename

Type: `Boolean`  
Default: `false`

It will rename the `src` target instead of copy.

## format

Type: `Boolean`  
Default: `true`

File name format.
```
true: {hash}.{filename}.{ext}
false: {filename}.{hash}.{ext}
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

