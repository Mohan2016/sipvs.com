import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {
  const images = [
    { src: "../images/01.png" },
    { src: "../images/02.png" },
    { src: "../images/03.png" },
    { src: "../images/04.png" },
    { src: "../images/05.png" },
    { src: "../images/06.png" }
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <>
    <section className="gallery-section bg-linen bg-gray py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="font_style10">Our Gallery</h2>
          <p>
            If you are going to use a passage of Lorem Ipsum, you need to be sure
            there isn’t anything embarrassing hidden in the middle of text.
          </p>
          <div className="small_divider"></div>
        </div>
        <div className="row">
            <div className="col-12 text-center mb-4" data-aos="fade-up">

            
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt="Gallery"
            className="gallery-img"
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>
      </div>
        </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images}
        />
      )}
      </div>
    </section>
    </>
  );
};

export default Gallery;
