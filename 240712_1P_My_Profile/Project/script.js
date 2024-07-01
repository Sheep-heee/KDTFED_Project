// toggle
const toggleBtn = document.querySelector(".fa-bars");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".top_menu");
  gnbMobile.classList.toggle("open");
});
