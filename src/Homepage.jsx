


import React, { useEffect, useState } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import "./Homepage.css";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { FaFacebookMessenger, FaTwitter, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const HomePage = () => {
  const [products, setProducts] = useState([]);




const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false);
  };

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false);
  };






  // Fetch data from API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (










    
    <div className="homepage-container">
      {/* Header */}
      <header className="subDiv">
        <div className="homeNav">
          <a href="#" className="home-link">Home</a>
        </div>
        <nav className="subLinks">
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <button className="loginBtn"  onClick={toggleLogin}>Log In</button>
          <button className="signBtn" onClick={toggleSignup}>Sign Up</button>

        </nav>
      </header>
{showLogin && <Login onClose={() => setShowLogin(false)} />}

     {showSignup && <Signup  onCloseUp={() => setShowSignup(false)} />}
     

      {/* Categories */}
      <section className="navBtn">
        {["Clothing", "Electronics", "Furniture", "Food", "Toiletries", "Books"].map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </section>

      {/* Product Display */}
      <section className="goodsDiv">
        {products.slice(0, 6).map((product) => (
          <div className="Cilocation-div" key={product.id}>
            <img src={product.image} alt={product.title} className="Img1" />
            <div className="Cilocation">
              <CiLocationOn className="icon" />
              <p>Yaba Lagos</p>
            </div>
            <p className="product-name">{product.title}</p>
            <div className="size-div">
              <p>Category</p>
              <button className="info-btn">{product.category}</button>
            </div>
            <div className="lengthDiv">
              <p>Price</p>
              <button className="info-btn">${product.price}</button>
            </div>
            <div className="ViewDetails-Div">
              <button className="view-btn">View Details</button>
              <button className="apply-btn">Apply</button>
            </div>
          </div>
        ))}
      </section>

      {/* Secondary Mini Cards */}
      <section className="Second-sub-div2">
        {products.slice(6, 9).map((product) => (
          <div key={product.id} className="mini-card2">
            <img src={product.image} alt={product.title} className="mini-img2" />
            <div className="Cilocation2">
              <CiLocationOn className="icon2" />
              <p>Yaba Lagos</p>
              <p className="product-name2">{product.title}</p>
              <div className="size-div2">
                <p>Category</p>
                <button className="info-btn2">{product.category}</button>
              </div>
              <div className="lengthDiv2">
                <p>Price</p>
                <button className="info-btn2">${product.price}</button>
              </div>
              <div className="ViewDetails-Div2">
                <button className="view-btn">View Details</button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </section>



  <section className="Second-sub-div2">
        {products.slice(10, 13).map((product) => (
          <div key={product.id} className="mini-card2">
            <img src={product.image} alt={product.title} className="mini-img2" />
            <div className="Cilocation2">
              <CiLocationOn className="icon2" />
              <p>Yaba Lagos</p>
              <p className="product-name2">{product.title}</p>
              <div className="size-div2">
                <p>Category</p>
                <button className="info-btn2">{product.category}</button>
              </div>
              <div className="lengthDiv2">
                <p>Price</p>
                <button className="info-btn2">${product.price}</button>
              </div>
              <div className="ViewDetails-Div2">
                <button className="view-btn">View Details</button>
                <button className="apply-btn">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2>HOPE</h2>
            <p>Giving Hope One step at a time</p>
            <div className="social-icons">
              <FaFacebookMessenger className="Iconify" />
              <FaTwitter className="Iconify" />
              <FaLinkedin className="Iconify" />
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
