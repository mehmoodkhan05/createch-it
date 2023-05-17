import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import config from "../../config";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mt-5 col-md-4 text-center text-md-start col-12">
              <img
                src={config.miniLogo}
                className="footer-logo"
                alt={config.siteName}
              />
            </div>

            <div className="col-lg-3 mt-5 col-md-4 col-6 ps-5">
              <h4 className="text-heading fs-16 lh-20">Quick Links</h4>
              <div className="footer-info">
                <ul className="list-unstyled p-0">
                  <li>
                    <Link to="#">Home</Link>
                  </li>
                  <li>
                    <Link to="#">About Us</Link>
                  </li>
                  <li>
                    <Link to="#">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="#">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="#">Send Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 mt-5 col-md-4 col-6">
              <h4 className="text-heading fs-16 lh-20">What We Do</h4>
              <div className="footer-info">
                <ul className="list-unstyled p-0">
                  <li>
                    <Link to="">Domain & Hosting</Link>
                  </li>
                  <li>
                    <Link to="">Management</Link>
                  </li>
                  <li>
                    <Link to="">Website Maintenanace</Link>
                  </li>
                  <li>
                    <Link to="">Website Customization</Link>
                  </li>
                  <li>
                    <Link to="">UI Design</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 mt-5 col-12 justify-content-center text-md-center text-lg-start ps-5">
              <h4 className="text-heading fs-16 lh-20">Contact</h4>
              <div className="footer-info">
                <p>
                  <Link
                    to="https://goo.gl/maps/WQBQci7bDsbtWDx59"
                    target="_blank"
                    className="text-decoration-none text-break"
                  >
                    Office: 53-55, 4th Floor Sultan Tower, Makanbagh Mingora,
                    Swat KP Pakistan
                  </Link>
                </p>

                <p className="lh-24">
                  <Link
                    to="mailto:info@createchit.com"
                    className="text-decoration-none"
                  >
                    info@createchit.com
                  </Link>
                </p>

                <p className="lh-24">
                  <Link
                    to="tel:+923369201441"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    +92 336 9201441
                  </Link>
                  &nbsp; | &nbsp;
                  <Link
                    to="http://wa.me/+923365238082"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    +92 336 5238082
                  </Link>
                </p>
              </div>

              <div className="mt-4">
                <Link
                  to="https://www.facebook.com/createchitsolutions"
                  target="_blank"
                >
                  <FaFacebookF className="footer-icon" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/createch-it-solutions-pvt-ltd/"
                  target="_blank"
                >
                  <FaLinkedinIn className="ms-3 footer-icon" />
                </Link>
                <Link to="#" target="_blank">
                  <FaTwitter className="ms-3 footer-icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p className="text-center footer-info mb-0">
              © 2020 &nbsp;
              <Link to="#" className="site_link">
                Createch IT Solutions
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
