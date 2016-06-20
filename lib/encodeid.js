(function(m) {

  m.exports = {};

  var encodeID = function(settings) {

    var sepCharacterList;
    var padCharList;
    var multiplesOf;
    var debug;

    this.init = function(settings) {

      // Set default settings if they are not injected.
      if (typeof(settings) != "undefined") {
        sepCharacterList = (typeof(settings.sepCharacterList) != "undefined" ? settings.sepCharacterList : ["-", "_", ":", "*", "&"]);
        padCharList = (typeof(settings.padCharList) != "undefined" ? settings.padCharList : ["0"]);
        multiplesOf = (typeof(settings.multiplesOf) != "undefined" ? settings.multiplesOf : 6);
        debug = (typeof(settings.debug) != "undefined" ? settings.debug : false);
      } else {
        sepCharacterList = ["-", "_", ":", "*", "&"];
        padCharList = ["0"];
        multiplesOf = 6;
        debug = false;
      }

      if (debug) {
        console.log(Math.round(new Date().getTime() / 1000).toString(), " | encodeID::init(): ", settings);
      }
    };

    this.encode = function(inputData) {
      var outputData = "";
      var padderArray = sepCharacterList.concat(padCharList);

      // Pad the string with our dummy characters ($sepCharacterList) until its length is in multiples of multiplesOf so we don't get == on the end of base64_encode
      for (; (outputData.length + inputData.length) % multiplesOf != 0; outputData += padderArray[generateRandomNumber(0, padderArray.length - 1)]);

      outputData += inputData;
      outputData = new Buffer(outputData).toString('base64');

      // Just in case padding wasn't done correctly, we still want it to be valid for a URL.
      outputData.split('=').join('_');
      outputData.split('+').join('-');

      return outputData;

    };

    this.decode = function(inputData) {

      inputData.split('_').join('=');
      inputData.split('-').join('+');

      outputData = new Buffer(inputData, 'base64').toString('ascii')

      outputData = removeCharacters(sepCharacterList, "", outputData);
      //console.log("arr", trimLeft(padCharList.join(), outputData));
      outputData = trimLeft(padCharList.join(), outputData);

      return outputData;

    };

    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Since the String's trimLeft() doesn't accept a list of characters that can be removed (it only removes whitespace) I've created my own, proper trimLeft.
    function trimLeft(charactersToFind, inputString) {
      var outputString = inputString;
      var stringFound = true;

      for (var i = 0; i < inputString.length; i++) {
        if (!stringFound) { return outputString.trimLeft(); }

        stringFound = false;

        for (var k = 0; k < charactersToFind.length; k++) {

          if (inputString[i] === charactersToFind[k]) {
            inputString[i] = " ";
            stringFound = true;
            continue;
          }
        }
      }
      
      return outputString;
    }

    function removeCharacters(charactersToFind, replaceWith, inputString) {

      var outputString = inputString;

      if (typeof(charactersToFind) === "object") {
        for (charactersToFindIndex in charactersToFind) {
          outputString = outputString.split(charactersToFind[charactersToFindIndex]).join(replaceWith);
        }
      } else {
        outputString = inputString.split(charactersToFind).join(replaceWith);
      }

      return outputString;
    }

    this.init(settings);

    return this;

  };

  m.exports = encodeID;

})(module);
