import React from "react";
import { motion } from "framer-motion";
// import "./Footer.css"; // <-- import the stylesheet

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="footer-premium pt-5" aria-label="Site footer">
      {/* Moving gradient light beams (pure CSS elements) */}
      <div className="light-beams" aria-hidden="true">
        <div className="beam beam-1" />
        <div className="beam beam-2" />
        <div className="beam beam-3" />
      </div>

      {/* overlay to slightly darken beams for readability */}
      {/* <div className="overlay" /> */}

      <div className="footer-container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ duration: 0.7 }}
          className="top-footer"
        >
          <div className="grid columns-3">
            {/* Column 1 */}
            <div className="col">
              <h6 className="widget-title">Get in Touch</h6>
              <p className="muted">Sriram Institute Of Professional And Vocational Studies (SIPVS)</p>

              <ul className="contact-list">
                <li>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <address>A-309, Upper Ground Vijay Vihar Ph-1, Rohini Sector-4 New Delhi-110085</address>
                </li>
                <li>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <a href="mailto:sipvsindia@gmail.com">sipvsindia@gmail.com</a>
                </li>
                <li>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <a href="tel:+919818912399">+(91)-9818912399</a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col">
              <h6 className="widget-title">Useful Links</h6>
              <ul className="links-list">
                <li><a href="/about">About Us</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="https://sipvs.com/blog/" target="_blank" rel="noreferrer">Blogs</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col">
              <h6 className="widget-title">Quick Links</h6>
              <div className="two-cols">
                <ul className="links-list">
                  <li><a href="#">Certificate Course</a></li>
                  <li><a href="#">Fine Arts Courses</a></li>
                  <li><a href="#">Fashion Designing</a></li>
                  <li><a href="#">Interior Designing</a></li>
                </ul>
                <ul className="links-list">
                  <li><a href="#">Diploma in Computer Systems</a></li>
                  <li><a href="#">Stenography</a></li>
                  <li><a href="#">Office Finance Accounting</a></li>
                  <li><a href="#">Desktop Publishing</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* icons row */}
          <div className="icons-row" aria-hidden="true">
            <img src="/images/icon01.jpg" alt="" />
            <img src="/images/icon02.jpg" alt="" />
            <img src="/images/icon03.jpg" alt="" />
            <img src="/images/icon04.jpg" alt="" />
            <img src="/images/icon05.jpg" alt="" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bottom-footer"
        >
          <div className="bottom-inner">
            <p className="copyright">Copyright © 2025 sriram educational and welfare trust. All rights reserved.</p>
            <p className="credits">
              Designed &amp; Developed by <a href="" target="_blank" rel="noreferrer">Webxprts.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
