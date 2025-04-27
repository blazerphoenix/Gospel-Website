import { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function MenuDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      ref={ref}
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
          cursor: "pointer",
          padding: "0.25rem 0.5rem",
        }}
      >
        Menu
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.5rem",
            background: "#222",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            overflow: "hidden",
            zIndex: 1001,
          }}
        >
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              style={{
                display: "block",
                padding: "0.75rem 1.5rem",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                whiteSpace: "nowrap",
                transition: "background 0.2s",
              }}
              onMouseOver={e =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#333")
              }
              onMouseOut={e =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")
              }
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
