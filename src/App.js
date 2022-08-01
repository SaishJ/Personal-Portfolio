import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      {/* <hr className="container" /> */}
      <Footer />
    </div>
  );
}

export default App;
