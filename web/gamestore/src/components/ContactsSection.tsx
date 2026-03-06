"use client";

import Image from "next/image";
import "./ContactsSection.css";

const ContactsSection: React.FC = () => {
  return (
    <section className="support">
      <div className="container">
        <div className="support__header">
          <h2>Need help?</h2>
          <p>Check the links below or get in touch with us using the form.</p>
        </div>
        <div className="support__cards">
          <div className="support-card">
            <div className="support-card__icon">
              <Image
                src="/assets/img/gamesupport.png"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <p>Game Support</p>
          </div>

          <div className="support-card">
            <div className="support-card__icon">
              <Image
                src="/assets/img/storesupport.png"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <p>Store Support</p>
          </div>

          <div className="support-card">
            <div className="support-card__icon">
              <Image
                src="/assets/img/jobsupport.png"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <p>Job Application Support</p>
          </div>

          <div className="support-card">
            <div className="support-card__icon">
              <Image
                src="/assets/img/gsupport.png"
                alt=""
                width={48}
                height={48}
              />
            </div>
            <p>GS Discord</p>
          </div>
        </div>

        <div className="contact">
          <h3 className="contact__title">Contact Us</h3>

          <p className="contact__subtitle">
            There are many variations of passages of Lorem Ipsum available.
          </p>

          <div className="contact__card">
            <form className="contact-form">
              <select>
                <option>General Problems</option>
                <option>Payment Issue</option>
                <option>Technical Issue</option>
              </select>

              <input type="email" placeholder="Your email" />
              <input type="text" placeholder="Your name" />
              <textarea placeholder="Describe the problem"></textarea>

              <button type="submit">Send Message</button>

              <div className="contact__success">
                Thank you for your message. We will get in touch soon by email.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
