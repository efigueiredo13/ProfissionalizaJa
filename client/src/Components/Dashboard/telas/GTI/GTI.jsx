import React from "react";
import "../Dashboard/dashboard.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";


const Dashboard = () =>{
    return (
        <div className="App">
          <Home />
          <About />
          <Work />
          <Testimonial />
          <Footer />
        </div>
      );
    }

export default Dashboard