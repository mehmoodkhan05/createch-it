import React from "react";
import "./portfolio.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { portfolios } from "../../../data/portfolios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  portfolio_1,
  portfolio_2,
  portfolio_3,
  portfolio_4,
  portfolio_5,
  portfolio_6,
} from "./index";

const Portfolio = () => {
  const specificPortfolio = portfolios.filter(
    (el) =>
      el.id == 2 ||
      el.id == 3 ||
      el.id == 4 ||
      el.id == 5 ||
      el.id == 6 ||
      el.id == 8
  );

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    arrows: false,
    centerPadding: "85px",
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 555,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "85px"
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "65px"
        }
      },

      {
        breakpoint: 485,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "55px"
        }
      },

      {
        breakpoint: 455,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "45px"
        }
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px"
        }
      },

      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "25px"
        }
      },
    ]
  };

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="container position-relative">
          <h1 className="section-heading">Portfolio</h1>
          <h2 className="text-center text-heading">Portfolio</h2>
          <div className="row pt-60 d-none d-sm-flex">
            {specificPortfolio.map((protfolio) => {
              return (
                <div
                  key={protfolio.id}
                  className="col-lg-2 p-0 col-sm-4 col-6 position-relative"
                >
                  <img
                    src={protfolio.image}
                    className="img-fluid portfolio-images w-100"
                    alt="portfolio"
                  />
                </div>
              );
            })}

            <div className="text-center d-none d-sm-block">
              <Link to="/portfolio" className="btn btn-w-227 portfolio-btn p-2">
                View More
                <HiArrowLongRight className="portfolio-btn-icon ms-2" />
              </Link>
            </div>
          </div>

          <div className="slick-slider d-block d-sm-none pt-3">
            <Slider {...settings}>
              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_1} alt="" className="img-fluid ps-2" />
              </div>

              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_2} alt="" className="img-fluid ps-2" />
              </div>

              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_3} alt="" className="img-fluid ps-2" />
              </div>

              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_4} alt="" className="img-fluid ps-2" />
              </div>

              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_5} alt="" className="img-fluid ps-2" />
              </div>

              <div className="d-flex justify-content-center slick-next-content">
                <img src={portfolio_6} alt="" className="img-fluid ps-2" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
