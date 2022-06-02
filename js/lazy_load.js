const mainImages = document.querySelectorAll(".image > img[data-src]");
const sliders = document.querySelectorAll(".slider_body");

let imageOptions = {};
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newUrl = image.getAttribute("data-src");
    image.src = newUrl;
    image.removeAttribute("data-src");
    observer.unobserve(image);
  });
}, imageOptions);

mainImages.forEach((image) => {
  observer.observe(image);
});

const config = { attributes: true };

const mutation = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (
      mutation.type == "attributes" &&
      mutation.target.classList.contains("open_slider")
    ) {
      let currentSlider = mutation.target;
      let selectorImages = currentSlider.querySelectorAll("img[data-src]");
      selectorImages.forEach((image) => {
        if (image.hasAttribute("data-src")) {
          const newUrl = image.getAttribute("data-src");
          image.src = newUrl;
          image.removeAttribute("data-src");
        }
      });
    }
  });
});

sliders.forEach((slider) => {
  mutation.observe(slider, config);
});
