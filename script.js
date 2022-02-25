const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const imgTags = document.querySelectorAll(".gallery-img");
let currentlySelected = 0;

prevButton.addEventListener("click", function () {
  imgTags[currentlySelected].classList.remove("active");
  currentlySelected--;
  imgTags[currentlySelected].classList.add("active");
  nextButton.disabled = false;
  if (currentlySelected === 0) {
    prevButton.disabled = true;
  }
});

nextButton.addEventListener("click", function () {
  imgTags[currentlySelected].classList.remove("active");
  currentlySelected++;
  imgTags[currentlySelected].classList.add("active");
  prevButton.disabled = false;

  if (imgTags.length === currentlySelected + 1) {
    nextButton.disabled = true;
  }
});
