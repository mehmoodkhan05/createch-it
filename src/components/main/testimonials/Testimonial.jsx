import React from 'react'
import "./testimonial.css"
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial-section">
            <div className="container position-relative">
                <h1 className="position-absolute">Testimonials</h1>
                <h2 className="fw-bold">What our clients say</h2>
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-2 text-end mt-5">
                    <img src="./src/assets/quote.svg" className="testimonial-icon" alt="" />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-2 text-end mt-5">
                    <img src="./src/assets/images/testimonial-image.jpg" className="testimonial-image" alt="" />
                  </div>
                  <div className="col-lg-5 col-md-3 col-sm-4 mt-5 p-4">
                    <p className="testimonial-description">“A Super creative, forward thinking team at Createch IT Solutions implicitly
                        understood our vision for the brand and were able to translate our ideas into a tangible and exciting
                        new concept.”
                    </p>
                    <div className="testimonial-PRG">
                      <p>
                        <b>Sarah Jordan, CEO</b>
                        <br /> 
                        Some company
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial



