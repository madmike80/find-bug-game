let isChoiceDifficulty = () => {
  const menu = document.querySelectorAll(".list-item");

  for (let item of menu) {
    item.addEventListener("click", () => {
      for (let a of menu) {
        a.classList.remove("list-item_checked");
      }
      item.classList.add("list-item_checked");
    });
  }
};


const playingMenu = document.querySelector(".menu");
const playingGame = document.querySelector(".game");


function createCard(count) {

  const cardHTML = '<div class="card__side card__side_face"></div>' +
    '<div class="card__side card__side_back"></div>';

  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.classList.add("card", "card_hover");
    card.insertAdjacentHTML("afterbegin", `${cardHTML}`);
    playingGame.append(card);
  }
}


let randomCard = count => {
  const cards = document.querySelectorAll(".card__side_face");

  let random = Math.floor(Math.random() * count);
  for (let i = 0; i < count; i++) {
    if (random === i) {
      cards[i].classList.add("card__side_bug");
      cards[i].classList.remove("card__side_face")
      break;
    }
  }
};


let changeHideBlock = () => {
  playingMenu.classList.toggle("hide");
  playingGame.classList.toggle("hide");
};


let isFlip = () => {
  const cards = document.querySelectorAll(".card");

  function listener() {
    this.classList.add("flip");
    this.classList.remove("card_hover");
    returnToMenu();
    for (let elem of cards) {
      elem.removeEventListener("click", listener);
    }
  }

  for (let item of cards) {
    item.addEventListener("click", listener);
  }
}


let returnToMenu = () => {
  let delCards = document.querySelectorAll(".card");
  let flipCard = document.querySelector(".flip");

  const level = document.querySelector(".list-item_checked");

  function removeCards() {
    for (let delCard of delCards) {
      delCard.remove();
    }
    (document.querySelector(".hard") && playingGame.classList.remove("hard")) ||(document.querySelector(".medium") && playingGame.classList.remove("medium"));
    level.classList.remove("list-item_checked");
    changeHideBlock();
    flipCard.removeEventListener("click", removeCards);
  }

  flipCard.addEventListener("click", removeCards);

};


function startGame() {

  let count = 0;
  const level = document.querySelector(".list-item_checked");

  switch (`${level.innerHTML}`) {
    case "Простой" :
      count = 3;
      break;

    case "Средний" :
      count = 6;
      break;

    case "Сложный" :
      count = 10;
      break;
  }

  createCard(count);
  randomCard(count);

  if (count === 6) {
    playingGame.classList.add("medium");
  } if (count === 10) {
    playingGame.classList.add("hard");
  }

  changeHideBlock();
  isFlip();
}


isChoiceDifficulty();
document.querySelector("button").addEventListener("click", startGame);