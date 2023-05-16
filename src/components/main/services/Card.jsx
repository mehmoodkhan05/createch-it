import React from 'react'
import "./services.css"

const Card = (props) => {
    return (
        <>
            <div className="card py-4 position-relative">
                <img src={props.image} alt={props.alt} className="card-icons w-0" />
                <div className="card-body">
                    <p className="card-title text-heading fs-18 lh-24">{props.title}</p>
                    <p className="card-text text-body fs-16 lh-24 pt-3">{props.description}</p>
                    <a href="#">
                        <button className="card-btn border-0 bg-transparent footer-info fw-500 pt-0">{props.button}</button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Card