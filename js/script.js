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

let startGame = () => {

  let cardSide = [
    {side: "bug", img: "./img/card_bug.png"},
    {side: "face", img: "./img/game_over.png"},
    {side: "back", img: "./img/back_of_a_card.png"}
  ];
  let count = 0;
  const level = document.querySelector(".list-item_checked");
  const playingMenu = document.querySelector(".menu");
  const playingGame = document.querySelector(".game");

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

  if (count === 10) {
    playingGame.classList.add("hard")
  }

  function createCard() {
    let index;
    let randomCard = Math.floor(Math.random() * count);
    for (let i = 0; i < count; i++) {
      if (randomCard === i) {
        index = 0;
      } else {
        index = 1;
      }
      const card = document.createElement("div");
      card.classList.add("card", "card_hover");
      card.insertAdjacentHTML("afterbegin", `
      <img class="card__side card__side_face" data-set="${cardSide[index].side}" src="${cardSide[index].img}" alt="Face side">
      <img class="card__side card__side_back" src="${cardSide[2].img}" alt="Back side">
      `)
      playingGame.append(card);
    }
  }

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

    function removeCards() {
      for (let delCard of delCards) {
        delCard.remove();
      }
      document.querySelector(".hard") && playingGame.classList.remove("hard");
      level.classList.remove("list-item_checked");
      changeHideBlock();
      flipCard.removeEventListener("click", removeCards);
    }

    flipCard.addEventListener("click", removeCards);

  };

  createCard();
  changeHideBlock();
  isFlip();
}

isChoiceDifficulty();
document.querySelector("button").addEventListener("click", startGame);