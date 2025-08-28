const CURRENT_YEAR = 2025;
const main_section = document.querySelector("main");
const heading = document.createElement("h2");
const subheading = document.createElement("h3");
const squarePerimeter = document.createElement("h3");
const square = document.createElement("div");

// 1. Ім'я користувача
let userName = prompt("Enter your name:");
alert("Hello, " + userName);
heading.textContent = "Hello, " + userName + "!";

// 2. Рік народження і вік
let userBirthYear = prompt("Enter your year of birth:");
let userAge = CURRENT_YEAR - userBirthYear;
alert("Your age: " + userAge);
subheading.textContent = "Your age: " + userAge;

// 3. Довжина сторони квадрата і периметр
let squareSide = prompt("Enter the length of the side of the square:");
let perimeter = 4 * squareSide;
squarePerimeter.textContent = "Square perimeter: " + perimeter;
square.classList.add("square");
square.style.width = squareSide + "px";
square.style.height = squareSide + "px";

main_section.appendChild(heading);
main_section.appendChild(subheading);
main_section.appendChild(squarePerimeter);
main_section.appendChild(square);