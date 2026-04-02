"use client";

// import Link from "next/link";
import "./FeaturedGames.css";
import Image from "next/image";

const FeaturedGames: React.FC = () => {
  return (
    <section className="featured">
      <div className="container">
        <header className="section-header">
          <h2>Featured Games</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </header>
        <div className="games-grid">
          <article className="game-card">
            <Image
              src="/assets/img/game_6.png"
              alt="Assassin’s Creed Valhalla"
              width={243}
              height={340}
            />
            <div className="game-info">
              <div className="price">
                <span className="new">$15.00</span>

                <span className="old">$59.99</span>
              </div>
              <h3>Assassin&apos;s Creed Valhalla</h3>
              <div className="platforms">
                <span>PC</span>
                <span>PS</span>
                <span>Xbox</span>
              </div>
            </div>
          </article>
          <article className="game-card">
            <Image
              src="/assets/img/game_4.png"
              alt="Biomutant"
              width={243}
              height={340}
            />
            <div className="game-info">
              <div className="price">
                <span className="new">$15.00</span>
                <span className="old">$59.99</span>
              </div>
              <h3>Biomutant</h3>
              <div className="platforms">
                <span>PC</span>
                <span>PS</span>
                <span>Xbox</span>
              </div>
            </div>
          </article>
          <article className="game-card">
            <Image
              src="/assets/img/game_2.png"
              alt="Far Cry 4"
              width={243}
              height={340}
            />
            <div className="game-info">
              <div className="price">
                <span className="new">$15.00</span>
                <span className="old">$59.99</span>
              </div>
              <h3>Far Cry 4</h3>
              <div className="platforms">
                <span>PC</span>
                <span>PS</span>
                <span>Xbox</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
