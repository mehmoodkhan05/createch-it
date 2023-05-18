import React from "react";
import "./logos.css";
import { clients } from "../../../data/clients";
import Slider from "react-slick";
import { logo_1, logo_2, logo_3, logo_4, logo_5, logo_6 } from "./index"

const Logos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500
    };

    return (
        <>
            <section className="logos-section">
                <div className="container">
                    <div className="row m-0 p-5">
                        {clients.map((client) => {
                            return (
                                <div
                                    key={client.id}
                                    className="col-xl-2 col-sm-4 col-12 d-none d-sm-flex align-items-center justify-content-center mt-4 mt-md-0"
                                >
                                    <img
                                        src={client.logo}
                                        alt="wwcLogo"
                                        className="img-fluid logos_desktop"
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="d-block d-sm-none">
                        <Slider {...settings}>
                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_1} alt="" />
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_2} alt="" />
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_3} alt="" />
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_4} alt="" />
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_5} alt="" />
                            </div>

                            <div className="d-flex align-items-center justify-content-center">
                                <img src={logo_6} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Logos;
