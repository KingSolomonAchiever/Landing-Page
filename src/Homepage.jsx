

import React from "react";
import "./Homepage.css";
import img1 from "./assets/image copy 2.png";
import img5 from "./assets/image copy 3.png";
import img4 from "./assets/image copy 4.png";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Top Navigation */}
      <header className="subDiv">
        <div className="homeNav">
          <a href="#" className="home-link">
            Home
          </a>
        </div>

        <nav className="subLinks">
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <button className="loginBtn">Log In</button>
          <button className="signBtn">Sign Up</button>
        </nav>
      </header>

      {/* Category Buttons */}
      <section className="navBtn">
        {[
          "Clothing (20)",
          "Electronics (40)",
          "Furniture (21)",
          "Food (30)",
          "Toiletries (10)",
          "Books (15)",
        ].map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </section>

      {/* Goods */}
      <section className="goodsDiv">
        {[1, 2, 3].map((item, index) => (
          <div className="Cilocation-div" key={index}>
            <img src={img1} alt="product" className="Img1" />
            <div className="Cilocation">
              <CiLocationOn className="icon" />
              <p>Yaba Lagos</p>
            </div>
            <p className="product-name">A Pair of Black Shirt</p>

            <div className="size-div">
              <p>Size</p>
              <button className="info-btn">12</button>
            </div>

            <div className="lengthDiv">
              <p>Length</p>
              <button className="info-btn">120CM</button>
            </div>

            <div className="ViewDetails-Div">
              <button className="view-btn">View Details</button>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </section>

      {/* Secondary Section */}
      <section className="Second-sub-div2">
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="mini-card2">
            <img src={img4} alt="preview" className="mini-img2" />
            <div className="Cilocation2">
              <CiLocationOn className="icon2" />
              <p>Yaba Lagos</p>
              <p className="product-name2">A Pair of Black Shirt</p>

            <div className="size-div2">
              <p>Size</p>
              <button className="info-btn2">12</button>
            </div>

            <div className="lengthDiv2">
              <p>Length</p>
              <button className="info-btn2">120CM</button>
            </div>

            <div className="ViewDetails-Div2">
              <button className="view-btn2">View Details</button>
              <button className="apply-btn2">Apply</button>
            </div>
            </div>
          </div>
        ))}
      </section>
<footer className="footer">
  <div className="footer-container">
    <div className="footer-brand">
      <h2>HOPE</h2>
      <p>Giving Hope One step at a time</p>
      <div className="social-icons">
        <FaFacebookMessenger className="Iconify" />
        <FaTwitter   className="Iconify"/>
        <FaLinkedin  className="Iconify" />
      </div>
    </div>

    <div className="footer-column">
      <h2>LEARN MORE</h2>
      <p>FAQ</p>
      <p>Success Stories</p>
      <p>Supported Countries</p>
      <p>Partners</p>
    </div>

    <div className="footer-column">
      <h2>RESOURCES</h2>
      <p>Blog</p>
      <p>About</p>
      <p>Make a donation</p>
      <p>Churches</p>
    </div>

    <div className="footer-column">
      <h2>Get In Touch</h2>
      <p><CiMail /> solomonachiever5@gmail.com</p>
      <p><FaPhoneAlt /> +234 7035225984</p>
    </div>
  </div>

  <div className="footer-bottom">
    <hr />
    <p>Copyright 2025 @Hope All Rights Reserved</p>
  </div>
</footer>

    </div>
  );
};

export default HomePage;
