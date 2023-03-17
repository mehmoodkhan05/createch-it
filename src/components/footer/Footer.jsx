import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 mt-5 col-lg-4 col-md-4 col-sm-6 col-12">
              <img
                className="footer-logo w-sm-100 w-xs-25"
                src="./src/assets/images/footer-logo.png"
                alt="logo"
              />
            </div>
            {/* <div className="col-xl-3 mt-5 col-lg-4 col-md-6 col-sm-6 col-12">
                <h4>About Company</h4>
                <p>
                  Createch IT Solutions offers a variety of website design and
                  development services, from creating mobile web development
                  solutions and responsive website designs, to building custom
                  e-commerce and intranet experiences using the latest and
                  proven web technologies.
                </p>
              </div> */}
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
            <div className="col-xl-3 mt-5 col-lg-4 col-md-4 col-sm-6 col-12">
              <h4>Contact</h4>
              <div className="footer-contact">
                <p>
                  Room No. 53-55, 3rd Floor Sultan Tower, Makanbagh Mingora,
                  Swat KP Pakistan <br /> info@createchit.com <br /> +66 2399
                  1145
                </p>
              </div>
              <div className="mt-4">
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
          <p className="text-center footer-copyright pb-4">
            © 2020 Createch IT Solutions. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
