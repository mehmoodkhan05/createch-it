import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 header-wraper order-2 order-lg-1">
                    <h1><b>Creative Solutions</b><br /> for your Complex Ideas!</h1>
                    <p>Bringing people together under your brand, with your content,<br />
                        events, and courses all available on the web and mobile apps<br />
                        is the future of business.
                    </p>
                    <div className="row header-2ndR">
                        <div className="col-md-6">
                            <h1><b>300+</b></h1>
                            <p>Successful Projects</p>
                        </div>
                        <div className="col-md-6">
                            <h1><b>150+</b></h1>
                            <p>Satisfied Customers</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 position-relative">
                    <img src="./src/assets/images/header.png" className="header-image" alt="image" />
                    <img src="./src/assets/images/header-image-side.png" className="header-image-side" alt="" />
                </div>
            </div>
        </div>
    </>
  );
};

export default Header;
