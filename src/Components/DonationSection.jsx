import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./DonationSection.css"; // Or use Tailwind instead

const DonationSection = () => {
  return (
    <section className="donation-section">
      <div className="donation-text">
        <h1>
          GIVE YOUR OLD <br />
          ITEMS A NEW <span className="highlight">HOME</span>
        </h1>
        <p>Give out things you don't need to people who do</p>
        <button className="donate-btn">    <Link to="/donation-form" className="donate-btn">Make a Donation</Link></button>
      </div>

      <div className="donation-images">
        <img src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Furniture" />
        <img src="https://th.bing.com/th/id/OIP.XenbpiWtkIADyTn4r44gMQHaEK?rs=1&pid=ImgDetMain" alt="Books" />
        <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" />
        <img src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="book" />
      </div>
    </section>
  );
};

export default DonationSection;
