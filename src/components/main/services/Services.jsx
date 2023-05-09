import React from "react";
import "./services.css";
import Card from "./Card";
import { services } from "../../../data/services";

const Services = () => {
    return (
        <>
            <section className="services-section">
                <div className="container position-relative">
                    <h1 className="text-md-end text-center section-heading">Services</h1>
                    <h2 className="text-center text-heading">What we do</h2>
                    <div className="row">
                        {services.map((service) => {
                            return (
                                <div
                                    key={service.id}
                                    className="col-xl-4 col-lg-6 col-sm-6 col-12 card-parent"
                                >
                                    <Card
                                        image={service.url}
                                        alt=""
                                        title={service.title}
                                        description={service.description}
                                        button="Read more"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
