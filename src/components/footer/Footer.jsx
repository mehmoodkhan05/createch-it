import React from "react";
import "./footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="main-footer pb-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 mt-5">
                <img className="footer-logo" src="./src/assets/images/footer-logo.png" alt="logo" />
              </div>
              <div className="col-xl-3 mt-5">
                <h4>About Company</h4>
                <p>
                  Createch IT Solutions offers a variety of website design and
                  development services, from creating mobile web development
                  solutions and responsive website designs, to building custom
                  e-commerce and intranet experiences using the latest and
                  proven web technologies.
                </p>
              </div>
              <div className="col-xl-2 mt-5">
                <h4>Quick Links</h4>
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
              <div className="col-xl-2 mt-5">
                <h4>What We Do</h4>
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
              <div className="col-xl-3 mt-5">
                <h4>Contact</h4>
                <p>
                  Room No. 53-55, 3rd Floor Sultan Tower, Makanbagh Mingora,
                  Swat KP Pakistan <br /> info@createchit.com <br /> +66 2399 1145
                </p>
                <div className="mt-2">
                    <a href="#">
                      <FaFacebookF className="footer-icon" />
                    </a>
                    <a href="#">
                      <FaLinkedinIn className="ms-3 footer-icon" />
                    </a>
                    <a href="#">
                      <FaTwitter className="ms-3 footer-icon" />
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <p className="text-center footer-copyright">
              © 2020 Createch IT Solutions. All Rights Reserved. 
            </p>
          </div>
      </footer>
    </>
  );
};

export default Footer;