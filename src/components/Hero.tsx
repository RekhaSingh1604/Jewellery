// import herobg from '../assets/prahant-studio-L3KPvPRppV4-unsplash.jpg'
const Hero = () => {
  return (
    <section className="hero"  id="home">

      {/* Background decoration */}
      <div className="hero-glow">
      </div>

      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-content">

          <p className="eyebrow">
            TIMELESS JEWELLERY
          </p>

          <h1>
            Crafted For
            <br />
            Timeless Elegance
          </h1>

          <p className="hero-description">
            Discover exquisite jewellery crafted with precision,
            passion and timeless elegance. Designed to celebrate
            every beautiful moment.
          </p>

          <div className="hero-buttons">

            <a href="#collections" className="btn btn-primary">
              Explore Collection
            </a>

            <a href="#about" className="btn btn-secondary">
              Discover More
            </a>

          </div>

          <div className="hero-bottom-text">
            <span>HANDCRAFTED</span>
            <span>•</span>
            <span>TIMELESS</span>
            <span>•</span>
            <span>AUTHENTIC</span>
          </div>

        </div>

        {/* Right Image */}
        {/* <div className="hero-image-wrapper">

          <div className="hero-image">
            <img
              src={herobg}
              alt="Luxury jewellery collection"
            />
          </div>

          <div className="image-gradient"></div>

        </div> */}

      </div>
    </section>
  );
};

export default Hero;