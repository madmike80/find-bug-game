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
  const level = document.querySelector(".list-item_checked");
  const playingMenu = document.querySelector(".menu");
  const playingGame = document.querySelector(".game");
  const card = document.querySelector(".card").cloneNode(true);
  switch (`${level.innerHTML}`) {
    case "Простой" :
      playingMenu.classList.toggle("hide");
      playingGame.appendChild(card);
      playingGame.classList.toggle("hide");
      break;

    case "Средний" :
      console.log(2);
      break;

    case "Сложный" :
      console.log(3);
      break;
  }

  let isFlip = (className) => {
    const elem = document.querySelectorAll(`.${className}`);
    console.log(elem);
    for (let item of elem) {
      item.addEventListener("click", () => {
        item.classList.add("flip");
      })
    }
  };

  isFlip('card');
};






isSearchDifficulty();
document.querySelector("button").addEventListener("click", startGame);


