import React from "react";
import "./creative.css";
import { creatives } from "../../../data/creatives";
import Slider from "react-slick";
import { team_1, team_2, team_3 } from "./index"

const Creative = () => {
    const settings = {
        className: "center",
        centerMode: true,
        centerPadding: "100px",
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
                    centerPadding: "20px"
                }
            },

            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px"
                }
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "0px"
                }
            }
        ]
    };

    return (
        <>
            <section className="creative-section" id="creatives">
                <div className="container position-relative">
                    <h1 className="section-heading">Creatives</h1>
                    <h2 className="text-center text-heading">Our Awesome Team</h2>
                    <div className="row text-center pt-md-4">
                        {creatives.map((creative) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-6 p-sm-1 ps-lg-2 mt-xl-5 d-none d-sm-block" key={creative.id}>
                                    <img src={creative.image} alt="" className="img-fluid" />
                                    <p className="pt-3">
                                        <span className="text-heading fs-18 lh-26">{creative.heading}</span>
                                        <br />
                                        <span className="text-body fs-16 lh-26">
                                            {creative.body}
                                        </span>
                                    </p>
                                    <p className="text-body fs-16 lh-26">{creative.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="slick-slider d-block d-sm-none">
                        <Slider {...settings}>
                            <div className="text-center">
                                <img src={team_2} alt="" className="img-fluid" />
                                <p className="pt-3">
                                    <span className="text-heading fs-18 lh-26">Babar Ali Khan</span>
                                    <br />
                                    <span className="text-body fs-16 lh-26">
                                        Sr. Web Developer & Founder CITS
                                    </span>
                                </p>
                                <p className="text-body fs-16 lh-26">Professional Experience: 8 years</p>
                            </div>

                            <div className="text-center">
                                <img src={team_1} alt="" className="img-fluid" />
                                <p className="pt-3">
                                    <span className="text-heading fs-18 lh-26">Muhammad Ismail</span>
                                    <br />
                                    <span className="text-body fs-16 lh-26">
                                        Sr. Web Developer
                                    </span>
                                </p>
                                <p className="text-body fs-16 lh-26">Professional Experience: 8 years</p>
                            </div>

                            <div className="text-center">
                                <img src={team_3} alt="" className="img-fluid" />
                                <p className="pt-3">
                                    <span className="text-heading fs-18 lh-26">Babar Ali Khan</span>
                                    <br />
                                    <span className="text-body fs-16 lh-26">
                                        Graphics Designer & Video Editor
                                    </span>
                                </p>
                                <p className="text-body fs-16 lh-26">Professional Experience: 8 years</p>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Creative;
