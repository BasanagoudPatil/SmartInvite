import React from "react";
import "./HomePage.css";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">

      {/* HEADER NAVBAR */}
      <header className="navbar">
        <div className="logo">Logo Events</div>
        <nav>
          <a href="#about">About</a>
          <a href="#features">Features</a>

          {/* FIXED */}
          <Link to="/login" className="nav-link">
            Login / Register
          </Link>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Smart Invite</h1>
        <p className="description">
          Create beautiful, smart, and customizable invitations instantly.
        </p>
        <p className="features">
          AI-based designs • Multiple templates • Easy sharing
        </p>

        {/* OPTIONAL — call-to-action button */}
        <button className="cta-btn" onClick={() => navigate("/register")}>
          Get Started
        </button>
      </section>

      {/* IMAGE SLIDER SECTION */}
      <section className="image-slider">
        <div className="slider-container">
          <img src="/images/Birthday.jpg" className="slide-img" alt="img1" />
          <img src="/images/Anniversary.jpg" className="slide-img" alt="img2" />
          <img src="/images/Wedding.jpg" className="slide-img" alt="img3" />
        </div>
      </section>

      {/* OVERLAPPING IMAGES */}
      <section className="overlap-section">
        <div className="overlap-container">
          <img src="/images/Birthday.jpg" className="overlap-img front" />
          <img src="/images/Anniversary.jpg" className="overlap-img middle" />
          <img src="/images/Wedding.jpg" className="overlap-img back" />
        </div>
        <p className="shadow-text">
          Based on image I want a shadow or orange sunlight
        </p>
      </section>

    </div>
  );
};

export default HomePage;
