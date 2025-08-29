'use strict';

// Мінімум:
// 1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.

let sum = (Math.round(0.1 * 100) + Math.round(0.2 * 100)) / 100;
console.log(sum);

// 2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.

let a = '1';
let b = 2;
let result = +a + b;
console.log(result);

// 3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

const flashCapacity = document.getElementById("flashCapacity");
const filesNumber = document.getElementById("filesNumber");

flashCapacity.addEventListener("input", () => {
  const flashCapacityGb = Number(flashCapacity.value);
  const flashCapacityMb = flashCapacityGb * 1024;
  filesNumber.textContent = `${Math.floor(flashCapacityMb / 820)}`;
});

// Норма:
// 1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.

const moneyAmountInput = document.getElementById("moneyAmount");
const chocolatePriseInput = document.getElementById("chocolatePrise");
const chocolateNumber = document.getElementById("chocolateNumber");
const change = document.getElementById("change");

function calculate() {
  const moneyAmount = Number(moneyAmountInput.value);
  const chocolatePrise = Number(chocolatePriseInput.value);
  chocolateNumber.textContent = `${Math.floor(moneyAmount / chocolatePrise)}`;
  change.textContent = `${(moneyAmount - chocolatePrise * Math.floor(moneyAmount / chocolatePrise)).toFixed(2)}`;
};

moneyAmountInput.addEventListener("input", calculate);
chocolatePriseInput.addEventListener("input", calculate);

// 2. Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

const threeDigitNumberInput = document.getElementById("threeDigitNumber");
const reversedNumber = document.getElementById("reversedNumber");

threeDigitNumberInput.addEventListener("input", () => {
  const threeDigitNumber = Number(threeDigitNumberInput.value);
  let hundreds = Math.floor(threeDigitNumber / 100);
  let tens = Math.floor((threeDigitNumber % 100) / 10);
  let units = threeDigitNumber % 10;
  reversedNumber.textContent = `${units * 100 + tens * 10 + hundreds}`;
});

// Максимум:
// 1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних.
// Вивести суму нарахованих відсотків.

const depositInput = document.getElementById("deposit");
const interest = document.getElementById("interest");

depositInput.addEventListener("input", () => {
  const deposit = Number(depositInput.value);
  const annualRate = 5;
  const months = 2;
  interest.textContent = `${((deposit * annualRate / 100) / 12 * months).toFixed(2)}`;
});

// 2. Що повернуть вирази:

console.log(2 && 0 && 3);
console.log(2 || 0 || 3);
console.log(2 && 0 || 3);