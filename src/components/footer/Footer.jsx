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
            <div className="col-lg-3 mt-5 col-md-4 text-sm-center text-md-start col-12">
              <img
                src={config.miniLogo}
                className="footer-logo"
                alt={config.siteName}
              />
            </div>

            <div className="col-lg-3 mt-5 col-md-4 col-sm-6 col-12">
              <h4 className="text-heading fs-16 lh-20">Quick Links</h4>
              <div className="footer-info">
                <ul className="list-unstyled p-0">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Send Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 mt-5 col-md-4 col-sm-6 col-12">
              <h4 className="text-heading fs-16 lh-20">What We Do</h4>
              <div className="footer-info">
                <ul className="list-unstyled p-0">
                  <li>
                    <a href="">Domain & Hosting</a>
                  </li>
                  <li>
                    <a href="">Management</a>
                  </li>
                  <li>
                    <a href="">Website Maintenanace</a>
                  </li>
                  <li>
                    <a href="">Website Customization</a>
                  </li>
                  <li>
                    <a href="">UI Design</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 mt-5 col-12 justify-content-center text-md-center text-lg-start">
              <h4 className="text-heading fs-16 lh-20">Contact</h4>
              <div className="footer-info">
                <p>
                  <a
                    href="https://goo.gl/maps/WQBQci7bDsbtWDx59"
                    target="_blank"
                    className="text-decoration-none text-break"
                  >
                    Office: 53-55, 4th Floor Sultan Tower, Makanbagh Mingora,
                    Swat KP Pakistan
                  </a>
                </p>

                <p className="lh-24">
                  <a
                    href="mailto:info@createchit.com"
                    className="text-decoration-none"
                  >
                    info@createchit.com
                  </a>
                </p>

                <p className="lh-24">
                  <a
                    href="tel:+923369201441"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    +92 336 9201441
                  </a>
                  &nbsp; | &nbsp;
                  <a
                    href="http://wa.me/+923365238082"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    +92 336 5238082
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
                <a href="#" target="_blank">
                  <FaTwitter className="ms-3 footer-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p className="text-center footer-info mb-0">
              © 2020 &nbsp;
              <a href="#" className="site_link">
                Createch IT Solutions
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
