import React from 'react'
import "./navbar.css"

const Navbar = (props) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <img src="./src/assets/images/header-image-side.png" className="header-image-side" alt="" />
            <div className="container">
                <a className="navbar-brand header-logo" href="#">
                    <img src="./src/assets/images/CreatechitLogo.png" alt="Logo" />
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
                            <a className="nav-link" aria-current="page" href="#">
                                {props.home}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.about}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.portfolio}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.testimonials}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.contact}
                            </a>
                        </li>
                        
                    </ul>
                    <button className="header-btn p-1">Need Help?</button>
                    <span>
                        <i className="fa fa-search search-icon" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </nav>
        
    </>
  )
}

export default Navbar