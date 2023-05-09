import React from "react";
import "./logos.css";
import { clients } from "../../../data/clients";

const Logos = () => {
    return (
        <>
            <section className="logos-section">
                <div className="container">
                    <div className="row m-0 p-5">
                        {clients.map((client) => {
                            return (
                                <div
                                    key={client.id}
                                    className="col-xl-2 col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center"
                                >
                                    <img
                                        src={client.logo}
                                        alt="wwcLogo"
                                        className={`img-fluid p-1 ${client.id == 5 && "background"}`}
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

export default Logos;
