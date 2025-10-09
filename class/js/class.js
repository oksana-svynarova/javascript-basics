'use strict';

// 1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.

class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return `Circle radius: ${this._radius.toFixed(2)}`;
  }

  set radius(newRadius) {
    if(newRadius <= 0) {
        console.log(`Radius is not defined`);
    } else {
        this._radius = newRadius;
    }
  }

  get diameter() {
    return `Circle diameter: ${(2 * this._radius).toFixed(2)}`;
  }

  circleArea() {
    return `Circle area: ${(Math.PI * Math.pow(this._radius, 2)).toFixed(2)}`;
  }

  circleCircumference() {
    return `Circle сircumference: ${(2 * Math.PI * this._radius).toFixed(2)}`;
  }
}

let myCircle = new Circle(5);
console.log(myCircle.radius);
console.log(myCircle.diameter);
console.log(myCircle.circleArea());
console.log(myCircle.circleCircumference());

// 2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

class Marker {
  constructor(color, inkAmount) {
    this.color = color;
    this.inkAmount = inkAmount;
  }

  printText(text) {
    let outputText = '';
    for (let i = 0; i < text.length; i++) {
      outputText += text[i]
      if (text[i] !== ' ') {
        this.inkAmount = this.inkAmount - 0.5;
        if (this.inkAmount <= 0) break;
      }
    }
    return `<span style="color:${this.color}">${outputText}</span>`;
  }
}

let myMarker = new Marker('white', 20);

const outputText = document.querySelectorAll('.output-text');
outputText[0].innerHTML = myMarker.printText('I am learning JavaScript and wanna be a Front-end developer!');

class RefillMarker extends Marker {
  constructor(color, inkAmount) {
    super(color, inkAmount);
  }

  refill(amount) {
    this.inkAmount += amount;
    if (this.inkAmount > 100) {
      this.inkAmount = 100;
    }
  }
}

let myMarker_2 = new RefillMarker('black', 10);
myMarker_2.refill(50);
outputText[1].innerHTML = myMarker_2.printText('I am learning JavaScript and wanna be a Front-end developer!');