console.log("Hello World!");

// This is a single-line comment
/* This is 
    a multi-line 
    comment    
*/

// Variables >> container
/*
    let >> mutable/changeable variable -- block-scope level > Only usable inside a code block
    var >> mutable/changeable variable -- global-scope level > Can be used even outside a code block
    const >> unmutable/unchangeable  -- block-scope level
*/

// Camel case naming convention ex. firstName
let firstName = "John";
console.log("Hello", firstName);
firstName = "Miko";
console.log("Hello", firstName);

var lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "David";
console.log("Lastname:", lastName);

const birthday = "02-14-2000";
console.log("Birthday:", birthday)
// birthday = "03-18-2001"; // This will show TypeError

if (true) {
    var email = "mikodavid@example.com";
    let username = "mikodavid20";
    console.log("Email:", email);
    console.log("Username:", username);
}

console.log("Email:", email);
// console.log("Username:", username); //This will return a ReferenceError
