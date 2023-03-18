import React, { useState } from "react";
import "./navbar.css";

const Navbar = (props) => {
    const [isSearchOpen, setSearchOpen] = useState(false);

    const handleSearchClick = () => {
        setSearchOpen(!isSearchOpen);
    };

    const handleInputBlur = () => {
        setSearchOpen(false);
    };

    // const toggleSearch = () => {
    //     setSearchOpen(!searchOpen);
    // };

    return (
        <>
            <header className="navbar-header">
                <nav className="navbar navbar-expand-lg w-100 bg-white fixed-top">
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
                            <span className="navbar-toggler-icon"></span>
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
                            <button className="header-btn p-1">Need Help?</button>
                            <div className="search-container d-inline-block">
                                <span onClick={handleSearchClick}>
                                    <i
                                        className="fa fa-search ms-xl-1 mt-1 search-icon"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                                {isSearchOpen && (
                                    <input
                                        className="search-input"
                                        type="search"
                                        placeholder="Search..."
                                        onBlur={handleInputBlur}
                                    />
                                )}
                            </div>
                            {/* <div className="search-container position-relative">
                                <button className="search-icon" onClick={toggleSearch}>
                                    <i
                                        className={`fas ${searchOpen ? "fa-times" : "fa-search"}`}
                                    />
                                </button>
                                <div className={`search-bar position-absolute ${searchOpen ? "open" : ""}`}>
                                    <input type="text" placeholder="Search..." />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
