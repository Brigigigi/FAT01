// Arrays
// Stores a collection of items

let fruits = [
  "Apple",
  "Banana",
  "Guava",
  "Strawberry",
  "Melon",
  "Mango",
  "Orange",
  "Kiwi",
];
console.log("Fruites:", fruits);
console.log("Length of Fruits:", fruits.length);
console.log("This is the 3rd Fruit:", fruits[2]);
console.log("This is the 1st Fruit:", fruits[0]);
console.log("This is the last Fruit:", fruits[fruits.length - 1]);

// Update an element
fruits[0] = "Avocado";
console.log("Fruites:", fruits);

// Add an element
// " .push() " method >> add an element at the end of the array
fruits.push("Melon");
console.log("Fruites:", fruits);

// Delete an element
// " .pop() " method >> delete an element at the end
fruits.pop();
console.log("Fruites:", fruits);

// " .splice() " menthod >> add or delete an element at a specified index.
// 1st: starting index
// 2nd: delete count
// 3rd: element(s) you want to add
fruits.splice(3, 3, "Grapes", "Watermelon", "Dragon Fruit");
console.log("Fruites:", fruits);

// Searching Element
// " .includes() " returns a boolean value. Check if an element exist
console.log("Is Melon included?", fruits.includes("Melon"));

// " .indexOf(element) " >> return the index of the element or -1
console.log("Index of Grapes:", fruits.indexOf("Grapes"));

// " .forEach(function) " >> iterate over an array, execute a function for each element.
fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});
