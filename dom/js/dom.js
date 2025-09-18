'use strict';

// 1. Створити сторінку, що показує нумерований список пісень:

const arrPlayList = [
  {
  author: "LED ZEPPELIN",
  song:"STAIRWAY TO HEAVEN"
  },
  {
  author: "QUEEN",
  song:"BOHEMIAN RHAPSODY"
  },
  {
  author: "LYNYRD SKYNYRD",
  song:"FREE BIRD"
  },
  {
  author: "DEEP PURPLE",
  song:"SMOKE ON THE WATER"
  },
  {
  author: "JIMI HENDRIX",
  song:"ALL ALONG THE WATCHTOWER"
  },
  {
  author: "AC/DC",
  song:"BACK IN BLACK"
  },
  {
  author: "QUEEN",
  song:"WE WILL ROCK YOU"
  },
  {
  author: "METALLICA",
  song:"ENTER SANDMAN"
  }
];

const playList = document.getElementById('playList');
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');
const changeColorBtn = document.getElementById('changeColor');
const circles = document.querySelectorAll('.circle');

function createEl (tagName) {
  return document.createElement(tagName);
}

function addClass(newEl, className) {
  newEl.classList.add(className);
  return newEl;
}

function showPlayList(arr) {
  let playListItem;
  for(let key of arr) {
    playListItem = addClass(createEl('li'), 'list-item')
    playListItem.insertAdjacentHTML('beforeend',`${key.author} <span>\"${key.song}\"</span>`);
    playList.append(playListItem);
  }
}

showPlayList(arrPlayList);

// 2. Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
// На модальном вікні повинен бути текст і кнопка "Закрити".
// Спочатку модальне вікно не відображається.
// При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

openBtn.addEventListener('click', () => {
  modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

// 3. Створити HTML-сторінку зі світлофором і кнопкою,
// яка перемикає світлофор на наступний колір.

let light = 0;

changeColorBtn.addEventListener('click', () => {
  circles[light].classList = 'circle';
  light++;

  if(light > 2) {
    light = 0;
  }

  const selectLight = circles[light];
  selectLight.classList.add(selectLight.getAttribute('color'));
})