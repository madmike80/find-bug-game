let menu = document.querySelectorAll(".list-item");

for (let item of menu) {
  item.addEventListener("click", () => {
    for (let a of menu) {
      a.classList.remove("list-item_checked");
    }
    item.classList.add("list-item_checked");
  });
}


let isFlip = (className) => {
  const elem = document.querySelector(`.${className}`);
  elem.addEventListener("click", () => {
    elem.classList.toggle("flip");
  })
};


isFlip('card');