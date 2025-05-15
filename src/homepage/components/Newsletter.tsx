// src/homepage/components/Newsletter.tsx
import React from "react";
import "./Newsletter.css";

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Stay Updated</h2>
        <p>Subscribe to receive the latest updates, events, and messages from Door of Deliverance Ministries.</p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
