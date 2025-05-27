



import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import DonationForm from "./Components/DonationForm";
import AboutPage from "./Components/AboutPage";
import ApplicationPage from "./Components/ApplicationPage";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/donation-form" element={<DonationForm />} />
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/apply" element={<ApplicationPage />} />

    </Routes>
  );
};

export default App;



