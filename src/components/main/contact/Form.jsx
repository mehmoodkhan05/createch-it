import React from "react";

const Form = () => {
  return (
    <>
        <form className="contact-form mt-4 contact__form">
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                />
            </div>
            <div className="mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Your country"
                />
            </div>
            <div className="mb-3">
                <textarea
                    name="text"
                    className="form-control"
                    cols="30"
                    rows="5"
                    placeholder="Tell us about your project of the challenge you have"
                >
                </textarea>
            </div>
            <button type="submit" className="contact-btn p-5 py-2">
                Send us
            </button>
        </form>
    </>
  );
};

export default Form;
