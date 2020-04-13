let isSearchDifficulty = () => {
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
  let count = 0;
  const level = document.querySelector(".list-item_checked");
  const playingMenu = document.querySelector(".menu");
  const playingGame = document.querySelector(".game");
  const card = document.querySelector(".card");

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

  let changePlayingField = () => {
    if (count === 10) {
      playingGame.classList.add("hard")
    }

    playingMenu.classList.toggle("hide");
    playingGame.classList.toggle("hide");

    for (let i = 1; i < count; i++) {
      const cards = card.cloneNode(true);
      playingGame.appendChild(cards);
    }
  };

  let changeCardBug = () => {
    const gameCards = document.querySelectorAll(".card");

    let randomCard = Math.floor(Math.random() * count);

    let cardFace = gameCards[randomCard].querySelector(".card__side_face");
    cardFace.classList.toggle("hide");

    let cardBug = gameCards[randomCard].querySelector(".card__side_bug");
    cardBug.classList.toggle("hide");
  };

  let isFlip = (className) => {

    function clickEvent() {
      this.classList.add("flip");
      this.classList.remove("card_hover");

      for (let el of elem) {
        el.removeEventListener("click", clickEvent);
      }
    }

    const elem = document.querySelectorAll(`.${className}`);

    for (let item of elem) {
      item.addEventListener("click", clickEvent);
    }
  };

  changePlayingField();
  changeCardBug();
  isFlip('card');
};

isSearchDifficulty();
document.querySelector("button").addEventListener("click", startGame);


