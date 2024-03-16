import React, { useState, useEffect } from 'react';
import "../assets/css/Home.scss";

import face1 from "../assets/image/home/face1.png";
import face2 from "../assets/image/home/face2.png";
import face3 from "../assets/image/home/face3.png";

const Swiper_slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { src: face1, alt: 'Image 1' },
    { src: face2, alt: 'Image 2' },
    { src: face3, alt: 'Image 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const shuffleDivsOneByOne = () => {
    const divElements = document.querySelectorAll('.main-div div');
    const lastDivColor = window.getComputedStyle(divElements[divElements.length - 1]).backgroundColor;

    for (let i = divElements.length - 1; i > 0; i--) {
      divElements[i].style.backgroundColor = window.getComputedStyle(divElements[i - 1]).backgroundColor;
    }

    divElements[0].style.backgroundColor = lastDivColor;
  };

  useEffect(() => {
    const interval = setInterval(shuffleDivsOneByOne, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section">
      <div className="slider-container">
        <div className="slider">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="change-img">
        <div className="main-div">
          <div className="div"></div>
          <div className="div1"></div>
          <div className="div1"></div>
          <div className="div1"></div>
        </div>
      </div>
    </section>
  );
};

export default Swiper_slider;
