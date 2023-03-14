import React from 'react'
import "./testimonial.css"
// import { FaQuoteLeft } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <>
      <section className="testimonial-section">
        <div className="container position-relative">
          <h1 className="position-absolute" id="testimonial">Testimonials</h1>
          <h2 className="fw-bold">What our clients say</h2>
          <div className="row mt-lg-5">
            <div className="col-xl-3 col-lg-3 col-md-2 mt-5 mt-md-3 col-6">
              <img src="./src/assets/quote.svg" className="testimonial-icon" alt="" />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 mt-5 mt-md-3 col-6">
              <img src="./src/assets/images/testimonial-image.jpg" className="testimonial-image" alt="" />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7 mt-5 p-4 mt-md-0">
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



