import React, { useEffect, useState } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import Form from "react-bootstrap/Form";
import axios from "axios";

const ContactForm = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("https://restcountries.com/v2/all");
                const countryNames = response.data.map((country) => country.name);
                countryNames.sort();
                setCountries(countryNames);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Form className="contact-form">
                <Form.Group className="mb-xl-4 mb-lg-3">
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Select className="mb-xl-4 mb-lg-3 form-select">
                    <option value="" hidden>Your country</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </Form.Select>

                <Form.Control
                    className="mb-xl-3"
                    as="textarea"
                    cols={30}
                    rows={5}
                    placeholder="Tell us about your project"
                />

                <button type="submit" className="contact-btn btn-w-227 btn p-2 mt-lg-3">
                    Send us
                    <HiArrowLongRight className="ms-2 contact-btn-icon" />
                </button>
            </Form>
        </>
    );
};

export default ContactForm;
