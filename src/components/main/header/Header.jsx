import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
        <header className="main-header" id="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 header-wraper order-2 order-lg-1 mb-md-5 mb-lg-0 mt-md-0 d-flex flex-column justify-content-center">
                        <h1 className="text-md-center text-lg-start"><b>Creative Solutions</b> for your Complex Ideas!</h1>
                        <p className="text-md-center text-lg-start">Bringing people together under your brand, with your content,
                            events, and courses all available on the web and mobile apps
                            is the future of business.
                        </p>
                        <div className="header-2ndR justify-content-md-center justify-content-lg-start">
                            <div>
                                <h1><b>300+</b></h1>
                                <p>Successful Projects</p>
                            </div>
                            <div style={{ marginLeft: "120px" }}>
                                <h1><b>150+</b></h1>
                                <p>Satisfied Customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-md-center text-lg-start">
                        <img src="./src/assets/images/header.png" className="header-image img-fluid" alt="image" />
                        {/* <img src="./src/assets/images/header-image-side.png" className="header-image-side" alt="" /> */}
                    </div>
                </div>
            </div>
        </header>
    </>
  );
};

export default Header;
