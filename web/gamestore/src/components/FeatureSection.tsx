"use client";

// import Link from "next/link";
import Image from "next/image";
import "./FeatureSection.css";

const FeatureSection: React.FC = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature">
          <div className="feature__content">
            <h2>
              Win more, <span>Save more</span>
            </h2>

            <p>
              Redeem 100 Units for a 20% discount on your purchases on the
              Ubisoft Store.
            </p>

            <button className="btn">Login / Register</button>
          </div>

          <div className="feature__media">
            <Image
              src="/assets/img/feature_1.png"
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="feature feature--reverse">
          <div className="feature__content">
            <h2>
              Careers. <span>Work with Us!</span>
            </h2>

            <p>
              Game Store not only creates fun. We know how to have it. Join our
              team.
            </p>

            <button className="btn">Apply to Job</button>
          </div>

          <div className="feature__media">
            <Image
              src="/assets/img/feature_2.png"
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>

        <hr className="divider" />

        <div className="feature">
          <div className="feature__content">
            <h2>
              New savings on <span>PlayStation Store</span>
            </h2>

            <p>Explore the latest discounts and seasonal sales.</p>

            <button className="btn">See all deals</button>
          </div>

          <div className="feature__media">
            <Image
              src="/assets/img/feature_3.png"
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
