function yesOrNo(isItTrie) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(answer) {
  if (answer === true) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

// A single equal sign is an assignment operator
// Double equal sign checks if the value is equal as in the mathematical sense. This does a type conversion on the values.
// Triple equal signs is a strict equality operator that works for non-numeric values. No type conversion on values.
// For an inequality operator, then add "!" before the equal signs.

var num;

//Greater than
num > 1;

//Greater than or equal to
num >= 10;

//Less than or equal to
num < 25;

// Less than or equal to
num <= 20;

// And statement:

if (num > 2 && num < 5) {
  return "Within desired range";
}

// Or statement:

if (num < 10 || num > 20) {
  return "Outside";
} else "Inside";

// Else statement:

if (num > 10) {
  result = "Bigger than 10";
} else {
  result = "10 or smaller";
}

// Else if statements chain multiple if statements together
// The order of statements is important

if (num > 10) {
  return "Greater than 10";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Greater than or equal to 10";
}

// Chain if/else statements

function houseSizeLabel(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}

// Switch statements

function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case "d":
      answer = "delta";
      break;
  }
  return answer;
}

// Default option in switch statement
function caseInSwitchDefault(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

// Switch statements with multiple inputs for the same output

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "High";
      break;
  }
  return answer;
}
