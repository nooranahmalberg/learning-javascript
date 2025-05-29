/* Strings are a data type for web contents */

/* Something to consider is using quotes within quotes when coding. Blackslash can be used as an escape thing. Or use mix of single quotes and double quotes
\' to escape single quite
\" to escape double quote
\\ backslash and more:
\n 
\r 
\t 
\b 
\f 
*/

// concatonate strings
myStr = "This ithe start.";
myStr += "This is the end";

// Append variables to string
var adj = "worthwhile";
var myStr = "learning js is";

myStr += adj;

//Length of string
var author = "lovelace";
author.length;

//Get first character in the string
var firstName = "ada";
firstName[0];

// Strings are immutable, which means that parts of the value cannot be targetted and changed. For example, the following is not possible:
var profileBio = "learning in public";
profileBio[0] = "L";

// However, this will work because the whole value is changed:
profileBio = "Learning in public";

// Using .length to the last letter of the string
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

wordBlanks("kite", "red", "drifted", "slowly");
