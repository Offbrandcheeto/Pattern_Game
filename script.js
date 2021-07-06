'use strict';

let playing = false;
let ready = false;

let order = [
  randomInteger(1, 4),
  randomInteger(1, 4),
  randomInteger(1, 4),
  randomInteger(1, 4),
];

let newOrder = [];

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');

const mainBtn = document.getElementById('btn');

function reset() {
  ready = false;
  playing = false;
  newOrder = [];
  order = [
    randomInteger(1, 4),
    randomInteger(1, 4),
    randomInteger(1, 4),
    randomInteger(1, 4),
  ];
  console.log(order);
}

mainBtn.addEventListener('click', startGame);

function startGame() {
  if (playing === false) {
    console.log(order);
    playing = true;
    for (let i = 0; order.length > i; i++) {
      sortOrder(order[i], i);
    }
  }
  ready = true;
}

function sortOrder(e, i) {
  setTimeout(function () {
    if (e === 1) {
      displayOne();
    } else if (e === 2) {
      displayTwo();
    } else if (e === 3) {
      displayThree();
    } else {
      displayFour();
    }
  }, 1000 * i);
}

function displayOne() {
  one.style.background = 'green';
  setTimeout(() => {
    one.style.background = 'red';
  }, 200);
}

function displayTwo() {
  two.style.background = 'green';
  setTimeout(() => {
    two.style.background = 'red';
  }, 200);
}

function displayThree() {
  three.style.background = 'green';
  setTimeout(() => {
    three.style.background = 'red';
  }, 200);
}

function displayFour() {
  four.style.background = 'green';
  setTimeout(() => {
    four.style.background = 'red';
  }, 200);
}

one.addEventListener('click', oneFunction);
two.addEventListener('click', twoFunction);
three.addEventListener('click', threeFunction);
four.addEventListener('click', fourFunction);

function oneFunction() {
  if (ready === true) {
    newOrder.push(1);

    if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) === JSON.stringify(order)
    ) {
      alert('You Win!');
      reset();
    } else if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) !== JSON.stringify(order)
    ) {
      alert('You Lose!');
      reset();
    }
  }
}

function twoFunction() {
  if (ready === true) {
    newOrder.push(2);

    if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) === JSON.stringify(order)
    ) {
      alert('You Win!');
      reset();
    } else if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) !== JSON.stringify(order)
    ) {
      alert('You Lose!');
      reset();
    }
  }
}

function threeFunction() {
  if (ready === true) {
    newOrder.push(3);

    if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) === JSON.stringify(order)
    ) {
      alert('You Win!');
      reset();
    } else if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) !== JSON.stringify(order)
    ) {
      alert('You Lose!');
      reset();
    }
  }
}

function fourFunction() {
  if (ready === true) {
    newOrder.push(4);

    if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) === JSON.stringify(order)
    ) {
      alert('You Win!');
      reset();
    } else if (
      newOrder.length === 4 &&
      JSON.stringify(newOrder) !== JSON.stringify(order)
    ) {
      alert('You Lose!');
      reset();
    }
  }
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
