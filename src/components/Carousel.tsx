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

  return (
    <div>
      {/** Slides container */}
      <div className="w-full relative  overflow-hidden h-86">
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
        <div className="absolute w-full h-full top-[50%]">
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
    </div>
  );
};

export default Carousel;
