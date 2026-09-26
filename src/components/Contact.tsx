import React from "react";
import type { FormEvent } from "react";
import "../styles/contact.css";

const Contact: React.FC = () => {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert("Thank you! We will contact you soon.");
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Talk
            <br />
            Jewellery
          </h2>

          <p>
            Have a question about our collection or need
            help choosing the perfect piece? We'd love to
            hear from you.
          </p>


          {/* Contact Details */}

          <div className="contact-details">

            <div className="contact-item">

              <span className="contact-icon">
                ✦
              </span>

              <div>
                <small>EMAIL</small>

                <a href="mailto:hello@aurelia.com">
                  hello@aurelia.com
                </a>
              </div>

            </div>


            <div className="contact-item">

              <span className="contact-icon">
                ✦
              </span>

              <div>
                <small>PHONE</small>

                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>

            </div>


            <div className="contact-item">

              <span className="contact-icon">
                ✦
              </span>

              <div>
                <small>STORE</small>

                <p>
                  New Delhi, India
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* Right Form */}

        <div className="contact-form-wrapper">

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

            </div>


            <div className="form-group">

              <label htmlFor="phone">
                PHONE NUMBER
              </label>

              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
              />

            </div>


            <div className="form-group">

              <label htmlFor="message">
                YOUR MESSAGE
              </label>

              <textarea
                id="message"
                rows={6}
                placeholder="Write your message..."
                required
              />

            </div>


            <button
              type="submit"
              className="contact-button"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;