import React from "react";
import "../styles/vission.css";
import visionImage from "../assets/vissionleft.jpg";

const Vission: React.FC = () => {
  return (
    <section className="vision">

      <div className="vision-container">

        {/* Left Content */}
        <div className="vision-content">
          <span className="vision-subtitle">
            OUR VISION
          </span>

          <h1>Our Vision</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iusto consequatur deserunt laborum, provident molestias
            atque maiores.
          </p>

          <button className="vision-button">
            Read More
          </button>
        </div>

        {/* Right Image */}
        <div className="vision-image">
          <img
            src={visionImage}
            alt="Our Vision"
          />
        </div>

      </div>

    </section>
  );
};

export default Vission;