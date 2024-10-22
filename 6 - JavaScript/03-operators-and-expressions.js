// Operators and Expressions
// 1. Arithmetic Operators
let num1 = 10;
let num2 = 5;

console.log("Addition (+):", num1 + num2);

console.log("Subtraction (-):", num1 - num2);

console.log("Division (/):", num1 / num2);

console.log("Multiplication (*):", num1 * num2);

console.log("Exponent (**):", num1 ** num2);

console.log("Remainder (%):", num1 % 6); //only gets the remainder or the decimal part

// Order of Operations
// PEMDAS/BODMAS
let answer = 3 + (4 * (5 - 2) ** 2) / 2;
console.log("Answer:", answer);

// 2. String Expressions or Concatenation
let greeting = "Hi";
let firstName = "John";

console.log(greeting + " " + firstName + "!");

// 3. Comparison Operators
// Equal to " == " : Check if two values are equal
// Returns a boolean value
console.log("Equal to (==)", 5 == 5);
console.log("Equal to (==)", 5 == "5"); //Type coercion: converts the data-type if necessary

// Not Equal to " != " : Check if two values are not equal
console.log("Not Equal to (!=)", 5 != 5);
console.log("Not Equal to (!=)", num1 != num2);
console.log("Equal to (!=)", 5 != "5"); //Type coercion: converts the data-type if necessary

// Strict Equal to " === " : Check if two values are equal in value and data type as well
// Will not perform type coecrcion
console.log("Strict Equal to (===)", 5 === 5);
console.log("Strict Equal to (===)", num1 === num2);
console.log("Strict Equal to (===)", 5 === "5");

// Strict Not Equal to " !== " : Check if two values are not equal in value and data type
// Will not perform type coecrcion
console.log("Strict Not Equal to (!==)", 5 !== 5);
console.log("Strict Not Equal to (!==)", num1 !== num2);
console.log("Not Equal to !==)", 5 !== "5");

// Greater Than " > " and Less Than " < "
console.log("Greater Than (>):", 5 > 3);
console.log("Less Than (>):", 5 < 3);

// Greater Than or Equal to " >= "
console.log("Greater Than or Equal to (>=):", 5 >= 3);
console.log("Greater Than or Equal to (>=):", 5 >= 5);

// Less Than or Equal to " >= "
console.log("Less Than or Equal to (<=):", 5 <= 3);
console.log("Less Than or Equal to (<=):", 5 <= 5);

// 4. Logical Operators
// AND >> " && " -- Only returns true if both variables are true; otherwise returns false
// OR >> " || " -- Returns true if both or either one variables is true; otherwise returns false if both false
// NOT >> " ! " -- Inverts the value of boolean
let sunny = true;
let warm = true;
console.log("Is it sunny AND warm?:", sunny&&warm); // AND

console.log("Is it sunny OR warm?:", sunny||warm); // OR

console.log("NOT sunny:", !sunny); // NOT

// 5. Asssignment Expression
// Assigning a value to a variable " = "
let num3 = 10;
let num4 = 5;

// Addition assignment " += "
num3 += num4; //value of num3 will be replaced by the answer to num3 + num4
console.log("The new value of num3:",num3);

// Subtraction assignment " -= "
num3 -= num4; //value of num3 will be replaced by the answer to num3 - num4
console.log("The new value of num3:",num3); //The answer is 10 because the current value of num3 is 15 from the previous computation

// Multiplication assignment " *= "
num3 *= num4; //value of num3 will be replaced by the answer to num3 * num4
console.log("The new value of num3:",num3); //The answer is 10 because the current value of num3 is 10 from the previous computation

// Division assignment " /= "
num3 /= num4; //value of num3 will be replaced by the answer to num3 / num4
console.log("The new value of num3:",num3); //The answer is 10 because the current value of num3 is 50 from the previous computation

// Exponent assignment " **= "
num3 **= num4; //value of num3 will be replaced by the answer to num3 ** num4
console.log("The new value of num3:",num3); //The answer is 10 because the current value of num3 is 10 from the previous computation

// Remainder assignment " %= "
num3 %= num4; //value of num3 will be replaced by the answer to num3 % num4
console.log("The new value of num3:",num3); //The answer is 10 because the current value of num3 is 100000 from the previous computation
// returns 0 since the answer does not have a remainder or the answer is a whole number

let num5 = 10;
let num6 = 6;
answer = num5 %= num6;
console.log("For Remainder assignment", answer); // returns the remainder
