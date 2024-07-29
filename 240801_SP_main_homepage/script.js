// name rolling
const rollingCB = () => {
  const prevItem = document.querySelector(".name ul li.prev");
  prevItem.classList.remove("prev");

  const currentItem = document.querySelector(".name ul li.current");
  currentItem.classList.remove("current");
  currentItem.classList.add("prev");

  const nextItem = document.querySelector(".name ul li.next");

  if (nextItem.nextElementSibling == null) {
    const firstItem = document.querySelector(".name ul li:first-child");
    firstItem.classList.add("next");
  } else {
    nextItem.nextElementSibling.classList.add("next");
  }

  nextItem.classList.remove("next");
  nextItem.classList.add("current");
};

let interval = setInterval(rollingCB, 3000);

// comment rolling
const rollingCB_CM = () => {
  const prevItem_CM = document.querySelector(".comment ul li.prev");
  prevItem_CM.classList.remove("prev");

  const currentItem_CM = document.querySelector(".comment ul li.current");
  currentItem_CM.classList.remove("current");
  currentItem_CM.classList.add("prev");

  const nextItem_CM = document.querySelector(".comment ul li.next");

  if (nextItem_CM.nextElementSibling == null) {
    const firstItem_CM = document.querySelector(".comment ul li:first-child");
    firstItem_CM.classList.add("next");
  } else {
    nextItem_CM.nextElementSibling.classList.add("next");
  }

  nextItem_CM.classList.remove("next");
  nextItem_CM.classList.add("current");
};

let interval_CM = setInterval(rollingCB_CM, 3000);

// mainslide
const slideArrows = document.querySelectorAll(".mainslide_arrow div");
const slidePagers = document.querySelectorAll(".mainslide_pager span");
const slideImg = document.querySelector(".mainslide_img");
const slideImgBack = document.querySelectorAll(".mainbanner_back img");

const pics = [
  "banner1.png",
  "banner2.png",
  "banner3.png",
  "banner4.jfif",
  "banner5.png",
];
let i = 0;

slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
slidePagers[0].classList.add("active");

const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

const updateBack = (i) => {
  slideImgBack.forEach((item) => {
    item.classList.remove("active");
  });
  slideImgBack[i].classList.add("active");
};

slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }
    updateSlide(i);
    updateBack(i);
  });
});

slidePagers.forEach((pager, index) => {
  pager.addEventListener("click", () => {
    i = index;
    updateSlide(i);
    updateBack(i);
  });
});

$(".contest_slide").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
});
