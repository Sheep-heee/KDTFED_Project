// card mouseover animation

const items = document.querySelectorAll(".drama_card li");

items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.transform = "translateX(-20px)";
    item.style.transition = "all 0.3s";
  });
  item.addEventListener("mouseout", () => {
    item.style.transform = "translateX(0)";
  });
});

// menu mouseover event
const gnbLi = document.querySelectorAll(".top_menu > li");
gnbLi.forEach((li) => {
  li.addEventListener("mouseover", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = lnb.scrollHeight + "px";
      lnb.style.opacity = "1";
      aTag.classList.add("active");
    }
  });
  li.addEventListener("mouseout", () => {
    const lnb = li.querySelector(".lnb");
    const aTag = li.querySelector("a");
    if (lnb) {
      lnb.style.maxHeight = "0";
      lnb.style.opacity = "0";
      aTag.classList.remove("active");
    }
  });
});

// background image change
const bgImgs = ["bg_1.png", "bg_2.png", "bg_3.png", "bg_4.png", "bg_5.png"];
const bgImg = document.querySelector("#bg_img");
bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/SP_movie/${bgImgs[0]})`;

const topContents = document.querySelector("#left_contents");
const conetentTit = topContents.querySelector(".left_contents_title");
const conetentDesc = topContents.querySelector(".left_contents_desc");

fetch("./data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    const [firstData, ...otherData] = jsonData.data;

    conetentTit.innerText = firstData.title;
    conetentDesc.innerText = firstData.description;

    items.forEach((item, index) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const { title, description } = jsonData.data[index];
        console.log(title, description);
        bgImg.style.backgroundImage = `radial-gradient(circle, transparent, rgba(0, 0, 0, 0.7)), url(//ecimg.cafe24img.com/pg1108b23660447004/sheephi0609/SP_movie/${bgImgs[index]})`;
        conetentTit.innerText = title;
        conetentDesc.innerText = description;
      });
    });
  });