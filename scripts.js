let arr = [];

function printStuff(element, index) {
  console.log("Printing stuff:", element, "on array positon:", index);
}

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

class NewCar {
  constructor(model, make, year, color) {
    this.model = model;
    this.make = make;
    this.year = year;
    this.color = color;
  }
}

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    this.#firstname = firstname;
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

for (let prop in newCar) {
  console.log(newCar[prop]);
}

// Go to services and create a div saying Magic of DOM
const id = document.getElementById("services");

const element = document.createElement("div");
element.textContent = "Magic of DOM";
id.append(element);

// Check age for bar
let age = prompt("What is your age?");

Number(age);
console.log(age);
if (age >= 21) {
  console.log("You are allowed to enter & drink");
} else if (age >= 19) {
  console.log("You are allowed to enter but not drink");
} else {
  console.log("You are not allowed in.");
}

// Compare age to number 100
let val = prompt("What Number?");
val = Number(val);
let num = 100;
if (val > num) {
  console.log(val + " was greater than " + num);
} else if (val < num) {
  console.log(val + " is less than " + num);
} else if (val === num) {
  console.log(val + " is equal to " + num);
}

// For Loop
const myWork = [];

for (let i = 0; i < 10; i++) {}
