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
const personalityLeftClose = document.querySelector(
  ".personality_desc.left>.personality_desc_close"
);
const personalityRightClose = document.querySelector(
  ".personality_desc.right>.personality_desc_close"
);

personalityLeftBtn.addEventListener("click", () => {
  personalityLeftResult.classList.add("active");
});
personalityRightBtn.addEventListener("click", () => {
  personalityRightResult.classList.add("active");
});
personalityLeftClose.addEventListener("click", () => {
  personalityLeftResult.classList.remove("active");
});
personalityRightClose.addEventListener("click", () => {
  personalityRightResult.classList.remove("active");
});

// personality slide
const bgImgs = ["slide_1.png", "slide_2.png", "slide_3.png"];
const bgImg = document.querySelector(".personality_slide_img");
bgImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${bgImgs[0]})`;
const slideContents = document.querySelector(".personality_slide_text");
const slideArrows = document.querySelectorAll(".personality_slide_btn");

const topContents = document.querySelector(".personality_slide_text");
const conetentTit = topContents.querySelector(".personality_slide_text > h1");
const conetentDesc = topContents.querySelector(".personality_slide_text > p");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;

    topContents.style.backgroundColor = `#c4e7f6`;
    conetentTit.innerText = firstData.title;
    conetentDesc.innerText = firstData.description;

    let i = 0;
    slideArrows.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        i++;
        if (i > bgImgs.length - 1) {
          i = 0;
          bgImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${bgImgs[i]})`;
        }
        bgImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${bgImgs[i]})`;
        if (i === 1) {
          topContents.style.backgroundColor = `#ffe9c9`;
        } else {
          topContents.style.backgroundColor = `#c4e7f6`;
        }
        const { title, description } = jsonData.data[i];
        conetentTit.innerText = title;
        conetentDesc.innerText = description;
      });
    });
  });

// portfolio slide
const pfImgs = [
  "portfolio_1.png",
  "portfolio_2.png",
  "portfolio_3.png",
  "portfolio_4.png",
];
const pfImg = document.querySelector(".portfolio_contents_work");
pfImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${pfImgs[0]})`;
const pfslideContents = document.querySelector(".portfolio_contents_desc");
const pfslideArrows = document.querySelectorAll(".portfolio_slide_btn");

const pftopContents = document.querySelector(".portfolio_info");
const pfconetentName1 = pftopContents.querySelector(
  ".portfolio_info > ul > li:nth-child(1)"
);
const pfconetentName2 = pftopContents.querySelector(
  ".portfolio_info > ul > li:nth-child(2)"
);
const pfconetentYears = pftopContents.querySelector(
  ".portfolio_info > ul > li:nth-child(3)"
);
const pfconetentDesign = pftopContents.querySelector(
  ".portfolio_info > ul > li:nth-child(4)"
);
const pfconetentCompany = pftopContents.querySelector(
  ".portfolio_info > ul > li:nth-child(5)"
);

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.PFinfo;

    pfconetentName1.innerText = firstData.name1;
    pfconetentName2.innerText = firstData.name2;
    pfconetentYears.innerText = firstData.years;
    pfconetentDesign.innerText = firstData.design;
    pfconetentCompany.innerText = firstData.company;

    let i = 0;
    pfslideArrows.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        i++;
        if (i > pfImgs.length - 1) {
          i = 0;
          pfImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${pfImgs[i]})`;
        }
        pfImg.style.backgroundImage = `url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/1P_My_Profile/${pfImgs[i]})`;

        const { name1, name2, years, design, company } = jsonData.PFinfo[i];
        pfconetentName1.innerText = name1;
        pfconetentName2.innerText = name2;
        pfconetentYears.innerText = years;
        pfconetentDesign.innerText = design;
        pfconetentCompany.innerText = company;
      });
    });
  });
