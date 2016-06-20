var encodeID = require('..')();

//Settings
var loopTimes = 10;
var minStringLength = 5;
var maxStringLength = 24;

// Optional Settings
var alphanumericOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var numbersOnly = "0123456789";

//Variables
var matchCount = 0;
var loopCount = 0;
var stringList = [];
var encodedList = [];
var decodedList = [];

var randomString = function(stringLength, allowList) {
  var characterList = (allowList ? allowList : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+=-_,./<>?;':\"\\[]{}!@#$%^&*()|`~");
  var outputText = "";
  for(var i = 0; i < stringLength; i++) {
    outputText += characterList.charAt(Math.floor(Math.random() * characterList.length));
  }

  return outputText;
};

var generateRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate strings and encode.
for (var i = 0; i < loopTimes; i++) {
  var newStringLength = generateRandomNumber(minStringLength, maxStringLength);
  stringList.push(randomString(newStringLength, alphanumericOnly));
  encodedList.push(encodeID.encode(stringList[i]));
}

// Decode encoded strings
for (var j = 0; j < encodedList.length; j++) {
  decodedList.push(encodeID.decode(encodedList[j]));
}

console.log("Generated Strings:");
console.log("");

// Check outputs
for (var k = 0; k < decodedList.length; k++) {
  console.log("String:   ", stringList[k]);
  console.log("Encoded:  ", encodedList[k]);
  console.log("Decoded:  ", decodedList[k]);
  console.log("Match:    ", decodedList[k] === stringList[k]);
  if (decodedList[k] === stringList[k]) { matchCount++; }
  loopCount++;
  console.log("");
}

console.log("");
console.log("Results: ");
console.log("Correct Matches: ", matchCount);
console.log("Stings Checked: ", loopCount);
console.log("Stings Generated: ", stringList.length);
console.log("Accuracy:", ((matchCount / loopCount) * 100) + "%");
