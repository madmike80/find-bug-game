let isFlip = (className) => {
  const elem = document.querySelector(`.${className}`);
  elem.addEventListener('click', () => {
    elem.classList.toggle('flip');
  })
}

isFlip('card');