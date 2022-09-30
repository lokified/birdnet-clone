import React from "react";
import "./Contact.css"
import { Form } from "../Form"
import { Footer } from "../Footer"

export const Contact = () => {

    return (
      <>
        <section className="form-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 contact-header">
                <h1>
                  Lets talk about <br /> everything!
                </h1>
                <p>
                  Hate forms? Send us an <strong>email</strong> instead. Or
                  contact us on social media.
                </p>

                <div className="contact-socials">
                  <img src="./images/twitter.svg" />
                  <img src="./images/linkedIn.svg" />
                  <img src="./images/facebook.svg" />
                </div>
              </div>
              <div className="col-md-6">
                <Form />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
}