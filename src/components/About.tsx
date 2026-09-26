import React from "react";
import "../styles/about.css";
import about from '../assets/about.jpg'
const About: React.FC = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* Image */}
        <div className="about-image-wrapper">

          <div className="about-image">
            <img
              src= {about}             alt="Luxury jewellery"
            />
          </div>

          <div className="about-image-box">
            <span>EST.</span>
            <strong>1998</strong>
          </div>

        </div>


        {/* Content */}
        <div className="about-content">

          <span className="about-label">
            OUR STORY
          </span>

          <h2>
            Jewellery That
            <br />
            Tells Your Story
          </h2>

          <p className="about-main-text">
            At Aurelia, we believe jewellery is more than
            an accessory. It is a reflection of your
            personality, your memories and the moments
            that matter most.
          </p>

          <p className="about-secondary-text">
            Every piece is thoughtfully designed and
            carefully crafted with attention to detail,
            combining timeless elegance with contemporary
            style.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <span>01</span>

              <div>
                <h3>Handcrafted</h3>
                <p>Made with attention to every detail.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>02</span>

              <div>
                <h3>Timeless</h3>
                <p>Designed to stay beautiful for years.</p>
              </div>
            </div>

          </div>

          <button className="about-button">
            DISCOVER OUR STORY
          </button>

        </div>

      </div>

    </section>
  );
};

export default About;