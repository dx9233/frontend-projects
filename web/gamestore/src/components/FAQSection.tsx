"use client";

import Image from "next/image";
import "./FAQSection.css";

const FAQSection: React.FC = () => {
  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Game Store FAQ</h2>

        <div className="faq">
          <div className="faq-item active">
            <button className="faq-question">
              Curabitur elementum tortor sed lectus semper
            </button>
            <div className="faq-answer">
              <p>
                Curabitur elementum tortor sed lectus semper, tincidunt pulvinar
                nulla cursus. Vivamus et faucibus felis.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              Duis tempus augue non iaculis feugiat.
            </button>
            <div className="faq-answer">
              <p>Hidden content...</p>
            </div>
          </div>

          <div className="faq-item">
            <button className="faq-question">
              Curabitur euismod ex a tortor bibendum euismod.
            </button>
            <div className="faq-answer">
              <p>Hidden content...</p>
            </div>
          </div>
        </div>

        <div className="faq-cta">
          <div className="faq-cta__content">
            <h3>
              <span>Find answers</span> and <br />
              contact support
            </h3>

            <p>
              Find answers and contact support by selecting an option below.
            </p>

            <button className="btn">Go to Contact Page</button>
          </div>

          <div className="faq-cta__image">
            <Image
              src="/assets/img/faq-cta.png"
              alt=""
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>

      <h2 className="section-title">Games Questions</h2>

      <div className="faq">
        <div className="faq-item active">
          <button className="faq-question">
            Curabitur elementum tortor sed lectus semper
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            Duis tempus augue non iaculis feugiat.
          </button>
          <div className="faq-answer">
            <p>Hidden content...</p>
          </div>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            Curabitur euismod ex a tortor bibendum euismod.
          </button>
          <div className="faq-answer">
            <p>Hidden content...</p>
          </div>
        </div>
      </div>
      <div className="cta-frame">
        <Image
          src="/assets/img/cta-frame.png"
          alt=""
          width={1540}
          height={700}
        />
      </div>

      <h2 className="section-title">Games Questions</h2>

      <div className="faq">
        <div className="faq-item active">
          <button className="faq-question">
            Curabitur elementum tortor sed lectus semper
          </button>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            Duis tempus augue non iaculis feugiat.
          </button>
          <div className="faq-answer">
            <p>Hidden content...</p>
          </div>
        </div>

        <div className="faq-item">
          <button className="faq-question">
            Curabitur euismod ex a tortor bibendum euismod.
          </button>
          <div className="faq-answer">
            <p>Hidden content...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
