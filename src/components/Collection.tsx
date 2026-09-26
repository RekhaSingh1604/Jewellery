import React from "react";
import "../styles/Collection.css";

import collection from "../assets/collection/collection1.jpg";
import collection2 from "../assets/collection/collection2.jpg";
import collection3 from "../assets/collection/collection3.jpg";

import ImageLoader from "./ImageLoader";

interface JewelleryCategory {
  id: number;
  name: string;
  image: string;
  description: string;
}

const categories: JewelleryCategory[] = [
  {
    id: 1,
    name: "Rings",
    image: collection,
    description: "Discover our rings",
  },
  {
    id: 2,
    name: "Necklaces",
    image: collection2,
    description: "Discover our necklaces",
  },
  {
    id: 3,
    name: "Bracelets",
    image: collection3,
    description: "Discover our bracelets",
  },
];

const Collection: React.FC = () => {
  return (
    <section
      className="jewellery-categories"
      id="collections"
    >
      <div className="categories-container">

        {/* Section Heading */}

        <div className="categories-header">

          <span className="section-label">
            OUR COLLECTION
          </span>

          <h2>
            Timeless Jewellery
          </h2>

          <p>
            Discover beautifully crafted pieces designed
            to become part of your story.
          </p>

        </div>


        {/* Cards */}

        <div className="category-grid">

          {categories.map((category) => (

            <article
              className="category-card"
              key={category.id}
            >

              {/* Image */}

              <div className="category-image">

                <ImageLoader
                  src={category.image}
                  alt={category.name}
                  loading="eager"
                />

              </div>


              {/* Bottom Content */}

              <div className="category-content">

                <h3>
                  {category.name}
                </h3>

                <p>
                  {category.description}
                </p>

                <button className="category-button">
                  SHOP NOW
                </button>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Collection;