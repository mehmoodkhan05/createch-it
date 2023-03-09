import React from 'react'
import "./portfolio.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio-section mb-5">
        <div className="container position-relative">
          <h1 className="position-absolute">Portfolio</h1>
          <h2 className="text-center">Portfolio</h2>
          <div className="row mt-5">
            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6">
              <img src="./src/assets/images/portfolio-1.jpg" className="img-fluid" alt="portfolio" />
            </div>

            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6">
              <img src="./src/assets/images/portfolio-2.jpg" className="img-fluid" alt="portfolio" />
            </div>

            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6">
              <img src="./src/assets/images/portfolio-3.jpg" className="img-fluid" alt="portfolio" />
            </div>

            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6 mt-md-2">
              <img src="./src/assets/images/portfolio-4.jpg" className="img-fluid" alt="portfolio" />
            </div>

            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6 mt-md-2">
              <img src="./src/assets/images/portfolio-5.jpg" className="img-fluid" alt="portfolio" />
            </div>

            <div className="col-lg-2 p-0 col-md-4 col-sm-4 col-6 mt-md-2">
              <img src="./src/assets/images/portfolio-6.jpg" className="img-fluid" alt="portfolio" />
            </div>
            <div className="text-center portfolio-btn-div">
              <button className="portfolio-btn px-5 py-2">
                View More
                <FaLongArrowAltRight className="portfolio-btn-icon ms-2" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio