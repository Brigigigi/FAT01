// Control Flow Structures

// 1. Conditional Statements
// if, else if, else
// " () " >> Conditional Block
// " {} " >> Code Block

let temperature = 35;
if (temperature < 0) {
  console.log("It is too cold");
  console.log("Wear a jacket");
} else if (temperature >= 0 && temperature < 20) {
  console.log("It's cold outside");
  console.log("Let's go the park");
} else if (temperature > 20 && temperature < 29) {
  console.log("It is warm outside");
  console.log("Lets get some ice cream");
} else {
  console.log("It's hot outside");
}

// Conditional: switch-case statement
// every case is like a code block
// need to add break statement after every case
let day = "Tuesday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Friday":
    console.log("It's the end of the weekdays.");
    break;
  default:
    console.log("It's just a normal day.");
}

// 2. Looping Statements
// ' for ' Loop

// 1st component: Variable Initialization >> " let i = 1 "
// 2nd component: Condition Expression >> " i <= 3 "
// 3rd component: Increment/Decrement >> i++
for (let i = 1; i <= 3; i++) {
  console.log("For Loop Count:", i);
}
for (let i = 1; i < 100; i *= 2) {
  console.log("This is for multiplying increments:", i);
}

// " while " Loop"
let count = 1; // Variable Initialization >> " let count = 1 " >> outside the loop
while (count <= 3) {
  // Condition Expression >> " count <= 3 " >> can accept a boolean value
  console.log("While Loop count", count);
  count++; // Increment/Decrement >> " count++ " >> inside the code block
}
