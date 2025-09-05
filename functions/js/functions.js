"use strict";

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

function argCounter () {
  console.log(`Number of arguments: ${arguments.length}`);
}

argCounter("10",true,"30",false,"50",-60);

// 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.

let numComparator = (num_1, num_2) => (num_1 < num_2) ? -1 : (num_1 > num_2) ? 1 : 0;

console.log(numComparator(-5, 5));
console.log(numComparator(5, -5));
console.log(numComparator(5, 5));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.

let factorial = function (num) {
  if (num < 0) {
    return "Factorial is undefined for negative numbers";
  } else {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
  }
}

console.log(factorial(-1));
console.log(factorial(0));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let numConverter = (num_1, num_2, num_3) => Number(`${num_1}${num_2}${num_3}`);

console.log(numConverter(5,2,3));

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function getSquare (length, width) {
  if (arguments.length === 1) return length * length;
  else return length * width;
}

console.log(getSquare(5));
console.log(getSquare(5, 8));

// Норма
// 1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

let isPerfectNum = function (num) {
  if (num <= 0) {
    return false; // Perfect number cannot be negative or zero
  } else {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
      sum += i;
      }
    }
    return sum === num;
  }
}

console.log(isPerfectNum(-8));
console.log(isPerfectNum(6));
console.log(isPerfectNum(8));

// 2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію,
// щоб дізнатися, чи є це число досконалим.

function getPerfectNumbers (minNum, maxNum) {
  let perfectNumbers = "";
  for (let i = Math.max(1, minNum); i <= maxNum; i++) {
    if (isPerfectNum(i)) perfectNumbers += perfectNumbers ? `, ${i}` : `${i}`;
  }
  return perfectNumbers || "No perfect numbers";
}

console.log(getPerfectNumbers(-50,0));
console.log(getPerfectNumbers(-50,37658));