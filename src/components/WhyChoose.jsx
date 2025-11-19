import React from "react";
import "animate.css";

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="container">

        {/* Heading */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center">
            <h2 className="section-title animate__animated animate__fadeInUp">
              Why Choose Sriram Institute
            </h2>
            <p className="section-subtitle animate__animated animate__fadeInUp animate__delay-1s">
              Learn with expert mentors, industry-ready programs and skill-based training.
            </p>
          </div>
        </div>


        {/* Cards */}
        <div className="row">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card animate__animated animate__fadeInUp">
              <div className="icon-wrap bg-red">
                <i className="bi bi-journal-bookmark-fill"></i>
              </div>
              <h5>Profile</h5>
              <p>
                SIPVS is managed by Sriram Educational and Welfare Trust under the Indian Trust Act 1882.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card animate__animated animate__fadeInUp animate__delay-1s">
              <div className="icon-wrap bg-blue">
                <i className="bi bi-globe2"></i>
              </div>
              <h5>Vision</h5>
              <p>
                Building globally competent manpower through modern professional education.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6">
            <div className="info-card animate__animated animate__fadeInUp animate__delay-2s">
              <div className="icon-wrap bg-green">
                <i className="bi bi-person-video3"></i>
              </div>
              <h5>Expert Instructors</h5>
              <p>
                Learn from qualified and highly experienced industry professionals.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
