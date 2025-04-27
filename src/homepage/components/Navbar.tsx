import { useEffect, useState } from "react";
import logo from "../../assets/images/dodlogo.jpeg";
import MenuDropdown from "./MenuDropDown";

export default function Navbar() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",      // darker opaque navbar
        color: "#fff",
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transform: loaded ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.5s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo & Title (flush left) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "50px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          />
          <span
            style={{
              fontSize: "1.8rem",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
            }}
          >
            Door of Deliverance Ministries
          </span>
        </div>

        {/* Menu (flush right) */}
        <div style={{ flexShrink: 0, marginLeft: "auto" }}>
          <MenuDropdown />
        </div>
      </div>
    </nav>
  );
}
