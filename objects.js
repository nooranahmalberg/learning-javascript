// Object with keys mango, billy - and value of cat dog (string)
const simpleObject = {
  mango: "cat",
  billy: "dog",
};

// Object with keys yummy and yuck, and values of string arrays
const arrayObject = {
  yummy: ["chocolate", "moons", "purple rice yoghurt"],
  yuck: ["salad", "artichoke"],
};

const nestedObjects = {
  pet01: {
    name: "Mango",
    species: "Cat",
    favouriteFood: ["fish", "turkey"],
    yearBorn: 2020,
  },
  pet02: {
    name: "Billy",
    species: "Dog",
    favouriteFood: ["everything"],
    yearBorn: 2015,
  },
};

Object.values(nestedObjects).filter((pet) => pet.favouriteFood == "everything");

// Object.values is a native javascript function
let petsAge = Object.values(nestedObjects).map(
  (value) => 2025 - value.yearBorn
);

// Other native functions: Object.keys, Object.entries ...

const trackStreams = {
  pleasepleaseplease: 200,
  espresso: 2000,
  feather: 50,
};

// Reduced the array of numbers into a single number
const totalStreams = Object.values(trackStreams).reduce(
  (value, currentvalue) => value + currentvalue,
  0
);

const averageStreams = totalStreams / Object.keys(trackStreams).length;
