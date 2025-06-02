// Question 1: Filter out only completed tasks from this array of objects
const tasks = [
  { id: 1, title: "Task 1", completed: true },
  { id: 2, title: "Task 2", completed: false },
  { id: 3, title: "Task 3", completed: true },
];

// Question 2: Sum all of the totals in a shopping cart
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

// Question 3: Concatenate all the strings in this array into a string
const strings = ["Hello", "World", "This", "is", "a", "test"];

// Question 4: Create a function that takes a string and returns the number of vowels in the string
function countVowels(value) {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringVowels = value
    .split("")
    .filter((letter) => vowels.includes(letter));
  return stringVowels.length;
}
console.log(countVowels("Billy is a cute pupper"));

// Question 5: Our API returns a list of tasks. In each of the tasks, there is a status property.
// We want the UI to show 'Completed' if the status is 'COMPLETED' and 'Pending' if the status is 'PENDING'.
// How could we do this?

const apiData = [
  {
    id: 1,
    title: "Task 1",
    status: "COMPLETED",
  },
  {
    id: 2,
    title: "Task 2",
    status: "PENDING",
  },
  {
    id: 3,
    title: "Task 3",
    status: "COMPLETED",
  },
];

const formattedStatus = {
  COMPLETED: "Completed",
  PENDING: "Pending",
};

apiData.map((task) => {
  return {
    ...task,
    status: formattedStatus[task.status],
  };
});
