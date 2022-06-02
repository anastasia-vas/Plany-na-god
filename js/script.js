let burgerNav = document.querySelector(".burger_nav");
let links = document.querySelectorAll(".burger_nav_link");
//
let slider = document.querySelectorAll(".slider_body");
let closeSlide = document.querySelectorAll(".close_slider");
let product = document.querySelectorAll(".product_item .image");
//
let closeInfo = document.querySelectorAll(".close_info");
let activeInfo = null;

function openMobNav() {
  burgerNav.style.display = "flex";
  document.body.classList.add("hidden");
}

function closeMobNav() {
  burgerNav.style.display = "none";
  document.body.classList.remove("hidden");
}


function openSlider(el) {
  let productItem = el.parentNode;
  let productSlider = productItem.nextElementSibling;
  productSlider.classList.add("open_slider");
  document.body.classList.add("hidden");
}

function closeSlider() {
  slider.forEach((el) => {
    el.classList.remove("open_slider");
  });
  document.body.classList.remove("hidden");
}

links.forEach((link) => link.addEventListener("click", closeMobNav));
product.forEach((prod) =>
  prod.addEventListener("click", () => openSlider(prod))
);
closeSlide.forEach((crossButton) =>
  crossButton.addEventListener("click", () => closeSlider())
);

function showMyPlansForTheYearInfo() {
  let myPlansForTheYearInfo = document.querySelector(".myPlansForTheYear_info");
  activeInfo = myPlansForTheYearInfo;
  myPlansForTheYearInfo.style.display = "flex";
  document.body.classList.add("hidden");
}

function showMyBusinessInfo() {
  let myBusinessInfo = document.querySelector(".myBusiness_info");
  activeInfo = myBusinessInfo;
  myBusinessInfo.style.display = "flex";
  document.body.classList.add("hidden");
}

function showMyPlannerInfo() {
  let myPlannerInfo = document.querySelector(".myPlanner_info");
  activeInfo = myPlannerInfo;
  myPlannerInfo.style.display = "flex";
  document.body.classList.add("hidden");
}

function showMyPlannerForTheYearInfo() {
  let myPlannerForTheYearInfo = document.querySelector(
    ".myPlannerForTheYear_info"
  );
  activeInfo = myPlannerForTheYearInfo;
  myPlannerForTheYearInfo.style.display = "flex";
  document.body.classList.add("hidden");
}

function showStickerInfo() {
  let stickersInfo = document.querySelector(".sticker_info");
  activeInfo = stickersInfo;
  stickersInfo.style.display = "flex";
  document.body.classList.add("hidden");
}

function closeAllInfo() {
  activeInfo.style.display = "none";
  document.body.classList.remove("hidden");
}

closeInfo.forEach((el) => el.addEventListener("click", () => closeAllInfo()));
