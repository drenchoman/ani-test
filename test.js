const squareContainer = document.querySelector(".squareContainer");
const menu = document.querySelector(".menu");
const about = document.querySelector(".about");
const contact = document.querySelector(".about");
const contents = document.querySelector(".contents")

squareContainer.addEventListener("click", e => {
  squareContainer.classList.toggle("grey");
  contents.classList.toggle("squareAnimation")
})
