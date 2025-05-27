import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";



const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <button className="BtnHomeBtn"><Link to="/" className="HomeBtn">Home</Link></button>
        <h1>About Us</h1>
        <p>Empowering communities through technology, innovation, and heart.</p>
      </section>

      {/* Mission Section */}
      <section className="about-section about-mission">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            We aim to build solutions that make life easier, better, and more
            connected. Whether it's simplifying donations, creating useful apps,
            or teaching tech skills, we believe in the power of purpose-driven
            technology.
          </p>
        </div>
        <img
          src="https://th.bing.com/th/id/OIP.XenbpiWtkIADyTn4r44gMQHaEK?rs=1&pid=ImgDetMain"
          alt="Mission"
          className="about-image"
        />
      </section>

      {/* Team Section */}
      <section className="about-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          {[1, 2, 3].map((n) => (
            <div key={n} className="team-member">
              <img
                src={`https://randomuser.me/api/portraits/lego/${n}.jpg`}
                alt="Team Member"
              />
              <h3>Member {n}</h3>
              <p>Developer & Innovator</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Want to Connect?</h2>
        <p>
          Follow us on social media or reach out directly. We're always open to
          collaboration!
        </p>
        <a href="/donation-form" className="cta-button">
          Donate & Support
        </a>
      </section>
      

    </div>
  );
};

export default AboutPage;
