import React, { useEffect, useState } from "react";
import "animate.css";
import "../css/home.css";

const slides = [
  { img: "/images/01.png", title: "Welcome to Our Website" },
  { img: "/images/02.png", title: "Creative Web Solutions" },
  { img: "/images/03.png", title: "We Build Digital Dreams" },
  { img: "/images/04.png", title: "We Build Digital Dreams" },
  { img: "/images/05.png", title: "We Build Digital Dreams" },
  { img: "/images/06.png", title: "We Build Digital Dreams" }
  
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  // AUTO PLAY
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sliderWrapper">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {i === index && (
            <h1 className="animate__animated animate__fadeInDown sliderHeading">
              {slide.title}
            </h1>
          )}
        </div>
      ))}
    </div>
  );
}
