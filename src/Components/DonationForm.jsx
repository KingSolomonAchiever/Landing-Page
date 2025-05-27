import React, { useState } from "react";
import "./DonationForm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span>{open ? "-" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const DonationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = () => {
    const isLoggedIn = localStorage.getItem("userToken");
    if (isLoggedIn) {
      navigate("/application-page"); // Your actual route
    } else {
      alert("Please log in to continue");
      // Optionally redirect to login page or open modal
    }
  };

  return (
    <div>
  
      <button className="NextDonationBtn"><Link to="/" className="HomeBtn">Home</Link></button>
    <div className="donation-page">
    
      <div className="form-section">
        <h2>Donation Details</h2>
        <form className="donation-form">
          <input
            type="text"
            name="name"
            placeholder="Name of Item"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description of Item"
            value={formData.description}
            onChange={handleChange}
          />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Category</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Electronics">Electronics</option>
          </select>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />

          <div className="action-buttons">
            <button type="button">Donate</button>
            <button type="button">Give</button>
            <button type="button">Share</button>
          </div>

          <button type="button" className="next-btn" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>

      <div className="faq-section">
        <h3>FAQ</h3>
        <FAQItem question="How many items can I donate?" answer="As many as you want." />
        <FAQItem question="Who covers the delivery cost?" answer="The donor or platform." />
        <FAQItem question="Can I donate from anywhere?" answer="Yes, nationwide." />
        <FAQItem question="Can I donate to charities?" answer="Yes, you can." />
        <FAQItem question="Who gets the items I donate?" answer="Verified recipients." />
        <FAQItem question="What items can I donate?" answer="Clothes, books, electronics, etc." />
      </div>
     
    </div>
    </div>
  );
};

export default DonationForm;
