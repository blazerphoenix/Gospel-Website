import React from "react";
import "./ContactFooter.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactFooter: React.FC = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-left">
        <h2>Door of Deliverance Ministries</h2>
        <p>
          <FaPhoneAlt className="icon" />
          <span>+91 98765 43210</span>
        </p>
        <p>
          <FaEnvelope className="icon" />
          <span>info@dodministries.org</span>
        </p>
        <p className="copyright">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>

      <div className="footer-right">
        <a
          href="https://www.facebook.com/davidjaci/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/door_of_deliverance_ministries/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@davidvijayakanthofficial1463"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          title="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
