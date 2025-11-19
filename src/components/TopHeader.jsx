import { FaPhone, FaCertificate, FaHandORight } from "react-icons/fa";
import { 
  IoLogoFacebook, 
  IoLogoInstagram, 
  IoLogoPinterest, 
  IoLogoWhatsapp 
} from "react-icons/io";

// import "./TopHeader.css";

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Contact */}
          <div className="col-md-8">
            <ul className="contact_detail">
              <li>
                <a href="tel:(91)-9818912399">
                  <FaPhone /> (91)-9818912399, (91)-9810450615, 011-27057399
                </a>
              </li>
              <li>
                <FaCertificate /> An ISO Verified 9001:2015 Certified Institute
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-4">
            <div className="social-group">
              <ul className="social_icons">
                <li><a href="https://www.instagram.com/sipvsindia1/" target="_blank"><IoLogoFacebook /></a></li>
                <li><a href="https://www.facebook.com/sipvsindia1234" target="_blank"><IoLogoInstagram /></a></li>
                <li><a href="https://www.pinterest.com/sipvss/" target="_blank"><IoLogoPinterest /></a></li>
                <li><a href="" target="_blank"><IoLogoWhatsapp /></a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Notices */}
          <div className="col-md-12">
            <div className="page_ctnt">
              <p className="pull-left">
                <FaHandORight /> Affiliated from NIOS (MHRD), NIELIT (MEIT), IIT Bombay (MOE) Govt. Of India.
              </p>

              <p className="pull-right">
                <FaHandORight /> Reg. With Govt. of Delhi NCT, NITI AAYOG, MSME Govt. Of India.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
