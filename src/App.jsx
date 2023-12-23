import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/footer";
import Banner from "./components/Banner";

import "./App.css";
import ButtonUsage from "./components/button";



function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
