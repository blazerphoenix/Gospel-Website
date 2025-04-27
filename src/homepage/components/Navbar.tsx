import logo from "../../assets/images/dodlogo.jpeg";
import MenuDropdown from "./MenuDropDown";

export default function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "transparent",
        color: "#fff",
        padding: "1rem 2rem",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Logo & Title */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: "50px" }}
          />
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "'Great Vibes', cursive",
              fontWeight: "bold",
              marginRight: "auto"
            }}
          >
            Door of Deliverance Ministries
          </div>
        </div>

        {/* Menu Dropdown pushed to the right */}
        <div style={{ marginLeft: "auto" }}>
          <MenuDropdown />
        </div>
      </div>
    </nav>
  );
}
