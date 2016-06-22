var encodeID = require('..')();

myString = "My URL String";
console.log("Original String:               ", myString);

var encodedStringUNICODE = encodeID.encode(myString);
var encodedStringASCII = encodeID.encode(myString, true);
console.log("Encoded as UNICODE:            ", encodedStringUNICODE);
console.log("Encoded as ASCII:              ", encodedStringASCII);

var decodedStringFromUNICODE = encodeID.decode(encodedStringUNICODE);
var decodedStringFromASCII = encodeID.decode(encodedStringASCII, true);
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
