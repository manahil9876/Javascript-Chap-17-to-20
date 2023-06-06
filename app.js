var multiArray = [[1, 2, ], [ 6], [7, 8, 9] ,[9,8,1,7,6]];
console.log(multiArray);

var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]];
    console.log(matrix);

    for (var i = 1; i <= 10; i++) {
        console.log(i);
      }

var tableNumber = parseInt(prompt("Enter the number for multiplication table:"));
var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));


console.log("Multiplication Table of " + tableNumber + ":");

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  console.log(tableNumber + " x " + i + " = " + result);
}
      
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Fruits:");

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Counting:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}
console.log("Reverse counting:");
for (var i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}


console.log("Odd:");
for (var i = 1; i <= 19; i += 2) {
  console.log(i);
}
console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

var A = ["cake", "smoothie", "cookie", "chips", "patties"];

var userInput = prompt("Enter an item to search:");

userInput = userInput.toLowerCase();

var found = false;

for (var i = 0; i < A.length; i++) {
  
  var currentItem = A[i].toLowerCase();

  if (currentItem === userInput) {
    found = true;
    break;
  }
}

if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

var A = [24, 53, 78, 91, 12];

var largest = A[0];
for (var i = 1; i < A.length; i++) {

  if (A[i] > largest) {
    largest = A[i];
  }
}
console.log("The largest number is: " + largest);

var A = [24, 53, 78, 91, 09];

var smallest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
console.log("The smallest number is: " + smallest);


for (var i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  