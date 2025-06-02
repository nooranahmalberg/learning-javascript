/* Function allows us to make reusable code in JS */

// Declaring a function
function reusableFunction() {
  console.log("Hi world!");
}

// Calling the function executes the code within the function

reusableFunction();

// Data can be passed through the function with arguments

function postEngagementMetric(likes, comments, shares, saves) {
  return likes + comments * 2 + shares * 1.5 + saves;
}

postEngagementMetric(500, 50, 0, 20);

// Global scope means it can seen anywhere in the JS code.
// Local scope means they are only visible within the function

var viewPoint = "AI can free our time for more meaningful endeavours";

function addNuance() {
  const polarity =
    " and it can also be a crutch to learning and analytical thinking.";
  viewPoint = viewPoint + polarity;
  return viewPoint;
}

// In the above, viewPoint is a variable with global scope. polarity is a variable with local scope.
// Below will not work because polarity is only available from within the addNuance() function
// viewPoint = viewPoint + polarity

// Values can be returned FROM a function

function commentsToLikesRatio(likes, comments) {
  return likes / comments;
}

commentsToLikesRatio(10, 5);

// If nothing is specified to be returned in a function an undefined value will be returned when that function is called

// Next in line function can simulate a computer science concept called Queue
// JSON.stringify(exampleArray) changes an array into a string

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// You can leave a function any time with a return statement

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
}
