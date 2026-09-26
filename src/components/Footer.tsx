import React from "react";
import "../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <a href="#home" className="footer-logo">
            AURELIA
          </a>

          <p>
            Timeless jewellery crafted with elegance,
            passion and attention to every detail.
          </p>

          <div className="footer-socials">

            <a
              href="#"
              aria-label="Instagram"
            >
              IG
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              FB
            </a>

            <a
              href="#"
              aria-label="Pinterest"
            >
              PI
            </a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>
            EXPLORE
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#collections">
            Collections
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Collections */}
        <div className="footer-column">

          <h3>
            COLLECTIONS
          </h3>

          <a href="#">
            Rings
          </a>

          <a href="#">
            Necklaces
          </a>

          <a href="#">
            Earrings
          </a>

          <a href="#">
            Bracelets
          </a>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>
            CONTACT
          </h3>

          <p>
            New Delhi, India
          </p>

          <a href="mailto:hello@aurelia.com">
            hello@aurelia.com
          </a>

          <a href="tel:+919876543210">
            +91 98765 43210
          </a>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="footer-bottom">

        <p>
          © 2026 AURELIA JEWELLERY. All Rights Reserved.
        </p>

        <div>
          <a href="#">
            Privacy Policy
          </a>

          <a href="#">
            Terms & Conditions
          </a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;