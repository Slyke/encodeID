
#Encode ID

## Usage:
```js
var encodeID = require('encodeid')();

myString = "My URL String";
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

```

## Installation

```bash
$ npm install encodeid
```

# Source Code

```bash
$ git clone git://github.com/Slyke/encodeID.git --depth 1
$ cd encodeid
```
