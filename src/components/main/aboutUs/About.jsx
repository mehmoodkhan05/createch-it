import React from 'react'
import "./about.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <>
        <section className="main-section" id="about">
            <div id="about-two-circle"></div>
            <div className="container text-center mt-5 mb-5">
                <h1>About Us</h1>
                {/* <h2 className="fw-bold">Why Choose Us</h2> */}
                <div className="main-section-heading"> 
                    <h6>
                        We are a modern website building agency that <br /> can scale as your
                        business grow
                    </h6>
                </div>
                <div className="main-section-PRG-2 mt-5">
                    <p>
                        Createch IT Solutions offers a variety of website design and
                        development services, from creating mobile web development solutions
                        and <br /> responsive website designs, to building custom e-commerce and
                        intranet experiences using the latest and proven web technologies.
                    </p>
                </div>
                {/* <button className="main-section-btn mt-5 mb-5 px-5 py-2">
                    More about us
                    <FaLongArrowAltRight className="btn-icon ms-2" />
                </button> */}
            </div>
        </section>
    </>
  )
}

export default About