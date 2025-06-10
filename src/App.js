import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Blog from './Pages/Blog';
import About from './Pages/About';
import Blogdet from './Pages/Blogdet';
import Contact from './Pages/Contact';
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/RLOGI" element={<Home />} />
          <Route path="/RLOGI/Blog" element={<Blog />} />
          <Route path="/RLOGI/About" element={<About />} />
          <Route path="/RLOGI/Blogdet" element={<Blogdet />} />
           <Route path="/RLOGI/Contact"  element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
