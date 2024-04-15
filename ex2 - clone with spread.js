let originalArray = [1, 2, 3, 4, 5];
function updateArray(array, index, newValue) {
  currentArray = [...originalArray];
  currentArray[index] = newValue;
  return currentArray;
}

let updatedArray = updateArray(originalArray, 2, 10);

console.log("Original array:", originalArray); // original array should not be modified...
console.log("Updated array:", updatedArray);