import React from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/global.css";
import "./styles/HeaderFooter.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Page Content */}
      <main style={{ minHeight: "80vh", padding: "2rem" }}>
        <h1>Welcome to Wang23 LLC</h1>
        <p>We build amazing websites for restaurants.</p>
      </main>
      <Footer />
    </>
  );
};

export default App;
