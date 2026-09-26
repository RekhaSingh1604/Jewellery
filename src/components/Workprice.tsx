import React, { useState } from "react";
import "../styles/Workprice.css";

import baslet from "../assets/work/baslet.jpg";
import baslet1 from "../assets/work/baslet1.jpg";
import Earrings from "../assets/work/Earrings.jpg";
// import braceletImage from "../assets/bracelet.jpg";
import pendantImage from "../assets/work/pendantImage.jpg";
import diamondRingImage from "../assets/work/diamondRingImage.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Diamond Ring",
    category: "Rings",
    price: 12999,
    image: baslet,
  },

  {
    id: 2,
    name: "Pearl Necklace",
    category: "Necklaces",
    price: 8999,
    image: baslet1,
  },

  {
    id: 3,
    name: "Gold Earrings",
    category: "Earrings",
    price: 6499,
    image: Earrings,
  },

  {
    id: 4,
    name: "Gold Bracelet",
    category: "Bracelets",
    price: 7499,
    image: baslet1,
  },

  {
    id: 5,
    name: "Pearl Pendant",
    category: "Pendants",
    price: 5999,
    image: pendantImage,
  },

  {
    id: 6,
    name: "Elegant Diamond Ring",
    category: "Rings",
    price: 15999,
    image: diamondRingImage,
  },

  {
    id: 7,
    name: "Classic Gold Necklace",
    category: "Necklaces",
    price: 18999,
    image: pendantImage,
  },

  {
    id: 8,
    name: "Diamond Earrings",
    category: "Earrings",
    price: 9999,
    image: Earrings,
  },

  {
    id: 9,
    name: "Luxury Bracelet",
    category: "Bracelets",
    price: 11499,
    image: baslet,
  },
];

const Workprice: React.FC = () => {
  const [visibleProducts, setVisibleProducts] = useState(3);

  const handleShowMore = () => {
    setVisibleProducts((previous) => previous + 3);
  };

  const handleShowLess = () => {
    setVisibleProducts(3);
  };

  return (
    <section className="jewellery-products">

      <div className="products-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="products-header">

          <span className="products-label">
            OUR COLLECTION
          </span>

          <h2>
            Timeless Jewellery
          </h2>

          <p>
            Discover our carefully crafted collection
            of elegant jewellery pieces.
          </p>

        </div>


        {/* =========================
            PRODUCT GRID
        ========================== */}

        <div className="products-grid">

          {products
            .slice(0, visibleProducts)
            .map((product) => (

              <article
                className="product-card"
                key={product.id}
              >

                {/* Product Image */}

                <div className="product-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                {/* Product Information */}

                <div className="product-info">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>

                  <p className="product-price">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>

                  <button className="product-button">
                    VIEW PRODUCT
                  </button>

                </div>

              </article>

            ))}

        </div>


        {/* =========================
            SHOW MORE / LESS
        ========================== */}

        <div className="products-actions">

          {visibleProducts < products.length ? (

            <button
              className="show-more-button"
              onClick={handleShowMore}
            >
              VIEW MORE
            </button>

          ) : (

            <button
              className="show-more-button"
              onClick={handleShowLess}
            >
              SHOW LESS
            </button>

          )}

        </div>

      </div>

    </section>
  );
};

export default Workprice;