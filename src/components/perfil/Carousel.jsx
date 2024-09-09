import React, { useState, useEffect } from "react";

import "../../styles/perfil/carousel.css";


const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const moveSlide = (direction) => {
    setCurrentSlide((prevSlide) => {
      let newSlide = prevSlide + direction;
      if (newSlide < 0) newSlide = images.length - 1;
      if (newSlide >= images.length) newSlide = 0;
      return newSlide;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          onClick={() => moveSlide(-1)}
          className="carousel-button carousel-button-prev"
        >
          ❮
        </button>
        <button
          onClick={() => moveSlide(1)}
          className="carousel-button carousel-button-next"
        >
          ❯
        </button>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`carousel-indicator ${
                currentSlide === index ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
