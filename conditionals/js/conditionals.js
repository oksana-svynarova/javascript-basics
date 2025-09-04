"use strict";

// Мінімум:

// 1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11),
// підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...),
// передбач можливість введення невірних даних.

const userAge = prompt("How old are you?");

if (!userAge || isNaN(userAge) || userAge < 0) {
  alert("Please enter a valid age!");
} else if (userAge <= 11) {
  alert("You are a child!");
} else if (userAge <= 17) {
  alert("You are a teenager!");
} else if (userAge <= 59) {
  alert("You are an adult!");
} else {
  alert("You are a pensioner!");
}

// 2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const number = Number(prompt("Enter a number from 0 to 9:"));

switch (number) {
  case 1:
    alert("!");
    break;
  case 2:
    alert("@");
    break;
  case 3:
    alert("#");
    break;
  case 4:
    alert("$");
    break;
  case 5:
    alert("%");
    break;
  case 6:
    alert("^");
    break;
  case 7:
    alert("&");
    break;
  case 8:
    alert("*");
    break;
  case 9:
    alert("(");
    break;
  case 0:
    alert(")");
    break;
  default:
    alert("Please enter a valid number from 0 to 9!");
}

// 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const startNum = Number(prompt("Enter the start number:"));
const endNum = Number(prompt("Enter the end number:"));

let sum = 0;
for (let i = startNum; i <= endNum; i++) {
  sum += i;
}
alert(`The sum of numbers from ${startNum} to ${endNum} is ${sum}`);

// 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.

const firstNum = Number(prompt("Enter the first number:"));
const secondNum = Number(prompt("Enter the second number:"));

if (isNaN(firstNum) || isNaN(secondNum)) {
  alert("Please enter numbers!");
} else {
let a = firstNum;
let b = secondNum;

while (b !== 0) {
  let temp = b;
  b = a % b;
  a = temp;
}

alert(`The greatest common divisor of ${firstNum} and ${secondNum} is ${a}`);
}

// 5. Запитай у користувача число і виведи всі дільники цього числа.

const num = Number(prompt("Enter a number:"));

if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
  alert("Please enter a positive integer!");
} else {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  alert(`The divisors of ${num} are: ${divisors.join(", ")}`);
}

// Норма:

// 1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

const fiveDigitNum = prompt("Enter a five-digit number:")

if (fiveDigitNum.length !== 5 || isNaN(Number(fiveDigitNum))) {
  alert("Please enter a valid five-digit number!");
} else if (fiveDigitNum[0] === fiveDigitNum[4] && fiveDigitNum[1] === fiveDigitNum[3]) {
  alert(`${fiveDigitNum} is a palindrome!`);
} else {
  alert(`${fiveDigitNum} is NOT a palindrome.`);
}

// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

const purchaseAmount = Number(prompt("Enter the amount of your purchase:"));

if (isNaN(purchaseAmount) || purchaseAmount <= 0) {
  alert("Please enter a valid positive number!");
} else {
  let discount = 0;
  if (purchaseAmount >= 200 && purchaseAmount < 300) {
    discount = 0.03;
  } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
    discount = 0.05;
  } else if (purchaseAmount >= 500) {
    discount = 0.07;
  }

  const finalAmount = purchaseAmount * (1 - discount);
  alert(`The amount to pay after discount is: ${finalAmount.toFixed(2)}`);
}

// 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів.
// При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран.
// Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

let posNum = 0;
let negNum = 0;
let zeros = 0;
let evenNum = 0;
let oddNum = 0;

for (let i = 0; i < 10; i++) {
  const numInput = Number(prompt(`Enter number ${i + 1}:`));

  if (isNaN(numInput)) {
    alert("Please enter a valid number!");
    i--;
    continue;
  }

  if (numInput > 0) posNum++;
  else if (numInput < 0) negNum++;
  else zeros++;

  if (numInput % 2 === 0) evenNum++;
  else oddNum++;
}

alert(`You've just input:
- positive numbers: ${posNum}
- negative numbers: ${negNum}
- zeros: ${zeros}
- even numbers: ${evenNum}
- odd numbers: ${oddNum}`);

// 4. Зацикли відображення днів тижня таким чином: «День тижня.
// Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = 0;
let nextDay;

do {
  nextDay = confirm(`${days[i]}. Do you want to see the next day?`);
  i = (i + 1) % days.length;
} while (nextDay);