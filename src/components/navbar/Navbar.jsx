import React from "react";
import "./navbar.css";
import { HiBars3BottomRight } from "react-icons/hi2";

const Navbar = (props) => {
    return (
        <>
            <header className="navbar-header sticky-top">
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img
                                src="./src/assets/images/CreatechitLogo.png"
                                className="header-logo"
                                alt="Logo"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="">
                                <HiBars3BottomRight />
                            </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#home">
                                        {props.home}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        {props.about}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">
                                        {props.portfolio}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#testimonial">
                                        {props.testimonials}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        {props.contact}
                                    </a>
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
