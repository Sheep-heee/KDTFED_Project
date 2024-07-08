// gender_btn
const femaleBtn = document.getElementById("femalebtn");
const maleBtn = document.getElementById("malebtn");

femaleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  femaleBtn.classList.toggle("filledA");
  maleBtn.classList.remove("filledB");
});

maleBtn.addEventListener("click", (event) => {
  event.preventDefault();
  maleBtn.classList.toggle("filledB");
  femaleBtn.classList.remove("filledA");
});

// modal
const btn = document.querySelector(".signin_btn");
const overlay = document.querySelector("#overlay");
const modalBox = document.querySelector("#signin");

btn.addEventListener("click", () => {
  modalBox.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  modalBox.classList.remove("active");
  overlay.classList.remove("active");
});
