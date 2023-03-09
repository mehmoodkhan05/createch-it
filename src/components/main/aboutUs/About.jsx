import React from 'react'
import "./about.css"
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  return (
    <>
        <section className="main-section">
            <div className="container text-center">
                <h1>About Us</h1>
                <h2>Why Choose Us</h2>
                <div className="main-section-PRG-1 mt-5"> 
                    <p>
                        We are a modern website building agency that <br /> can scale as your
                        business grow
                    </p>
                </div>
                <div className="main-section-PRG-2 mt-5">
                    <p>
                        Createch IT Solutions offers a variety of website design and
                        development services, from creating mobile web development solutions
                        and <br /> responsive website designs, to building custom e-commerce and
                        intranet experiences using the latest and proven web technologies.
                    </p>
                </div>
                <button className="main-section-btn mt-5 mb-5 px-5 py-2">
                    More about us
                    <FaLongArrowAltRight className="btn-icon ms-2" />
                </button>
            </div>
        </section>
    </>
  )
}

export default About