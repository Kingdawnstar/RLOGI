import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/RLOGI"  element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
