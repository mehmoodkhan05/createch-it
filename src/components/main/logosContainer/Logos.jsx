import React from 'react'
import "./logos.css"
import {
    wwcLogo,
    propLogo,
    thereLogo,
    anneLogo,
    kingLogo,
    fiifiLogo
} from "./index"

const Logos = () => {
    return (
        <>
            <section className="logos-section">
                <div className="container">
                    <div className="row m-0 p-5">
                        <div className="col-xl-1 col-lg-3 col-md-4 col-12">
                            <img src={wwcLogo} alt="wwcLogo" className="img-fluid" />
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
                            <img src={propLogo} alt="propLogo" className="img-fluid" />
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
                            <img src={thereLogo} alt="thereLogo" className="img-fluid" />
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-12 d-flex align-items-center justify-content-center">
                            <img src={anneLogo} alt="anneLogo" className="img-fluid" />
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-4 col-12 mt-lg-4 mt-xl-0 d-flex align-items-center justify-content-center">
                            <img src={kingLogo} alt="kingLogo" className="bg-dark" />
                        </div>

                        <div className="col-xl-2 col-lg-6 col-md-4 col-12 mt-lg-4 mt-xl-0 d-flex align-items-center justify-content-center">
                            <img src={fiifiLogo} alt="fiifiLogo" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Logos