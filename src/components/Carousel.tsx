import { useState } from "react";
import { ImageType } from "../types";
import LeftArrowIcon from "../assets/images/icon-previous.svg";
import RightArrowIcon from "../assets/images/icon-next.svg";

const Carousel = (props: { slides: ImageType[] }) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  function goToNextSlide() {
    if (slideIndex === props.slides.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex((prevState) => prevState + 1);
    }
  }

  function goToPreviousSlide() {
    if (slideIndex === 0) {
      setSlideIndex(props.slides.length - 1);
    } else {
      setSlideIndex((prevState) => prevState - 1);
    }
  }

  function goToSpecificSlide(index: number) {
    setSlideIndex(index);
  }

  return (
    <div className="w-full md:flex md:flex-col md:space-y-6">
      <div className="relative overflow-hidden h-86 md:rounded-xl md:aspect-square md:h-auto">
        {/** Slides */}
        <div className="transition-transform duration-500">
          {props.slides.map((slide, index) => (
            <div
              key={index}
              className={`shrink-0 w-full absolute transition-opacity duration-300 ${
                slideIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        {/** Arrows */}
        <div className="absolute w-full h-full top-[50%] md:hidden">
          {/** Left Arrow */}
          <div
            onClick={() => goToPreviousSlide()}
            className="left-6 absolute bg-white rounded-full w-10 h-10 flex items-center justify-center -translate-y-[50%] cursor-pointer"
          >
            <img src={LeftArrowIcon} />
          </div>
          {/** Right Arrow */}
          <div
            onClick={() => goToNextSlide()}
            className="right-6 absolute bg-white rounded-full  w-10 h-10 flex items-center justify-center -translate-y-[50%] cursor-pointer"
          >
            <img src={RightArrowIcon} />
          </div>
        </div>
      </div>
      {/** Thumnails */}
      <div className="hidden md:flex flex-row space-x-6">
        {props.slides.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => goToSpecificSlide(index)}
            className={`rounded-lg overflow-hidden aspect-square cursor-pointer border-2 bg-white transition-all duration-300 ${
              index === slideIndex
                ? "border-primary-orange"
                : "border-transparent"
            }`}
          >
            <img
              className={`transition-all duration-300 ${
                index === slideIndex ? "opacity-50" : "opacity-100"
              }`}
              src={thumbnail.src}
              alt={thumbnail.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
