"use client";

import "./ErrorSection.css";

const ErrorSection: React.FC = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <h1>Page Not Found</h1>

        <p>
          Oops! This page is missing, but our games collection isnt. Dive in and
          find your next game!
        </p>

        <div className="error-code">404</div>

        <button className="btn">Go Back</button>
      </div>
    </section>
  );
};

export default ErrorSection;
