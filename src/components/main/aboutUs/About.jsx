import React from "react";
import "./about.css";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const About = () => {
    
    return (
        <>
            <section className="about-section position-relative" id="about">
                <div className="container text-center mt-5 mb-5">
                    <div>
                        <p className="section-heading">About Us</p>
                    </div>

                    <div>
                        <p className="text-heading">Why Choose Us</p>
                    </div>

                    <div  className="pt-sm-4 pt-2">
                        <p className="text-subHeading">
                            We are a modern website building agency that can scale as
                            your business grow
                        </p>
                    </div>

                    <div className="pt-sm-5 pt-2">
                        <p className="text-body">
                            Createch IT Solutions offers a variety of website design and
                            development services, from creating mobile web development
                            solutions and responsive website designs, to building
                            custom e-commerce and intranet experiences using the latest and
                            proven web technologies.
                        </p>
                    </div>
                    <Link to="/aboutUs" className="about-btn btn btn-w-227 mt-5 p-2">
                        More about us
                        <HiArrowLongRight className="btn-icon ms-2" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
