import React from "react";
import "animate.css";
// import "./EnrollSection.css";

const EnrollSection = () => {
  return (
    <section
      className="enroll_section"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9">
            <div className="text-center text-white animate__animated animate__fadeInUp animate__delay-1s">
              
              <div className="heading_s1 heading_light">
                <span className="sub_heading">Join Our New Batch</span>
                <h2 className="font_style1">Enroll Your Child in a Class?</h2>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <a className="btn btn-outline-light btn-radius" href="/contact">
                Contact Us
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollSection;
