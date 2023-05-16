import React, { useState } from "react";
import "./navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";
import config from "../../config";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { TiTimes } from "react-icons/ti";

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
                            className={`navbar-toggler p-0 ${isMenuOpen ? "open" : ""}`}
                            onClick={handleMenuClick}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="">
                                {isMenuOpen ? <TiTimes /> : <HiBars3BottomRight />}
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
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
                                    <HashLink className="nav-link" to="/#testimonial">
                                        {props.testimonials}
                                    </HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink className="nav-link" to="/#contact">
                                        {props.contact}
                                    </HashLink>
                                </li>
                            </ul>
                            <div>
                                <button className="header-btn btn-w-147 p-1">Need Help?</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
