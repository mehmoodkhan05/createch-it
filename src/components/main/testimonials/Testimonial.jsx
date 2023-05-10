import React from "react";
import "./testimonial.css";
import icon from "/src/assets/quote.svg";
import image from "/src/assets/images/testimonial-image.jpg";

const Testimonial = () => {
  return (
    <>
      <section
        className="testimonial-section position-relative"
        id="testimonial"
      >
        <h1 className="position-absolute section-heading">Testimonials</h1>
        <div className="container">
          <h2 className="text-heading">See Our Clients’ Feedback</h2>
          <div className="row pt-80">
            <div className="col-lg-3 col-md-4 d-lg-flex align-items-lg-center justify-content-lg-end">
              <img src={icon} className="testimonial-icon img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-md-4">
              <img src={image} className="testimonial-image img-fluid" alt="" />
            </div>

            <div className="col-lg-6 col-md-4">
              <p className="text-body text-justify lh-24">
                “A Super creative, forward thinking team at Createch IT
                Solutions implicitly understood our vision for the brand and
                were able to translate our ideas into a tangible and exciting
                new concept.”
              </p>
              <p className="bottom-message pt-18">
                <span className="text-heading fs-18 lh-22">
                  Sarah Jordan, CEO
                </span>
                <br />
                <span className="footer-info lh-22">Some company</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
