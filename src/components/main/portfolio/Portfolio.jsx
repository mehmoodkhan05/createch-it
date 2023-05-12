import React from "react";
import "./portfolio.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { portfolios } from "../../../data/portfolios";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const specificPortfolio = portfolios.filter(
    (el) =>
      el.id == 1 ||
      el.id == 2 ||
      el.id == 3 ||
      el.id == 4 ||
      el.id == 5 ||
      el.id == 6     
  );

  return (
    <>
      <section className="portfolio-section" id="portfolio">
        <div className="container position-relative">
          <h1 className="section-heading">Portfolio</h1>
          <h2 className="text-center text-heading">Portfolio</h2>
          <div className="row pt-60">
            {specificPortfolio.map((protfolio) => {
              return (
                <div
                  key={protfolio.id}
                  className="col-xl-2 col-lg-2 p-0 col-md-4 col-sm-4 col-6 pe-1 position-relative"
                >
                  <img
                    src={protfolio.image}
                    className="img-fluid portfolio-images"
                    alt="portfolio"
                  />
                </div>
              );
            })}

            <div className="text-center">
              <Link to="/portfolio" className="btn btn-w-227 portfolio-btn p-2">
                View More
                <HiArrowLongRight className="portfolio-btn-icon ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
