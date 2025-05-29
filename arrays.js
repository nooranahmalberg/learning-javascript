/* Store multiple values with Arrays */

var currentlyReading = [
  "Path to senior designer",
  "Sand talk",
  "Design for impact",
];

var mostRecent = currentlyReading[0];

// Modify Array Data
currentlyReading[2] = "The user experience team of one";

// Nested arrays

var pathToSeniorDesigner = [
  ["Pages", 30],
  ["Characters", 1000],
];

// Access multidimensional array or nested arrays
const estReadingTimeInMinutes = pathToSeniorDesigner[0][1] * 5;

// Push function to append data to the end of an array

currentlyReading.push(["This is service design doing"]);

pathToSeniorDesigner.push(["Words", 300]);

// Pop function to remove the last item from the array

currentlyReading.pop();

// Shift function removes the first item from the array

currentlyReading.shift();

// Unshift function to add data to the start of the array
currentlyReading.unshift("Humankind");

console.log(currentlyReading);

// List of wardrobe items

const ranahsWardrobe = [
  ["Jeans", 5],
  ["Tops", 11],
  ["Dresses", 9],
  ["Shoes", 6],
  ["Bags", 500],
];
