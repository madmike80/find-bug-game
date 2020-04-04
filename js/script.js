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
    playingMenu.classList.toggle("hide");
    playingGame.classList.toggle("hide");
    for (let i = 1; i < count; i++) {
      const card = document.querySelector(".card").cloneNode(true);
      playingGame.appendChild(card);
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


