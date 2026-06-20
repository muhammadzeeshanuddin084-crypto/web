import React from "react";
import "./App.css";

function App() {

  const services = [
    {
      title: "Web Development",
      description:
        "Responsive and modern websites built with latest technologies."
    },
    {
      title: "UI / UX Design",
      description:
        "Clean and user-friendly interfaces for better engagement."
    },
    {
      title: "React Development",
      description:
        "Fast and scalable web applications using React."
    }
  ];

  return (
    <>

      {/* Navbar */}

      <nav className="navbar">

        <div className="logo">
          TEYZIX CORE
        </div>

        <ul className="nav-links">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      </nav>

      {/* Hero Section */}

      <section
        id="home"
        className="hero"
      >

        <div className="hero-content">

          <h1>
            Build Powerful Digital Solutions
          </h1>

          <p>
            Modern UI/UX Design,
            React Development,
            and Innovative Technology Solutions.
          </p>

          <button className="hero-btn">
            Get Started
          </button>

        </div>

      </section>

      {/* Services */}

      <section
        id="services"
        className="services"
      >

        <h2>
          Our Services
        </h2>

        <div className="service-grid">

          {services.map((service, index) => (

            <div
              className="card"
              key={index}
            >

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* About */}

      <section
        id="about"
        className="about"
      >

        <h2>
          About TEYZIX CORE
        </h2>

        <p>

          We help businesses create
          modern digital experiences
          through web development,
          design, and technology
          solutions.

        </p>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h3>50+</h3>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h3>30+</h3>
          <p>Clients</p>
        </div>

        <div className="stat-box">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>

      </section>

      {/* Contact */}

      <section
        id="contact"
        className="contact"
      >

        <h2>
          Contact Us
        </h2>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>

      {/* Footer */}

      <footer>

        <p>
          © 2026 TEYZIX CORE.
          All Rights Reserved.
        </p>

      </footer>

    </>
  );
