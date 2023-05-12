import React from "react";
import "./morePortfolio.css";
import { portfolios } from "../../data/portfolios";

const MorePortfolio = () => {
  const portfolioImages = portfolios.sort((a, b) =>
    a.order - b.order
  );

  return (
    <>
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

          <div className="images-container">
            <div className="row">
              {portfolios.map((portfolios) => {
                return (
                  <div className="col-lg-3" key={portfolios.id}>
                    <img
                      src={portfolios.image}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MorePortfolio;
