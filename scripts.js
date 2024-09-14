// Calculator

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function subTwoNumbers(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

const button = document.getElementById("clickme");
let count = 0;

button.addEventListener("click", () => {
  count++;
  document.getElementById("clicks").textContent = count;
  arr.push(count);
});

// Check age for bar
let age = prompt("What is your age?");

Number(age);
console.log(age);
if (age >= 21) {
  console.log("You are allowed to enter & drink");
} else if (age >= 18) {
  console.log("You are allowed to enter but not drink");
} else {
  console.log("You are not allowed in.");
}
