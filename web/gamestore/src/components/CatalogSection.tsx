"use client";

import "./CatalogSection.css";
import Image from "next/image";

const CatalogSection: React.FC = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-header">
          <h2>
            <span>All</span> Items
          </h2>

          <div className="sort">
            <label>Sort by:</label>
            <select>
              <option>Default sorting</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
          </div>
        </div>

        <div className="catalog-layout">
          <aside className="filters">
            <div className="filter-block">
              <h4>Languages</h4>
              <label>
                <input type="checkbox" /> English
              </label>
              <label>
                <input type="checkbox" /> Spanish
              </label>
              <label>
                <input type="checkbox" /> German
              </label>
            </div>

            <div className="filter-block">
              <h4>Genre</h4>
              <label>
                <input type="checkbox" /> Action
              </label>
              <label>
                <input type="checkbox" /> RPG
              </label>
              <label>
                <input type="checkbox" /> Shooter
              </label>
            </div>

            <button className="reset-btn">Reset Filters</button>
          </aside>

          <div className="products-store">
            <article className="product-card-store">
              <Image
                src="/assets/img/game_6.png"
                alt=""
                width={260}
                height={340}
              />
              <div className="product-info">
                <span className="price">
                  $15.00 <del>$59.99</del>
                </span>
                <h3>Assassin’s Creed Valhalla</h3>
                <div className="platforms">
                  <span>PC</span>
                  <span>PS</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <div className="load-more">
          <button>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
