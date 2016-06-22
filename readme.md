
# Encode ID

## Description
Small npm module for encoding ID numbers into randomish looking strings.

Strings can be encoded as well. They'll be converted to their unicode representation before being base64 encoded.

## Usage:
```js
var encodeID = require('encodeID')();

myString = "My URL String"; // You can just place in an ID number instead of a string. eg: myString = 51;
console.log("Original String:               ", myString);

// Not that it doesn't matter if it's set to unicode or ascii when dealing with integers. They are not encoded at all.
var encodedStringUNICODE = encodeID.encode(myString); // UNICODE encoding (makes it longer, but will work on ALL characters).
var encodedStringASCII = encodeID.encode(myString, true); // ASCII encoding (shorter, but will only work on standard ASCII characters).

console.log("Encoded as UNICODE:            ", encodedStringUNICODE);
console.log("Encoded as ASCII:              ", encodedStringASCII);

var decodedStringFromUNICODE = encodeID.decode(encodedStringUNICODE);
var decodedStringFromASCII = encodeID.decode(encodedStringASCII, true); // Ensure to put true for the second parameter to decode ASCII instead of UNICODE

console.log("Decoded String (From UNICODE): ", decodedStringFromUNICODE);
console.log("Decoded String (From ASCII):   ", decodedStringFromASCII);

var result = (decodedStringFromUNICODE === myString);

console.log("Strings Match:                 ", result);
if (result) {
  console.log("Success!");
  process.exit(0)
} else {
  console.log("Fail");
  process.exit(1)
}


/*
Should produce the following output:

Original String:                My URL String
Encoded as UNICODE:             MHMwMDRkMDA3OTAwMjAwMDU1MDA1MjAwNGMwMDIwMDA1MzAwNzQwMDcyMDA2OTAwNmUwMDY3
Encoded as ASCII:               LTBfczRkNzkyMDU1NTI0YzIwNTM3NDcyNjk2ZTY3
Decoded String (From UNICODE):  My URL String
Decoded String (From ASCII):    My URL String
Strings Match:                  true
Success!
// */

```

## Caution:
Please do NOT use this for anything secure, such as encrypting passwords or other sensitive data. This was not designed to be secure and is merely a way to generate reversible pseudo-random looking strings.

## Installation

```bash
$ npm install encodeID
```

## Source Code

```bash
$ git clone git://github.com/Slyke/encodeID.git --depth 1
$ cd encodeID
```

## Tests

Download the source or clone the repo.

You can run tests by entering these commands from inside the source code main directory:
* node test/random_alphanumeric_string.js - Test and compare randomly generated alphanumeric strings.
* node test/random_number.js - Test and compare randomly generated numbers.
* node test/random_string.js - Test and compare randomly strings, including special characters, spaces and the like.
* node test/id_list.js - Test and compare integers between 5 and 15.
* node test/basic.js - Basically a copy of the code in the Usage example code.

You can easily edit these tests. Most of the useful variables are located at the top of the test file for easy editing.

## Known Issues and Bugs

* None known.

## Planned Features

* Got suggestions? Let me know! Alternatively, you can clone and submit a pull request for your own changes to the code.
