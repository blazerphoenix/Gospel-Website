import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/blogo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Events", href: "/#events" },
  { label: "Music", href: "/#music" },
  {
    label: "Donate",
    href: "/#home-donate",
    dropdown: [{ label: "Online", href: "/donate" }],
  },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [loaded, setLoaded] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => setIsCompact(window.scrollY > 100);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent,
    href: string,
    hasDropdown = false
  ) => {
    if (hasDropdown) return;
    setMobileOpen(false);

    if (href.startsWith("/#")) {
      e.preventDefault();
      const anchor = href.split("#")[1];
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: isCompact ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 0.85)",
        color: "#fff",
        padding: isCompact ? "0.5rem 1rem" : "1rem 1.5rem",
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
        {/* Logo */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
            setMobileOpen(false);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: isCompact ? "40px" : "50px",
              borderRadius: "6px",
              transition: "transform 0.3s ease, height 0.4s ease",
            }}
          />
          {/* <span
            style={{
              fontSize: isCompact ? "1.5rem" : "1.8rem",
              fontFamily: "Special Gothic Expanded One, sans-serif",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "2px",
              whiteSpace: "nowrap",
            }}
          >
            Door of Deliverance
          </span> */}
        </div>

        {/* Hamburger */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.8rem",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        {/* Desktop Menu */}
        {!isMobile && (
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => item.dropdown && setExpandedDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setExpandedDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, !!item.dropdown)}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {item.label}
                </a>
                {item.dropdown && expandedDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "rgba(0,0,0,0.95)",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                    }}
                  >
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(sub.href);
                          setExpandedDropdown(null);
                        }}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          display: "block",
                          padding: "0.25rem 0",
                        }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileOpen && (
        <div
          style={{
            backgroundColor: "#111",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, !!item.dropdown)}
                style={{
                  color: "#fff",
                  fontSize: "1rem",
                  textDecoration: "none",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.label}
              </a>
              {item.dropdown && (
                <div style={{ paddingLeft: "1rem", marginTop: "0.25rem" }}>
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(sub.href);
                        setMobileOpen(false);
                      }}
                      style={{
                        display: "block",
                        color: "#bbb",
                        fontSize: "0.9rem",
                        textDecoration: "none",
                        marginTop: "0.2rem",
                      }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
