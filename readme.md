
# Encode ID

## Description
Small npm module for encoding ID numbers into randomish looking strings.

Strings can be encoded as well. They'll be converted to their unicode representation before being base64 encoded.

## Usage:
```js
var encodeID = require('encodeid')();

myString = "My URL String"; // You can just place in an ID number instead of a string. eg: myString = 51;
console.log("Original String: ", myString);

var encodedString = encodeID.encode(myString);
console.log("Encoded: ", encodedString);

var decodedString = encodeID.decode(encodedString);
console.log("Decoded String: ", decodedString);

var result = (decodedString === myString);

console.log("Strings Match: ", result);
if (result) {
  console.log("Success!");
  process.exit(0)
} else {
  console.log("Fail");
  process.exit(1)
}

/*
Should produce the following output:

Original String:  My URL String
Encoded:  MHMwMDRkMDA3OTAwMjAwMDU1MDA1MjAwNGMwMDIwMDA1MzAwNzQwMDcyMDA2OTAwNmUwMDY3
Decoded String:  My URL String
Strings Match:  true
Success!
// */

```

## Caution:
Please do NOT use this for anything secure, such as encrypting passwords or other sensitive data. This was not designed to be secure and is merely a way to generate reversible pseudo-random looking strings.

## Installation

```bash
$ npm install encodeid
```

## Source Code

```bash
$ git clone git://github.com/Slyke/encodeID.git --depth 1
$ cd encodeid
```

## Known Issues and Bugs

* When using single ID numbers as inputs, there can sometimes be a leading 0 when decoding.

## Planned Features

* Add in optional parameter to encode and decode using ASCII or UNICODE (Current way) for smaller encoded output strings.
