import React from "react";
import "./creative.css";
import { team_1, team_2, team_3 } from "./index";

const Creative = () => {
    return (
        <>
            <section className="creative-section" id="creatives">
                <div className="container position-relative">
                    <h1 className="section-heading">Creatives</h1>
                    <h2 className="text-center text-heading">Our Awesome Team</h2>
                    <div className="row text-center pt-md-4">
                        <div className="col-lg-4 col-md-6 col-sm-6 p-sm-1 ps-lg-2 mt-xl-5">
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
                        <div className="col-lg-4 col-md-6 col-sm-6 p-sm-1 ps-lg-2 mt-xl-5">
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
                        <div className="col-lg-4 col-md mt-md-5 mt-lg-0 col-sm-12 mt-sm-3 ps-lg-2 mt-xl-5 text-md-center">
                            <img src={team_3} alt="" className="img-fluid" />
                            <p className="pt-3">
                                <span className="text-heading fs-18 lh-26">Faisal Hayat</span>
                                <br />
                                <span className="text-body fs-16 lh-26">
                                    Graphic Designer & Video Editor
                                </span>
                            </p>
                            <p className="text-body fs-16 lh-26">Professional Experience: 8 years</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Creative;
