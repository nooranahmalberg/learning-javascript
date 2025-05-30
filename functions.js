// Declaring a function
function reusableFunction() {
  console.log("Hi world!");
}

// Calling the function executes the code within the function

reusableFunction();

// Data can be passed through the function with arguments

function postEngagementMetric(likes, comments, shares, saves) {
  console.log(likes + comments * 2 + shares * 1.5 + saves);
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
// TBD
