import React from 'react'
import "./creative.css"

const Creative = () => {
  return (
    <>
        <section className="creative-section">
            <div className="container position-relative">
                <h1 className="position-absolute">Creatives</h1>
                <h2 className="text-center fw-bold">Our Team</h2>
                <div className="row pt-5 text-center gx-0">
                    <div className="col-lg-4 col-md-6 col-sm-6 p-sm-1 ps-lg-2 mt-xl-5">
                        <img src="./src/assets/images/team-1.jpg" alt="" className="img-fluid hover-left" />
                        <p>
                            <b>Muhammad Ismail</b>
                            <br />
                            Sr. Web Developer
                        </p>
                        <p>
                            Professional Experience: 8 years
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 p-sm-1 ps-lg-2 mt-xl-5">
                        <img src="./src/assets/images/team-2.jpg" alt="" className="img-fluid image-zoom" />
                        <p>
                            <b>Babar Ali Khan</b>
                            <br />
                            Sr. Web Developer & Founder CITS
                        </p>
                        <p>
                            Professional Experience: 8 years
                        </p>
                    </div>
                    <div className="col-lg-4 col-md mt-md-5 mt-lg-0 col-sm-12 mt-sm-3 ps-lg-2 mt-xl-5 text-md-center">
                        <img src="./src/assets/images/team-3.jpg" alt="" className="img-fluid hover-right" />
                        <p>
                            <b>Faisal Hayat</b>
                            <br />
                            Graphic Designer & Video Editor
                        </p>
                        <p>
                            Professional Experience: 8 years
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Creative