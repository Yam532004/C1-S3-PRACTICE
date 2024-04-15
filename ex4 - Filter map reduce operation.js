// Write the function to filter out even numbers from an array
// You need to use the array.filter() function
function filterEvenNumbers(arr) {
  arr.filter((item) => item % 2 == 0);
}

// Function to map array elements to their squared values
// You need to use the array.map() function
function squareNumbers(arr) {
  arr.map((item) => item * item);
}
 // Function to compute the sum of array elements
// You need to use the array.reduce() function
function sumArray(arr) {
  arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}
console.log("Even numbers:", filterEvenNumbers(numbers)); // [2, 4]
console.log("Squared numbers:", squareNumbers(numbers)); // [1, 4, 9, 16, 25]
console.log("Sum of numbers:", sumArray(numbers)); // 15
