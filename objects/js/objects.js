'use strict';

// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку,
// середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
    // 1) Метод, який виводить на екран інформацію про автомобіль.
    // 2) Додавання ім’я водія у список
    // 3) Перевірка водія на наявність його ім’я у списку
    // 4) Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю.
    // Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.

const car = {
  manufacturer: 'Lamborghini',
  model: 'Aventador SVJ Roadster',
  productionYear: 2021,
  averageSpeed: 180,
  maxSpeed: 350,
  tankCapacity: 90,
  averageFuelConsumption: 18,
  color: 'pink',
  drivers: ['Bryan Salamone', 'Oksana Svynarova'],

  getInfo() {
    let info = '';
    for(let key in this) {
      if (typeof this[key] !== 'function') {
        info += `${key}: ${this[key]}; \n`;
      }
    }
    return info;
  },

  addDriverName(name) {
    if (!name) {
      return;
    } else if (this.isDriver(name)) {
      return;
    } this.drivers.push(name);
  },

  isDriver(name) {
    if (!name) {
      return false;
    } return this.drivers.includes(name);
  },

  travelExpenses(distance) {
    if (isNaN(distance) || distance <= 0) {
      return;
    } else {
    let travelTimeWithoutBreaks = distance / this.averageSpeed;
    let breaks = Math.floor(travelTimeWithoutBreaks / 4);
    let travelTimeWithBreaks = travelTimeWithoutBreaks + breaks;
    let travelTimeHours = Math.floor(travelTimeWithBreaks);
    let travelTimeMinutes = Math.round((travelTimeWithBreaks - travelTimeHours) * 60);
    let fuelAmount = ((distance / 100) * this.averageFuelConsumption).toFixed(2);

    return `${travelTimeHours} hours and ${travelTimeMinutes} minutes,\nfuel amount: ${fuelAmount} litres`;
    }
  }
}

const carInfo = document.getElementById("carInfo");
const carDriverInput = document.getElementById("carDriver");
const carDrivers = document.getElementById("carDrivers");
const distanceInput = document.getElementById("distance");
const isDriverInput = document.getElementById("isDriver");
const answer = document.getElementById("answer");
const travelExpenses = document.getElementById("travelExpenses");

carInfo.textContent = `${car.getInfo()}`;

console.log(car.getInfo());

carDriverInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
  car.addDriverName(carDriverInput.value)
  carDrivers.textContent = `${car.drivers.join(', ')}`;
  }
});

isDriverInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
  answer.textContent = `${car.isDriver(isDriverInput.value)}`;
  }
});

distanceInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
  travelExpenses.textContent = `${car.travelExpenses(distanceInput.value)}`;
  }
});


// 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    // 1) Для виведення часу на екран.
    // 2) Зміни часу на передану кількість секунд.
    // 3) Зміни часу на передану кількість хвилин.
    // 4) Зміни часу на передану кількість годин.
    // 5) Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша.
      // Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75».
      // Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

const clock = {
  hours: 0,
  minutes: 0,
  seconds: 0,

   setCurrentTime() {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  },

  showCurrentTime() {
    const hours = String(this.hours).padStart(2, '0');
    const minutes = String(this.minutes).padStart(2, '0');
    const seconds = String(this.seconds).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  },

   changeSeconds(sec) {
    if (isNaN(sec)) {
      return;
    } else {
      this.seconds = Number(this.seconds) + Number(sec);
      while (this.seconds >= 60) {
        this.seconds -= 60;
        this.changeMinutes(1);
      }
      while (this.seconds < 0) {
        this.seconds += 60;
        this.changeMinutes(-1);
      }
      return this.showCurrentTime();
    }
  },

  changeMinutes(min) {
    if (isNaN(min)) {
      return;
    } else {
      this.minutes = Number(this.minutes) + Number(min);
      while (this.minutes >= 60) {
        this.minutes -= 60;
        this.changeHours(1);
      }
      while (this.minutes < 0) {
        this.minutes += 60;
        this.changeHours(-1);
      }
      return this.showCurrentTime();
    }
  },

  changeHours(hour) {
    if (isNaN(hour)) {
      return;
    } else {
      this.hours = (Number(this.hours) + Number(hour)) % 24;
      if (this.hours < 0) this.hours += 24;
      return this.showCurrentTime();
    }
  },
}

clock.setCurrentTime()

const blockCurrentTime = document.getElementById('clock');
const secondsInput = document.getElementById("seconds");
const minutesInput = document.getElementById("minutes");
const hoursInput = document.getElementById("hours");

setInterval(() => {
  clock.changeSeconds(1);
  blockCurrentTime.textContent = `${clock.showCurrentTime()}`;
}, 1000);

secondsInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clock.changeSeconds(Number(secondsInput.value));
  }
});

minutesInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clock.changeMinutes(Number(minutesInput.value));
  }
});

hoursInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    clock.changeHours(Number(hoursInput.value));
  }
});