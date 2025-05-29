/* Strings are a data type for web contents */

/* pay attention to the quotation mark in quotes. Blackslash can be used as an escape thing. Or use mix of single quotes and double quotes
\' single quite
\" double quote
\\ backslash
\n ?
\r ?
\t ?
\b ?
\f ?
*/

// concatonate strings
myStr = "This ithe start.";
myStr += "This is the end";

// Append variables to string
var adj = "worthwhile";
var myStr = "learning js is";

myStr += adj;

//length of string
var author = "lovelace";
author.length;

//get a character in the tring
var firstName = "ada";
firstName[0];

// strings are immutable. that means that they cannot be changed. this is not possible:
var profileBio = "looking for true love";
profileBio[0] = "L";

// this will work though
profileBio = "Looking for true love";

// finding the last letter of the string
var lastLetter = profileBio[profileBio.length - 1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " " +
    "around the yard " +
    myAdverb;
  return result;
}

wordBlanks("kite", "purple", "swerved", "choppily");
