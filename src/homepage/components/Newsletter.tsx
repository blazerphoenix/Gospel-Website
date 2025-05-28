// import React, { useState } from "react";
// import "./Newsletter.css";
// import axios from "axios";

// const Newsletter: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await axios.post("hhttp://127.0.0.1:5000", { email }); // Correct backend URL
//       setStatus("Thanks for subscribing!");
//       setEmail("");
//     } catch (error) {
//       console.error("Subscription failed:", error);
//       setStatus("Please enter a valid email or try again later.");
//     }
//   };

//   return (
//     <section className="newsletter-section">
//       <h2>Subscribe to our Newsletter</h2>
//       <form onSubmit={handleSubmit} className="newsletter-form">
//         <input
//           type="email"
//           placeholder="Your email address"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Subscribe</button>
//       </form>
//       {status && <p className="status-message">{status}</p>}
//     </section>
//   );
// };

// export default Newsletter;
