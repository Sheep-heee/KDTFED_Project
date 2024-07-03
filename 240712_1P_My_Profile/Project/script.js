// scroll header fixed
window.addEventListener("scroll", () => {
  const navTitle = document.querySelector(".nav_title");
  const logo = document.querySelector(".nav_logo");

  if (window.scrollY > 80) {
    navTitle.classList.add("active");
    logo.classList.add("active");
  } else {
    navTitle.classList.remove("active");
    logo.classList.remove("active");
  }
});

// toggle
const toggleBtn = document.querySelector(".fa-bars");
toggleBtn.addEventListener("click", function () {
  const gnb = document.querySelector(".top_menu");
  gnb.classList.toggle("open");
});

// personality desc trigger
const personalityLeftBtn = document.querySelector(
  ".personality_icon_emoji:first-child"
);
const personalityRightBtn = document.querySelector(
  ".personality_icon_emoji:nth-child(2)"
);
const personalityLeftResult = document.querySelector(".personality_desc.left");
const personalityRightResult = document.querySelector(
  ".personality_desc.right"
);
const personalityLeftClose = document.querySelector("");
const personalityRightClose = document.querySelector("");

personalityLeftBtn.addEventListener("click", () => {
  console.log(click);
  personalityLeftResult.classList.add("active");
});

personalityRightBtn.addEventListener("click", () => {
  console.log(click);
  personalityRightResult.classList.add("active");
});

personalityLeftClose.addEventListener("click", () => {
  personalityLeftResult.remove("active");
});
personalityRightClose.addEventListener("click", () => {
  personalityRightResult.remove("active");
});
