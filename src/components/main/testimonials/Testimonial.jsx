import React from "react";
import "./testimonial.css";
import icon from "/src/assets/quote.svg";
import image from "/src/assets/images/testimonial-image.jpg";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <>
      <section
        className="testimonial-section position-relative"
        id="testimonial"
      >
        <h1 className="position-absolute section-heading">Testimonials</h1>
        <div className="container">
          <div className="text-center">
            <h2 className="text-heading">See Our Clients’ Feedback</h2>
          </div>
          <div className="row pt-80 d-none d-sm-block">
            <div className="col-lg-3 col-md-4 col-12 align-items-lg-center justify-content-lg-end">
              <img src={icon} className="testimonial-icon img-fluid" alt="" />
            </div>

            <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start">
              <img src={image} className="testimonial-image img-fluid" alt="" />
            </div>

            <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
              <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0">
                “A Super creative, forward thinking team at Createch IT
                Solutions implicitly understood our vision for the brand and
                were able to translate our ideas into a tangible and exciting
                new concept.”
              </p>

              <p className="bottom-message pt-18 text-center text-md-start">
                <span className="text-heading fs-18 lh-22">
                  Sarah Jordan, CEO
                </span>
                <br />
                <span className="footer-info lh-22">Some company</span>
              </p>
            </div>
          </div>

          {/* SLICK SLIDER IN MOBILE */}
          <div className="pt-3">
            <Slider {...settings}>
              <div>
                <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start d-flex align-items-center justify-content-center">
                  <img src={image} className="testimonial-image img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                  <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                    “A Super creative, forward thinking team at Createch IT
                    Solutions implicitly understood our vision for the brand and
                    were able to translate our ideas into a tangible and exciting
                    new concept.”
                  </p>

                  <p className="bottom-message pt-18 text-center text-md-start order-1 order-md-2">
                    <span className="text-heading fs-18 lh-22">
                      Sarah Jordan, CEO
                    </span>
                    <br />
                    <span className="footer-info lh-22">Some company</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start d-flex align-items-center justify-content-center">
                  <img src={image} className="testimonial-image img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                  <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                    “A Super creative, forward thinking team at Createch IT
                    Solutions implicitly understood our vision for the brand and
                    were able to translate our ideas into a tangible and exciting
                    new concept.”
                  </p>

                  <p className="bottom-message pt-18 text-center text-md-start order-1 order-md-2">
                    <span className="text-heading fs-18 lh-22">
                      Sarah Jordan, CEO
                    </span>
                    <br />
                    <span className="footer-info lh-22">Some company</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start d-flex align-items-center justify-content-center">
                  <img src={image} className="testimonial-image img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                  <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                    “A Super creative, forward thinking team at Createch IT
                    Solutions implicitly understood our vision for the brand and
                    were able to translate our ideas into a tangible and exciting
                    new concept.”
                  </p>

                  <p className="bottom-message pt-18 text-center text-md-start order-1 order-md-2">
                    <span className="text-heading fs-18 lh-22">
                      Sarah Jordan, CEO
                    </span>
                    <br />
                    <span className="footer-info lh-22">Some company</span>
                  </p>
                </div>
              </div>

              <div>
                <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start d-flex align-items-center justify-content-center">
                  <img src={image} className="testimonial-image img-fluid" alt="" />
                </div>

                <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                  <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                    “A Super creative, forward thinking team at Createch IT
                    Solutions implicitly understood our vision for the brand and
                    were able to translate our ideas into a tangible and exciting
                    new concept.”
                  </p>

                  <p className="bottom-message pt-18 text-center text-md-start order-1 order-md-2">
                    <span className="text-heading fs-18 lh-22">
                      Sarah Jordan, CEO
                    </span>
                    <br />
                    <span className="footer-info lh-22">Some company</span>
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
