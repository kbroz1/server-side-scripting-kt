// Create a command-line node application that takes in parameters like this:

// * `node calculator.js add 1 2` ... and outputs 3
// * `node calculator.js subtract 5 2` ... and outputs 3
// * `node calculator.js multiply 3 2` ... and outputs 6
// * `node calculator.js divide 8 2` ... and outputs 4
// * `node calculator.js remainder 7 2`... and outputs 1

// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
switch (operand) {
case "add":
  outputNum = parseFloat(num1) + parseFloat(num2);
  break;

case "subtract":
  outputNum = parseFloat(num1) - parseFloat(num2);
  break;

case "multiply":
  outputNum = parseFloat(num1) * parseFloat(num2);
  break;

case "divide":
  outputNum = parseFloat(num1) / parseFloat(num2);
  break;

case "remainder":
  outputNum = parseFloat(num1) % parseFloat(num2);
  break;

case "exp":
  outputNum = Math.pow(num1, num2);
  break;

case "algebra":
  outputNum = parseAlgebra(num1);
  break;

default:
  outputNum = "Not a recognized command";
}

// Prints the outputNumber
console.log(outputNum);

// =======================================================

// BONUS - Algebra
// Here we take in a string expression.
// We assume input is always of the form "ax+b=c"
// And we returns the parsed result

function parseAlgebra(equation) {
  // Getting the index of x in the equation

  // Finding the index of the sign

  // Getting the index of the equals sign

  // Getting the numerical value for the first number to appear in the equation
 
  // Getting the sign out of our equation
  
  // Getting the numerical value of the second number in the equation by grabbing the
  // piece of the equation between the operator and equals sign
 
  // Getting the third number by grabbing the piece of the equation between the equals
  // sign and the end of the equation
  
  // Defining a result variable we'll use to hold our solution
  

  // Performing the appropriate operation based on the sign
  
}

 