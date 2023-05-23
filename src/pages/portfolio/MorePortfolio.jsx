import React, { useEffect } from "react";
import "./morePortfolio.css";
import { portfolios } from "../../data/portfolios";
import { clients } from "../../data/clients";
import Slider from "react-slick";
import {
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
} from "/src/components/main/logosContainer/index.js";
import { image, logo } from "/src/components/main/contact/index.js";
import Form from "react-bootstrap/Form";
import { HiArrowLongRight } from "react-icons/hi2";
import { icon, test_image } from "/src/components/main/testimonials/index.js";

const MorePortfolio = () => {
  const portfolioImages = portfolios.sort((a, b) => a.order - b.order);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <div className="more_portfolio-component">
        <div className="more_portfolio-page">
          <div className="container position-relative">
            <div className="heading-container">
              <p className="section-heading text-center">Portfolio</p>
              <p className="text-heading text-center pt-150">
                We are a modern website building agency that can scale as your
                business grow.
              </p>
              <p className="text-body text-center pt-20">
                Createch IT Solutions offers a variety of website design and
                development services, from creating mobile web development
                solutions and responsive website designs, to building custom
                e-commerce and intranet experiences using the latest and proven
                web technologies.
              </p>
            </div>

            <div className="images-container text-center text-sm-start">
              <div className="row">
                {portfolios.map((portfolios) => {
                  return (
                    <div
                      className="col-lg-3 col-md-6 col-12"
                      key={portfolios.id}
                    >
                      <img
                        src={portfolios.image}
                        alt=""
                        className="img-fluid portfolios-inner"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* LOGOS SECTION */}
        <section className="logos-section">
          <div className="container">
            <div className="row m-0 p-5">
              {clients.map((client) => {
                return (
                  <div
                    key={client.id}
                    className="col-xl-2 col-sm-4 col-12 d-none d-sm-flex align-items-center justify-content-center mt-4 mt-md-0"
                  >
                    <img
                      src={client.logo}
                      alt="logo"
                      className="img-fluid logos_desktop"
                    />
                  </div>
                );
              })}
            </div>

            <div className="d-block d-sm-none">
              <Slider {...settings}>
                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_1} alt="" />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_2} alt="" />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_3} alt="" />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_4} alt="" />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_5} alt="" />
                </div>

                <div className="d-flex align-items-center justify-content-center">
                  <img src={logo_6} alt="" />
                </div>
              </Slider>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact-section" id="contact">
          <div className="container">
            <h1 className="section-heading">Contact</h1>
            <div className="row">
              <div className="col-xl-7 col-lg-7 col-md-6 d-flex d-sm-block">
                <h2 className="text-heading">Interested in Driving Growth?</h2>
                <div className="d-flex align-items-center justify-content-center">
                  {/* MOBILE VIEW LOGO */}
                  <img
                    src={logo}
                    className="d-sm-none img-fluid contact-logo"
                    alt=""
                  />
                </div>

                {/* DESKTOP VIEW IMAGE */}
                <img
                  src={image}
                  className="contact-image img-fluid d-none d-md-block"
                  alt=""
                />
              </div>

              <div className="col-xl-4 col-lg-5 col-md-6">
                <p className="text-subHeading">
                  Have a question in mind?
                  <br /> We're just an email away.
                </p>
                <Form className="contact-form">
                  <Form.Group className="mb-xl-4 mb-lg-3 mb-3">
                    <Form.Control type="text" placeholder="Your name" />
                  </Form.Group>

                  <Form.Group className="mb-xl-4 mb-lg-3 mb-3">
                    <Form.Control type="email" placeholder="Your email" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      className="mb-xl-3"
                      as="textarea"
                      cols={30}
                      rows={5}
                      placeholder="Tell us about your project"
                    />
                  </Form.Group>
                  <div className="text-center text-md-start">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="contact-btn btn-w-227 btn p-2 mt-lg-4"
                    >
                      Send us
                      <HiArrowLongRight className="ms-2 contact-btn-icon" />
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section
          className="testimonial-section position-relative"
          id="testimonial"
        >
          <h1 className="position-absolute section-heading">Testimonials</h1>
          <div className="container">
            <div className="text-center text-lg-start">
              <h2 className="text-heading d-none d-sm-block">
                See Our Clients’ Feedback
              </h2>
              <h2 className="text-heading d-block d-sm-none">
                Clients’ Feedback
              </h2>
            </div>
            <div className="row pt-80 d-none d-sm-flex align-items-md-center justify-content-md-center align-items-lg-start justify-content-lg-start testimonial_main-row">
              <div className="col-lg-3 col-md-4 col-12 position-relative d-none d-lg-block">
                <img src={icon} className="testimonial-icon img-fluid" alt="" />
              </div>

              <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start mt-xl-4">
                <img
                  src={test_image}
                  className="testimonial-image img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-6 col-md-5 col-12 d-flex flex-column mt-xl-4">
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

            {/* SLICK SLIDER IN MOBILE */}
            <div className="pt-3 d-block d-sm-none">
              <Slider {...settings}>
                <div>
                  <div className="col-lg-2 col-md-4 col-12 text-center text-lg-start d-flex align-items-center justify-content-center">
                    <img
                      src={test_image}
                      className="testimonial-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                    <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                      “A Super creative, forward thinking team at Createch IT
                      Solutions implicitly understood our vision for the brand
                      and were able to translate our ideas into a tangible and
                      exciting new concept.”
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
                    <img
                      src={test_image}
                      className="testimonial-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                    <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                      “A Super creative, forward thinking team at Createch IT
                      Solutions implicitly understood our vision for the brand
                      and were able to translate our ideas into a tangible and
                      exciting new concept.”
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
                    <img
                      src={test_image}
                      className="testimonial-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                    <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                      “A Super creative, forward thinking team at Createch IT
                      Solutions implicitly understood our vision for the brand
                      and were able to translate our ideas into a tangible and
                      exciting new concept.”
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
                    <img
                      src={test_image}
                      className="testimonial-image img-fluid"
                      alt=""
                    />
                  </div>

                  <div className="col-lg-6 col-md-4 col-12 d-flex flex-column">
                    <p className="text-body text-justify text-center text-sm-start lh-24 mt-4 mt-md-0 order-2 order-md-1">
                      “A Super creative, forward thinking team at Createch IT
                      Solutions implicitly understood our vision for the brand
                      and were able to translate our ideas into a tangible and
                      exciting new concept.”
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
      </div>
    </>
  );
};

export default MorePortfolio;
