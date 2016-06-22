var encodeID = require('..')();

// Settings
var loopTimes = 10;
var minStringLength = 5;
var maxStringLength = 24;

// Optional Settings
var alphanumericOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+=-_, ./<>?;':\"\\[]{}!@#$%^&*()|`~";
var numbersOnly = "0123456789";

// Variables
var matchCount = 0;
var loopCount = 0;
var stringList = [];
var encodedList = [];
var encodedASCIIList = [];
var decodedList = [];

var randomString = function(stringLength, allowList) {
  var characterList = (allowList ? allowList : allCharacters);
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
  stringList.push(randomString(newStringLength));
  encodedList.push(encodeID.encode(stringList[i]));
  encodedASCIIList.push(encodeID.encode(stringList[i], true));
}

// Decode encoded strings
for (var j = 0; j < encodedList.length; j++) {
  decodedList.push(encodeID.decode(encodedList[j]));
}

console.log("Generated Strings:");
console.log("Minimum Length:", minStringLength, " Maximum Length:", maxStringLength, " Strings To Generate:", loopTimes);
console.log("Using Characters: ", allCharacters);
console.log("");

// Check outputs
for (var k = 0; k < decodedList.length; k++) {
  console.log("String:              ", stringList[k]);
  console.log("Encoded as UNICODE:  ", encodedList[k]);
  console.log("Encoded as ASCII:    ", encodedASCIIList[k]);
  console.log("Decoded:             ", decodedList[k]);
  console.log("Match:               ", decodedList[k] === stringList[k]);
  if (decodedList[k] === stringList[k]) { matchCount++; }
  loopCount++;
  console.log("");
}

console.log("");
console.log("Results:           ");
console.log("Correct Matches:   ", matchCount);
console.log("Stings Checked:    ", loopCount);
console.log("Stings Generated:  ", stringList.length);
console.log("Accuracy:          ", ((matchCount / loopCount) * 100) + "%");
