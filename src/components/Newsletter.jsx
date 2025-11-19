import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Email is required");
      return;
    } else if (!pattern.test(email)) {
      setError("Invalid email address");
      return;
    }

    setError("");
    alert("Subscribed Successfully!");
    setEmail("");
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-md-12">
            <div
              className="newsletter-card"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="row align-items-center">

                {/* Left Content */}
                <div className="col-lg-6" data-aos="fade-right">
                  <h2 className="title">
                    Subscribe Our <span>Newsletter</span>
                  </h2>
                  <p className="subtitle">
                    Stay updated with the latest courses, offers, and news.
                    Premium content delivered right to your inbox!
                  </p>
                </div>

                {/* Form Section */}
                <div className="col-lg-6" data-aos="fade-left">
                  <form className="newsletter-form" onSubmit={handleSubmit}>
                    <div className="input-group-premium">
                      <span className="mail-icon">
                        <FiMail size={22} />
                      </span>

                      <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <button className="subscribe-btn">
                        Subscribe
                      </button>
                    </div>

                    {error && <p className="error-text">{error}</p>}
                  </form>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;
