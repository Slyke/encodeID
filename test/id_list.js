var encodeID = require('..')();

var loopUntilNumber = 15;
var startAt = 5

console.log("Converting IDs from", startAt, "through to", loopUntilNumber);
console.log("");
console.log("");

for (var i = startAt; i < loopUntilNumber; i++) {

  var encodedID = encodeID.encode(i);
  var decodedID = encodeID.decode(encodedID);
  var result = (decodedID == i);

  console.log("ID:           ", i);
  console.log("Encoded ID:   ", encodedID);
  console.log("Decoded ID:   ", decodedID);
  console.log("IDs Match:    ", result);
  console.log("");

}
