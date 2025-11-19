import React from "react";
import Slider from "react-slick";
// import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    img: "../images/himani.jpg",
    name: "Himani",
    course: "Primary Teacher Training",
    text: "Sriram Institute is best for Primary Teacher Training Course in Rohini. Way of Teacher is very impressive",
  },
  {
    id: 2,
    img: "../images/vipul.jpg",
    name: "Vipul",
    course: "Typing",
    text: "BEST institute for typing classes in Rohini. Really good atmosphere here.",
  },
  {
    id: 3,
    img: "../images/puja.jpg",
    name: "Pooja",
    course: "Fashion Designing",
    text: "Sriram Institute is best for Fashion Designing course in Rohini. Very healthy atmosphere.",
  },
];

export default function TestimonialSection() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="testimonial_section py-5">
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8 text-center fadeInUp">
            <h2>Student Say!</h2>
            <p>If you are going to use a passage of Lorem Ipsum, be sure there isn't anything embarrassing.</p>
            <div className="divider"></div>
          </div>
        </div>

        {/* Slider */}
        <div className="row justify-content-center fadeInUp delay-2">
          <div className="col-12">
            <Slider {...settings}>

              {testimonials.map((item) => (
                <div key={item.id}>
                  <div className="testimonial_box">
                    <div className="testimonial_img">
                      <img src={item.img} alt={item.name} />
                    </div>

                    <div className="testi_meta">
                      <h6>{item.name}</h6>
                      <span className="text_default">{item.course}</span>

                      <p className="testi_desc">"{item.text}"</p>
                    </div>

                  </div>
                </div>
              ))}

            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
}
