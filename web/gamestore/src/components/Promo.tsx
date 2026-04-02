"use client";

// import Link from "next/link";
import "./Promo.css";
import Image from "next/image";

const Promo: React.FC = () => {
  return (
    <section className="promo">
      <div className="container promo__wrapper">
        <div className="promo__content">
          <h2>Embark On High-Stakes Missions</h2>
          <p>
            Take on high-risk, high-reward missions from the galaxys crime
            syndicates. Every choice you make influences your reputation.
          </p>

          <div className="promo__buttons">
            <button>Game Store</button>
            <button>Services</button>
            <button>Downloads</button>
          </div>
        </div>

        <div className="promo__image">
          <Image
            src="/assets/img/rn8kpl_large 2.png"
            alt=""
            width={650}
            height={490}
          />
        </div>
      </div>
    </section>
  );
};

export default Promo;
