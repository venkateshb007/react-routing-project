import "./App.css";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Home";
import Employees from "./components/employees/Employees";
import Stocks from "./components/stocks/Stocks";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;