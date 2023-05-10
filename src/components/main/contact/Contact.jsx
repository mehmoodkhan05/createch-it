import React from 'react'
import "./contact.css"
import Form from "./ContactForm"

const Contact = () => {
  return (
    <>
        <section className="contact-section" id="contact">
            <div className="container">
                <h1 className="section-heading">Contact</h1>
                <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-6">
                        <h2 className="text-heading">Interested in driving growth?</h2>
                        <img src="./src/assets/images/contact-image.png" className="contact-image img-fluid" alt="" />
                    </div>

                    <div className="col-xl-4 col-lg-5 col-md-6 p-0">
                        <p className="text-subHeading">Have a question in mind?<br /> We're just an email away.</p>
                        <Form />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact