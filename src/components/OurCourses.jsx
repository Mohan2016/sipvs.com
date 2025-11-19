import React from "react";
import "animate.css";
import { FaClock, FaCalendarAlt, FaBook } from "react-icons/fa";
// import "./OurCourses.css";

const OurCourses = () => {
  const courses = [
    {
      title: "Diploma Course",
      duration: "1 Year",
      time: "8:00 - 10:00",
      image: "/images/01.png",
    //   icon: <FaBook />,
    },
    {
      title: "Certificate Course",
      duration: "6 Months",
      time: "8:00 - 10:00",
      image: "/images/02.png",
    //   icon: <FaBook />,
    },
    {
      title: "Short Term Course",
      duration: "6 Months",
      time: "8:00 - 10:00",
      image: "/images/03.png",
    //   icon: <FaBook />,
    },
    {
      title: "Stenography Course",
      duration: "6 Months",
      time: "8:00 - 10:00",
      image: "/images/04.png",
    //   icon: <FaBook />,
    },
    {
      title: "Teacher Training Course",
      duration: "6 Months",
      time: "8:00 - 10:00",
      image: "/images/05.png",
    //   icon: <FaBook />,
    },
    {
      title: "Art & Craft Course",
      duration: "6 Months",
      time: "8:00 - 10:00",
      image: "/images/06.png",
    //   icon: <FaBook />,
    },
  ];

  return (
    <section className="bg_linen py-5">
      <div className="container">

        <div className="row justify-content-center mb-4">
          <div className="col-xl-6 col-lg-8 text-center">
            <h2 className="animate__animated animate__fadeInUp">Our Courses</h2>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              If you are going to use a passage of Lorem Ipsum, be sure there isn’t anything embarrassing hidden.
            </p>
          </div>
        </div>

        <div className="row">
          {courses.map((course, index) => (
            <div className="col-lg-4 col-sm-6 mb-4" key={index}>
              <div
                className="content_box animate__animated animate__fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="content_img">
                  <img src={course.image} alt={course.title} />
                </div>

                <div className="content_desc">
                  {/* <div className="icon_box">{course.icon}</div> */}

                  <h4 className="content_title">{course.title}</h4>

                  <p>
                    If you are going to use a passage of Lorem Ipsum, be sure nothing embarrassing is hidden.
                  </p>

                  <ul className="program_info">
                    <li>
                      <FaCalendarAlt className="info_icon" /> Duration:
                      <span> {course.duration}</span>
                    </li>
                    <li>
                      <FaClock className="info_icon" /> Time:
                      <span> {course.time}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12 text-center mt-3">
            <a className="btn btn-primary animate__animated animate__fadeInUp animate__delay-1s">
              View All Courses →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurCourses;
