import { useEffect, useState } from "react";
import logo from "../../assets/images/dodlogo.jpeg";
import MenuDropdown from "./MenuDropDown";

export default function Navbar() {
  const [loaded, setLoaded] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: isCompact ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.85)", 
        color: "#fff",
        padding: isCompact ? "0.5rem 2rem" : "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transform: loaded ? "translateY(0)" : "translateY(-100%)",
        transition: "background-color 0.5s ease, padding 0.4s ease, transform 0.4s ease", 
        // 🌟 Added smooth background-color transition here
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
              height: isCompact ? "40px" : "50px",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "transform 0.3s ease, height 0.4s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <span
            style={{
              fontSize: isCompact ? "1.5rem" : "1.8rem",
              fontFamily: "Special Gothic Expanded One, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              whiteSpace: "nowrap",
              transition: "font-size 0.4s ease",
            }}
          >
            Door of Deliverance
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
