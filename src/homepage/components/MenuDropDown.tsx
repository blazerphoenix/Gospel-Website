// src/homepage/components/MenuDropdown.tsx
import React, { useState, useRef, useEffect } from "react";

const navItems = [
  { label: "Home",    href: "#"       },  // scrolls to top
  { label: "About",   href: "#about"  },  // smooth-scroll to #about
  { label: "Events",  href: "/events" },
  { label: "Contact", href: "/contact"},
];

export default function MenuDropdown() {
  const [isHovered, setHovered] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setHovered(false);
        setClicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const open = isHovered || isClicked;

  // Handle both smooth-scroll for in-page anchors and normal navigation
  const handleClick = (e: React.MouseEvent, href: string) => {
    // Always prevent default to control behavior
    e.preventDefault();

    if (href.startsWith("#")) {
      // In-page anchor: smooth scroll
      const targetId = href.slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (targetId === "") {
        // href "#" => scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // External page: navigate
      window.location.href = href;
    }

    // Close dropdown
    setClicked(false);
    setHovered(false);
  };

  return (
    <div
      ref={ref}
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Menu Button */}
      <button
        onClick={() => setClicked(c => !c)}
        style={{
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "'Poppins', sans-serif",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.25rem 0.5rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
          <div style={{ width: "20px", height: "2px", background: "#fff" }} />
          <div style={{ width: "20px", height: "2px", background: "#fff" }} />
          <div style={{ width: "20px", height: "2px", background: "#fff" }} />
        </div>
        <span style={{ textTransform: "uppercase", letterSpacing: "1px" }}>
          Menu
        </span>
      </button>

      {/* Dropdown Panel */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "0.5rem",
            background: "#111",
            borderRadius: "4px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            overflow: "hidden",
            zIndex: 1001,
            animation: "fadeIn 0.2s ease-in-out",
          }}
        >
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={e => handleClick(e, item.href)}
              style={{
                display: "block",
                padding: "0.75rem 1.5rem",
                color: "#fff",
                textDecoration: "none",
                fontFamily: "'Poppins', sans-serif",
                transition: "background 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#333")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Fade-in keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
