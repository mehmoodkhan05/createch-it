import React from "react";
import "./contact.css";
import Form from "./ContactForm";
import { image, logo } from "./index";

const Contact = () => {
    return (
        <>
            <section className="contact-section" id="contact">
                <div className="container">
                    <h1 className="section-heading">Contact</h1>
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 col-md-6 d-flex d-sm-block">
                            <div className="d-flex align-items-center justify-content-center">
                                <h2 className="text-heading">Interested in Driving Growth?</h2>

                                {/* MOBILE VIEW LOGO */}
                                <img
                                    src={logo}
                                    className="d-sm-none img-fluid contact-logo"
                                    alt=""
                                />
                            </div>

                            {/* DESKTOP VIEW IMAGE */}
                            <img
                                src={image}
                                className="contact-image img-fluid d-none d-sm-block"
                                alt=""
                            />
                        </div>

                        <div className="col-xl-4 col-lg-5 col-md-6 pt-0 pt-sm-0">
                            <p className="text-subHeading">
                                Have a question in mind?
                                <br /> We're just an email away.
                            </p>
                            <Form />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
