import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import config from "../../config";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMenuClick() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <header className="navbar-header fixed-top">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img
                                src={config.logo}
                                className="header-logo"
                                alt={config.siteName}
                            />
                        </Link>
                        <button
                            className={`navbar-toggler d-lg-none ${isMenuOpen ? "open" : ""}`}
                            onClick={handleMenuClick}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="">
                                {isMenuOpen ? <FaTimes /> : <FaBars />}
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto text-center text-lg-start">
                                <li className="nav-item">
                                    <HashLink className="nav-link active" smooth aria-current="page" to="/#">
                                        {props.home}
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" smooth aria-current="page" to="/#about">
                                        {props.about}
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#portfolio">
                                        {props.portfolio}
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#contact">
                                        {props.contact}
                                    </HashLink>
                                </li>
                            </ul>                          

                            <div className="d-none d-lg-block">
                                <button className="header-btn btn-w-147 p-1">Need Help?</button>
                            </div>

                            <div className="mt-3 me-3 d-block d-lg-none text-center text-lg-start">
                                <Link
                                    to="https://www.facebook.com/createchitsolutions"
                                    target="_blank"
                                >
                                    <FaFacebookF className="navbar-icon" />
                                </Link>
                                <Link
                                    to="https://www.linkedin.com/company/createch-it-solutions-pvt-ltd/"
                                    target="_blank"
                                >
                                    <FaLinkedinIn className="ms-3 navbar-icon" />
                                </Link>
                                <Link to="#" target="_blank">
                                    <FaTwitter className="ms-3 navbar-icon" />
                                </Link>
                            </div>

                            <div className="navbar-copyright d-block d-lg-none pt-4">
                                <p className="text-center navbar-info mb-0">
                                    © 2020 &nbsp;
                                    <Link to="/" className="site_link">
                                        Createch IT Solutions
                                    </Link>
                                    . All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
