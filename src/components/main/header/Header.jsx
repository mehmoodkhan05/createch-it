import React from "react";
import "./header.css";
import image from "/src/assets/header.png"

const Header = () => {
    return (
        <>
            <section className="hero-section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 header-wraper mb-md-5 mb-lg-0 mt-md-0 d-flex flex-column justify-content-center">
                            <h1 className="text-md-center text-lg-start text-heading fs-42 lh-50 pt-5 pt-lg-0">
                                Creative Solutions <br /> For Your Complex Ideas!
                            </h1>
                            <p className="text-md-center text-lg-start hero-body">
                                Bringing people together under your brand, with your content,
                                events, and courses all available on the web and mobile apps is
                                the future of business.
                            </p>

                            {/* IMAGE IN MOBILE VIEW */}
                            <div className="d-flex justify-content-center d-lg-none">
                                <img src={image} alt="" className=" d-block mobile_image img-fluid" />
                            </div>

                            <div className="bottom-side justify-content-center justify-content-lg-start d-flex">
                                <div>
                                    <h1 className="text-heading mb-0 fs-40 text-md-center text-lg-start">
                                        300+
                                    </h1>
                                    <p className="fw-500 fs-16">Successful Projects</p>
                                </div>
                                <div className="scnd-heading" style={{ marginLeft: "120px" }}>
                                    <h1 className="text-heading mb-0 fs-40 text-md-center text-lg-start">
                                        150+
                                    </h1>
                                    <p className="fw-500 fs-16">Satisfied Customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-5 text-md-center text-lg-start d-none d-lg-block">
                            <img
                                src={image}
                                className="header-image img-fluid"
                                alt="image"
                            />
                        </div>

                        <div className="text-center mt-5">
                            <button className="header-btn text-white btn btn-w-175 p-2">Need Help!</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
