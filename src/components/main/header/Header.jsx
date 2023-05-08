import React from "react";
import "./header.css";
import image from "/src/assets/header.png"

const Header = () => {
    return (
        <>
            <section className="hero-section" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-7 header-wraper order-2 order-lg-1 mb-md-5 mb-lg-0 mt-md-0 d-flex flex-column justify-content-center">
                            <h1 className="text-md-center text-lg-start text-heading fs-42 lh-50 pt-5 pt-lg-0">
                                Creative Solutions <br /> for your Complex Ideas!
                            </h1>
                            <p className="text-md-center text-lg-start hero-body">
                                Bringing people together under your brand, with your content,
                                events, and courses all available on the web and mobile apps is
                                the future of business.
                            </p>
                            <div className="bottom-side justify-content-md-center justify-content-lg-start d-flex">
                                <div>
                                    <h1 className="text-heading mb-0 fs-40">
                                        300+
                                    </h1>
                                    <p className="fw-500 fs-16">Successful Projects</p>
                                </div>
                                <div style={{ marginLeft: "120px" }}>
                                    <h1 className="text-heading mb-0 fs-40">
                                        150+
                                    </h1>
                                    <p className="fw-500 fs-16">Satisfied Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5 order-1 order-lg-2 text-md-center text-lg-start">
                            <img
                                src={image}
                                className="header-image img-fluid"
                                alt="image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
