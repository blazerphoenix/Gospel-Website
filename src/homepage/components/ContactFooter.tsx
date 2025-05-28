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
    <footer className="contact-footer" id="contact">
      <div className="footer-left">
        <h2>Door of Deliverance Ministries</h2>
        <p>
          <FaPhoneAlt className="icon" /> +91 98765 43210
        </p>
        <p>
          <FaEnvelope className="icon" /> doorofdeliverance@gmail.com
        </p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>

      <div className="footer-center">
        <h3><br></br>Service Times</h3>
        <p>Sundays: 10:00 AM – Worship & Word</p>
        <p>Wednesdays: 7:00 PM – Bible Study</p>
        <p>Fridays: 6:30 PM – Prayer Gathering</p>
      </div>

      <div className="footer-right">
        <a
          href="https://www.facebook.com/davidjaci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/door_of_deliverance_ministries/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@davidvijayakanthofficial1463"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default ContactFooter;
