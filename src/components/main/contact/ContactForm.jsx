import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Form from "react-bootstrap/Form";

const ContactForm = () => {
    return (
        <>
            <Form className="contact-form">
                <Form.Group className="mb-xl-4 mb-lg-3">
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-xl-4 mb-lg-3">
                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        className="mb-xl-3"
                        as="textarea"
                        cols={30}
                        rows={5}
                        placeholder="Tell us about your project"
                    />
                </Form.Group>
                <button type="submit" className="contact-btn btn-w-227 btn p-2 mt-lg-3">
                    Send us
                    <HiArrowLongRight className="ms-2 contact-btn-icon" />
                </button>
            </Form>
        </>
    );
};

export default ContactForm;
