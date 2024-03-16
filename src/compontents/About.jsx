import React, { useEffect, useState } from "react";
import "../assets/css/Home.scss";
import Video_popup from "./video-popup";
import Belowbody from "./Below";


import line1 from "../assets/image/home/line1.png";
import line2 from "../assets/image/home/line2.png";
import line3 from "../assets/image/home/line3.png";
import line4 from "../assets/image/home/line4.png";
import line5 from "../assets/image/home/line5.png";
import face1 from "../assets/image/home/face1.jpg";
import face2 from "../assets/image/home/face2.jpg";
import face3 from "../assets/image/home/face3.jpg";
import face4 from "../assets/image/home/face4.jpg";
import face5 from "../assets/image/home/face5.jpg";
import face6 from "../assets/image/home/face6.jpg";
import arrow from "../assets/image/home/arrow.png";
function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [colors, setColors] = useState([
    "rgba(145, 115, 209, 0.4)",
    "rgba(145, 115, 209, 0.4)",
    "rgba(145, 115, 209, 0.4)",
    "rgba(145, 115, 209, 0.4)",
    "rgba(145, 115, 209, 0.4)",
    "#9173D1",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const slides = [
    { src: face1, alt: "Image 1" },
    { src: face2, alt: "Image 2" },
    { src: face3, alt: "Image 3" },
    { src: face4, alt: "Image 4" },
    { src: face5, alt: "Image 5" },
    { src: face6, alt: "Image 6" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) => {
        // Move the last color to the beginning
        const newColors = [...prevColors];
        const lastColor = newColors.pop();
        newColors.unshift(lastColor);
        return newColors;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main">
      <div className="about">
        <div className="container">
          <div className="main-about">
            <div className="about-us">
              <h2 className="head">Story</h2>
              <p>
                ImagAIne is revolutionizing image processing with its
                decentralized infrastructure network (DePINs) chain. Utilizing
                cryptographic structures, we enable subnets to contribute GPU
                power for image processing tasks like encryption, decryption,
                and deepfake verification. Unlike conventional methods, each
                digital image is directly linked in the chain itself, ensuring
                security and scalability. With breakthru solutions addressing
                IPFS constraints, ImagAIne offers integration for
                multi-purposes, ranging from medical imaging to everyday use.
                <br />
                <br />
                ImagAIne - where innovation meets limitless possibilities.
              </p>
            </div>
            <img className="line1" src={line1} alt="" />
          </div>
        </div>
      </div>

      <div>
        <section className="section">
          <div className="container">
            <div className="slider-container">
              <div className="slider">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                ))}
              </div>
              <div className="change-img">
                <div className="main-div">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`div${index === 0 ? "" : "1"}`}
                      style={{ backgroundColor: color }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="stroke-container1">
                  <h1 class="normal">imagAIne</h1>
                  <h1 class="jtp">imagAIne</h1>
                </div>
          <img className="arrow" src={arrow} alt="" />
          <img className="line4" src={line2} alt="" />
        </section>
      </div>

      <div className="vision">
        <div className="container">
          <div className="main-about">
            <div className="vision-us about-us">
              <h2 className="head">Vision AI</h2>
              <p>
                A future where image processing integrates into decentralized
                networks, promising an unmatched security and scalability. We
                harness blockchain and GPU power to not only imagine but
                revolutionize them wide-range of landscaped industries with the
                indomitable prowess of ImagAIne.
                <br />
                <br />
                ImagAIne will set new standards to the multiverse of AI-driven
                image processing madness.
              </p>
            </div>
          </div>
          <img className="line2" src={line3} alt="" />
        </div>
      </div>

      <div className="video">
        <div className="container d-center">
          <div className=" ps-80">
            <div className="video-popup">
              <Video_popup />
            </div>
          </div>
        </div>
        <div className="stroke-container">
                  <h1 class="normal">GPU-AI</h1>
                  <h1 class="jtp">GPU-AI</h1>
                </div>
        <img className="arrow2" src={arrow} alt="" />
        <img className="line3" src={line4} alt="" />
      </div>

      <div className="about">
        <div className="container">
          <div className="main-about">
            <div className="about-us">
              <h2 className="head">Mission AI </h2>
              <p>
                Embarking on a noble quest to democratize image processing
                accessibility to all Web3 users, our mission is to actually
                missioning - solutions and pushing the boundaries of modern
                world tech sources to our chimera of fantasies. By emancipating
                users to securely process images on the chain, ImagAIne aspires
                to redefine the panorama of AI-driven image processing,
                establishing unparalleled standards of novelty.
              </p>
            </div>
            <img className="line1" src={line1} alt="" />
          </div>
        </div>
      </div>
      <Belowbody/>
   
    </div>
   
  );
}

export default About;
