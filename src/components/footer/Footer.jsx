import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import config from "../../config";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 mt-5 col-lg-4 col-md-4 col-sm-6 col-12">
              <img
                src={config.miniLogo}
                className="footer-logo"
                alt={config.siteName}
              />
            </div>
            <div className="col-xl-3 mt-5 col-lg-4 col-md-4 col-sm-6 col-12">
              <h4>Quick Links</h4>
              <div className="footer-links">
                <span>
                  <a href="#">Home</a>
                </span>
                <span>
                  <a href="#">About Us</a>
                </span>
                <span>
                  <a href="#">Portfolio</a>
                </span>
                <span>
                  <a href="#">Testimonials</a>
                </span>
                <span>
                  <a href="#">Send Us</a>
                </span>
              </div>
            </div>
            <div className="col-xl-3 mt-5 col-lg-4 col-md-4 col-sm-6 col-12">
              <h4>What We Do</h4>
              <div className="footer-what-links">
                <span>
                  <a href="">Domain & Hosting</a>
                </span>
                <span>
                  <a href="">Management</a>
                </span>
                <span>
                  <a href="">Website Maintenanace</a>
                </span>
                <span>
                  <a href="">Website Customization</a>
                </span>
                <span>
                  <a href="">UI Design</a>
                </span>
              </div>
            </div>
            <div className="col-xl-3 mt-5 col-lg-4 col-md-12 col-sm-6 col-12">
              <h4>Contact</h4>
              <div className="footer-contact">
                <p>
                  <a
                    href="https://goo.gl/maps/WQBQci7bDsbtWDx59"
                    target="_blank"
                    className="text-decoration-none"
                    style={{ lineHeight: "0" }}
                  >
                    Room No. 53-55, 3rd Floor Sultan Tower, Makanbagh Mingora,
                    Swat KP Pakistan
                  </a>
                  <br />
                  <a href="" className="text-decoration-none">
                    info@createchit.com
                  </a>
                  <br />
                  <a href="" className="text-decoration-none">
                    +66 2399 1145
                  </a>
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://www.facebook.com/createchitsolutions"
                  target="_blank"
                >
                  <FaFacebookF className="footer-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/createch-it-solutions-pvt-ltd/"
                  target="_blank"
                >
                  <FaLinkedinIn className="ms-3 footer-icon" />
                </a>
                <a href="">
                  <FaTwitter className="ms-3 footer-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="text-center footer-copyright pb-4">
            © 2020 &nbsp;
            <a href="" className="text-decoration-none">
              Createch IT Solutions
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
