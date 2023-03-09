import React from 'react'
import "./testimonial.css"
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial-section">
            <div className="container position-relative">
                <h1 className="position-absolute">Testimonials</h1>
                <h2>What our clients say</h2>
                {/* <FaQuoteLeft className="testimonial-icon" /> */}
                <div className="row">
                  <div className="col-lg-3 text-end mt-5">
                    <img src="./src/assets/quote.svg" className="testimonial-icon" alt="" />
                  </div>
                  <div className="col-lg-3 text-end mt-5">
                    <img src="./src/assets/images/testimonial-image.jpg" className="testimonial-image" alt="" />
                  </div>
                  <div className="col-lg-6 mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque animi atque aut exercitationem quo quis iste culpa sit quasi hic suscipit laborum placeat aliquam cumque, sint iusto sed provident nemo.</p>
                    <div>
                      <p><b>Sarah Jordan, CEO</b></p>
                      <p>Some company</p>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonial



