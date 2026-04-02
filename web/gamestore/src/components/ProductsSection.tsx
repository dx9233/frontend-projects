"use client";

import Image from "next/image";
import "./ProductsSection.css";

const ProductsSection: React.FC = () => {
  return (
    <section className="products-section">
      <div className="container">
        <div className="section-header">
          <h2>
            The latest <span>PlayStation accessories</span>
          </h2>
          <p>There are many variations of passages of Lorem Ipsum available.</p>
        </div>

        <div className="products">
          <div className="product-card">
            <Image
              src="/assets/img/gamepad.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Wireless Controllers</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/headset.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Gaming Audio</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/earbuds.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Wireless Earbuds</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/ps-portal.png"
              alt=""
              width={367}
              height={295}
            />
            <p>PlayStation Portal</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/access.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Access Controller</p>
          </div>

          <div className="product-card">
            <Image src="/assets/img/disc.png" alt="" width={367} height={295} />
            <p>Disc Drive for PS5</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/stand.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Vertical Stand for PS5</p>
          </div>

          <div className="product-card">
            <Image
              src="/assets/img/flight.png"
              alt=""
              width={367}
              height={295}
            />
            <p>Flight Sticks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
