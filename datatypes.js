/* Data Types :
undefined, null, boolean, number, string, object, and symbol(no idea but fyi, it's an immutable primitive value that is unique)
*/

// undefined
let a;
// console.log(a);

// null
let b = null;
// console.log(b);

// boolean
let c = true;
// console.log(c);

/* NUMBER */
let d = 10;

/* STRING */
let e = "Hello";
e = "Hello" + "World";

//object store key-value pairs
let g = {
  name: "John",
  age: 20,
};

/* Data are stored in variables. These variables are like a box that can be filled with anything */

//Var declaration for data that can change
var city = "New York";

// Let declaration for data that can change
let age = 20;

//Const declaration for data that will not change
const name = "John";

//Declaring variable. Jordan recommends defaulting to const because the declaration should always reflect the intent of that code.
const myPets = ["Mango", "Billy"];
const solidCoatColours = ["orange", "black", "brown", "white", "beige"];

let petDescription =
  myPets[0] + "'s coat colour is " + solidCoatColours[0] + ".";

//Escape quote or I can just use single quote
petDescription =
  myPets[1] +
  "'s coat colour is " +
  solidCoatColours[4] +
  '. When he woofs, he is saying, "Please play with me".';

// Declare object of objects
const petsObject = {
  mango: { name: "Mango", coat: "orange", breed: "domestic short hair" },
  billy: { name: "Billy", coat: "beige", breed: "labrador retriever" },
};

/* accessing the values with key that is statically available */
// console.log(petsObject.billy);

/* accessing the values dynamically, useful in loops */
// console.log(petsObject["billy"]);

// Object.values(petsObject) and Object.keys(petsObject are stored in arrays

// for loop
// Object.values(petsObject).forEach((value) => console.log(value.name));

/* CHALLENGE: for loop to print if <name> is <coat> then <breed>? */
