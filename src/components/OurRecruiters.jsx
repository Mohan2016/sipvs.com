import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./OurRecruiters.css"; // IMPORTANT – custom effects

const logos = [
  "../images/icon01.jpg",
   "../images/icon02.jpg",
    "../images/icon03.jpg",
     "../images/icon04.jpg",
      "../images/icon05.jpg",
       "../images/icon01.jpg",
        "../images/icon02.jpg",
         "../images/icon03.jpg",
          "../images/icon04.jpg"

];

const OurRecruiters = () => {
  useEffect(() => {
    AOS.init({ duration: 1300, once: true });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1199, settings: { slidesToShow: 6 } },
      { breakpoint: 1000, settings: { slidesToShow: 5 } },
      { breakpoint: 600, settings: { slidesToShow: 4 } },
      { breakpoint: 380, settings: { slidesToShow: 3 } },
      { breakpoint: 0, settings: { slidesToShow: 2 } }
    ]
  };

  return (
    <section className="recruiter-section py-5">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-xl-6 col-lg-8 text-center">
            <h2 data-aos="flip-up">Our Recruiters</h2>
            <div className="small_divider"></div>
          </div>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="200">
          <div className="col-md-12">
            <Slider {...settings}>
              {logos.map((logo, i) => (
                <div key={i} className="logo-box">
                  <img src={logo} alt="logo" className="recruiter-logo" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurRecruiters;
