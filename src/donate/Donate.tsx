import React, { useEffect, useState } from "react";
import Navbar from "../homepage/components/Navbar"; // ✅ Import the Navbar
import qrCode from "../assets/images/fam.jpeg"; // Replace with your QR code image
import gpayIcon from "../assets/images/gpay.png";
import paytmIcon from "../assets/images/paytm.jpeg";
import phonepeIcon from "../assets/images/phonepe.png";
import "./DonatePage.css";

const DonatePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
  }, []);

  const upiID = "dhanapaljeni@okaxis";
  const upiUrl = `upi://pay?pa=${upiID}&pn=DoorOfDeliverance&cu=INR`;

  return (
    <>
      <Navbar /> {/* ✅ Navbar added at the top */}

      <section id="donate" className="donate-page">
        <div className="donate-overlay" />
        <div className="donate-orb" />

        <div className="donate-content">
          <h1 className="donate-title">Donate to Our Mission</h1>
          <div className="donate-divider" />
          <p className="donate-text">
            Your gift helps us spread hope, faith, and transformation across our community.
            {isMobile
              ? " Tap a button below to give via your UPI app."
              : " Scan the QR code or use the UPI ID to donate securely."}
          </p>

          {isMobile ? (
            <div className="donate-icon-buttons">
              <a href={upiUrl} className="upi-icon" title="Pay via GPay">
                <img src={gpayIcon} alt="Google Pay" />
              </a>
              <a href={upiUrl} className="upi-icon" title="Pay via Paytm">
                <img src={paytmIcon} alt="Paytm" />
              </a>
              <a href={upiUrl} className="upi-icon" title="Pay via PhonePe">
                <img src={phonepeIcon} alt="PhonePe" />
              </a>
            </div>
          ) : (
            <div className="donate-qr-container">
              <img src={qrCode} alt="UPI QR Code" className="donate-qr" />
              <p className="donate-upi"><strong>UPI ID:</strong> {upiID}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DonatePage;
