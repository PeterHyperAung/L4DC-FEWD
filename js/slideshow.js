let currentSlide = 1;

const slideEl = document.getElementById("slideshow-slide");
const indicatorsList = document.querySelectorAll(".slideshow-indicator");
indicatorsList[0].classList.add("slideshow--indicator-active");

document
  .getElementById("slideshow-prev")
  .addEventListener("click", function () {
    const prevSlide = currentSlide;
    currentSlide = currentSlide > 1 ? currentSlide - 1 : 3;
    slideEl.classList.remove("slideshow--slide-" + prevSlide);
    slideEl.classList.add("slideshow--slide-" + currentSlide);
    indicatorsList.forEach((indicator) => {
      indicator.classList.remove("slideshow--indicator-active");
    });
    document
      .getElementById("indicator-" + currentSlide)
      .classList.add("slideshow--indicator-active");
  });

document
  .getElementById("slideshow-next")
  .addEventListener("click", function () {
    const prevSlide = currentSlide;
    currentSlide = currentSlide < 3 ? currentSlide + 1 : 1;
    slideEl.classList.remove("slideshow--slide-" + prevSlide);
    slideEl.classList.add("slideshow--slide-" + currentSlide);
    indicatorsList.forEach((indicator) => {
      indicator.classList.remove("slideshow--indicator-active");
    });
    document
      .getElementById("indicator-" + currentSlide)
      .classList.add("slideshow--indicator-active");
  });

indicatorsList.forEach((indicator) => {
  indicator.addEventListener("click", function () {
    const prevSlide = currentSlide;
    currentSlide = parseInt(indicator.id.split("-")[1]);
    slideEl.classList.remove("slideshow--slide-" + prevSlide);
    slideEl.classList.add("slideshow--slide-" + currentSlide);
    indicatorsList.forEach((indicator) => {
      indicator.classList.remove("slideshow--indicator-active");
    });
    indicator.classList.add("slideshow--indicator-active");
  });
});
