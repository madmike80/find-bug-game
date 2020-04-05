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
  // let gameFieldHard = "";
  // let classNameCard = "";
  // let classNameCardSide = "";
  const level = document.querySelector(".list-item_checked");
  const playingMenu = document.querySelector(".menu");
  const playingGame = document.querySelector(".game");
  const card = document.querySelector(".card");
  // const cardSide = document.querySelectorAll(".card__side");
  switch (`${level.innerHTML}`) {
    case "Простой" :
      count = 3;
      break;

    case "Средний" :
      count = 6;
      // classNameCard = "card_medium";
      // classNameCardSide = "card__side_medium";
      break;

    case "Сложный" :
      count = 10;
      // gameFieldHard = "hard";
      // classNameCard = "card_hard";
      // classNameCardSide = "card__side_hard";
      break;
  }

  let changePlayingField = () => {
    if (count === 10) {
      playingGame.classList.add("hard")
    //   card.classList.add(`${classNameCard}`);
    //
    //   for (let el of cardSide) {
    //     el.classList.add(`${classNameCardSide}`);
    //   }
    }

    playingMenu.classList.toggle("hide");
    playingGame.classList.toggle("hide");

    for (let i = 1; i < count; i++) {
      const cards = card.cloneNode(true);
      playingGame.appendChild(cards);
    }

  };

  let isFlip = (className) => {
    const elem = document.querySelectorAll(`.${className}`);
    for (let item of elem) {
      item.addEventListener("click", () => {
        item.classList.add("flip");
      })
    }
  };

  changePlayingField();
  isFlip('card');
};

isSearchDifficulty();
document.querySelector("button").addEventListener("click", startGame);


