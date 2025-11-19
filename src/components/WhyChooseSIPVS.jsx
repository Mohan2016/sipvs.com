import React from "react";
import "animate.css";
import { FaBook, FaGraduationCap, FaGlobe, FaUser, FaHeadphones, FaChild } from "react-icons/fa";
// import "./WhyChoose.css"; // make this file separately

const WhyChoose = () => {
  const features = [
    {
      icon: <FaBook />,
      title: "Books & Library",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#dc3545",
    },
    {
      icon: <FaGraduationCap />,
      title: "Scholarship",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#0d6efd",
    },
    {
      icon: <FaGlobe />,
      title: "Learn Courses Online",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#fd7e14",
    },
    {
      icon: <FaUser />,
      title: "Expert Instructors",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#20c997",
    },
    {
      icon: <FaHeadphones />,
      title: "Music Programs",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#374785",
    },
    {
      icon: <FaChild />,
      title: "Kids Education",
      desc: "If you are going to use a passage of Lorem Ipsum, be sure there is nothing embarrassing hidden.",
      bg: "#d63384",
    },
  ];

  return (
    <>
      <section className="why-choose-section py-5">
        <div className="container">

          <div className="row justify-content-center mb-4">
            <div className="col-lg-8 text-center">
              <h2 className="animate__animated animate__fadeInUp">Why Choose SIPVS</h2>
              <p className="animate__animated animate__fadeInUp animate__delay-1s">
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden.
              </p>
            </div>
          </div>

          <div className="row">
            {features.map((box, i) => (
              <div className="col-lg-4 col-md-6 mb-4" key={i}>
                <div
                  className="why-box text-center animate__animated animate__fadeInUp"
                  style={{ animationDelay: `${0.1 * i}s`, backgroundColor: box.bg }}
                >
                  <div className="icon-box">{box.icon}</div>
                  <h5>{box.title}</h5>
                  <p>{box.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChoose;
