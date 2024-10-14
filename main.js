// завдання 1
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const slider = document.querySelector(".slider__input");
const image = document.querySelector(".slider__image");

const changeImageSize = (event) => {
  const size = event.target.value;
  image.style.width = `${size}%`;
};

const debouncedChangeImageSize = debounce(changeImageSize, 100);

slider.addEventListener("input", debouncedChangeImageSize);

// завдання 2
const box = document.getElementById("box");

const moveBox = (event) => {
  const x = event.clientX;
  const y = event.clientY;
  box.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
};

const debouncedMoveBox = _.debounce(moveBox, 100);

document.addEventListener("mousemove", debouncedMoveBox);
