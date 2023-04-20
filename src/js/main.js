import Slider from "./modules/Slider.js"

const worksCarousel = new Slider(
  ".tracing__carousel__line",
  ".tracing__carousel__line div",
  ".tracing__carousel button",
  24,
  "tracingCarouselLeft",
  1
);
worksCarousel.sliderInit();

const advertisingCarousel = new Slider(
  ".advertising__carousel__line",
  ".advertising__carousel__line__element",
  ".advertising__carousel__controll",
  0,
  "advertisingCarouselLeft",
  1
);
advertisingCarousel.sliderInit();

const serviceCarousel = new Slider(
  ".services__carousel__line",
  ".services__carousel__line div",
  ".services__carousel__controll__button",
  24,
  "servicesCarouselLeft",
  1
);
serviceCarousel.sliderInit();

document
  .querySelectorAll(".services__carousel__controll__button")
  .forEach((button) => {
    button.addEventListener("click", (e) => {
      document
        .querySelectorAll(".services__carousel__controll__button")
        .forEach((button) => {
          button.classList.remove("active");
        });
      e.target.classList.add("active");
    });
  });
