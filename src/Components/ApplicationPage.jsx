    import React, { useState } from 'react';
import './ApplicationPage.css';

function ApplicationPage() {
  const [faqOpenIndex, setFaqOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpenIndex(faqOpenIndex === index ? null : index);
  };

  const faqItems = [
    { question: "Who bears the delivery cost?", answer: "The buyer bears the delivery cost." },
    { question: "How long will it take to hear back?", answer: "2–3 working days." },
    { question: "Can I apply for more than one item?", answer: "Yes, you can apply for multiple." },
  ];

  return (
    <div className="container">
      <div className="form-section">
        <h2>Application</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Address" required />
          <input type="tel" placeholder="Phone number" required />
          <div className="row">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <textarea placeholder="Your skill. Ex: I am a tailor..." rows="4"></textarea>
          <button type="submit" className="apply-btn">Apply</button>
        </form>

        <div className="dropzone">
          <p>Drag & Drop Files Here</p>
          <small>Drop Images or Videos</small><br />
          <button type="button">Browse Files</button>
        </div>
      </div>

      <div className="side-panel">
        <div className="product-card">
          <img src="https://via.placeholder.com/300x200?text=Blue+Trousers" alt="Blue Trousers" />
          <div className="product-meta">
            <p>📍 Yaba, Lagos</p>
            <h3>A pair of blue trousers</h3>
            <p>Size: 32</p>
            <p>Length: LONG</p>
          </div>
        </div>

        <div className="faq">
          <h3>FAQ</h3>
          {faqItems.map((item, index) => (
            <div key={index} className="accordion-item" onClick={() => toggleFaq(index)}>
              <div>{item.question}</div>
              <div className={`accordion-answer ${faqOpenIndex === index ? 'show' : ''}`}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApplicationPage;
