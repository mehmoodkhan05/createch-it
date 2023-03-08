import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <>
        <section className="services-section">
            <div className="container mb-5">
                <h1 className="text-center">Services</h1>
                <h2 className="text-center">What we do</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Domain & Hosting Management</h5>
                                <p className="card-text">We are responsible for server management, backup services, 
                                    software maintenance, security, technical support and more.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Website Maintenance</h5>
                                <p className="card-text">This service includes all activities for keeping a close eye 
                                    on the website issues and fix them as they are discovered.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Website Customization.</h5>
                                <p className="card-text">We use our skills to tailor to your personal or business website, 
                                    Captivate your visitors and let your voice be heard.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Website Consultating</h5>
                                <p className="card-text">We provide comprehensive support and enhancement of web and Mobile 
                                    applications before, during and after their development.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">UI/UX Design</h5>
                                <p className="card-text">Our UI design services are aimed at creating visually appealing, 
                                    brand strengthening digital interfaces that attract and retain users.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Mobile Applications</h5>
                                <p className="card-text">Leverage our vast experience in mobile apps development to create 
                                    seamless mobile experiences your users will enjoy.
                                </p>
                                <a href="#" className="text-decoration-none">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services