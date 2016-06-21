var encodeID = require('..')();

//Settings
var loopTimes = 10;
var minStringLength = 1;
var maxStringLength = 10;
var numbersOnly = "0123456789";

//Variables
var matchCount = 0;
var loopCount = 0;
var numberList = [];
var encodedList = [];
var decodedList = [];

var randomString = function(stringLength, allowList) {
  var characterList = (allowList ? allowList : numbersOnly);
  var outputText = "";

   // Leading the integer with a 0 will make the module think that it is a string. So we must ensure that only numbers 1-9 are randomly selected.
  outputText += characterList.charAt((Math.floor(Math.random() * (characterList.length - 1)) + 1));

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
  numberList.push(randomString(newStringLength, numbersOnly));
  encodedList.push(encodeID.encode(numberList[i]));
}

// Decode encoded strings
for (var j = 0; j < encodedList.length; j++) {
  decodedList.push(encodeID.decode(encodedList[j]));
}

console.log("Generated Numbers:");
console.log("(Note: Long numbers may be interpreted as Strings)");
console.log("");

var x;
// Check outputs
for (var k = 0; k < decodedList.length; k++) {
  console.log("Number:   ", numberList[k]);
  console.log("Type:     ", (!(isNaN(numberList[k]) ? !1 : (x = parseInt(numberList[k]), (0 | x) === x)) ? "String" : "Integer"));
  console.log("Encoded:  ", encodedList[k]);
  console.log("Decoded:  ", decodedList[k]);
  console.log("Match:    ", decodedList[k] === numberList[k]);
  if (decodedList[k] === numberList[k]) { matchCount++; }
  loopCount++;
  console.log("");
}

console.log("");
console.log("Results: ");
console.log("Correct Matches: ", matchCount);
console.log("Numbers Checked: ", loopCount);
console.log("Numbers Generated: ", numberList.length);
console.log("Accuracy:", ((matchCount / loopCount) * 100) + "%");
