import React from 'react'
import "./contact.css"
import Form from './Form'

const Contact = () => {
  return (
    <>
        <section className="contact-section">
            <div className="container">
                <h1 className="position-absolute" id="contact">Contact</h1>
                <div className="row">
                    <div className="col-lg-6 col-md-5 te">
                        <h2 className="text-end text-md-center fw-bold">Interested in driving growth?</h2>
                        <img src="./src/assets/images/contact-image.png" className="contact-image img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-7 p-md-0">
                        <p className="contact__PRG">Have a general question?<br /> We're just an email away.</p>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact