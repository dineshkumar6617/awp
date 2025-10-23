import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import Eighth from "./Eighth";
import NinethA from "./NinethA";
import NinethB from "./NinethB";
import Tenth from "./Tenth";
import Eleventh from "./Eleventh";
import Twelveth from "./Tweleveth";
import Thirteen from "./Thirteen";
import Seventeen from "./Seventeen";
import Eighteen from "./Eighteen";
import Fourteen from "./Fourteen";
function Fifteen() {
  return (
      <div style={{ textAlign: "center" }}>
        <nav>
          <ol style={{ listStyle: "none", display: "flex", justifyContent: "center", gap: "20px" }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/eighth">Eighth</Link></li>
            <li><Link to="/9a">NinethA</Link></li>
            <li><Link to="/9b">NinethB</Link></li>
            <li><Link to="/tenth">Tenth</Link></li>
            <li><Link to="/eleventh">Eleventh</Link></li>
            <li><Link to="/twelveth">Tweleveth</Link></li>
            <li><Link to="/thirteen">Thirteen</Link></li>
            <li><Link to="/fourteen">Fourteen</Link></li>
            <li><Link to="/weather">Seventeen</Link></li>
            <li><Link to="/todo">Eighteen</Link></li>
          </ol>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eighth" element={<Eighth />} />
          <Route path="/9a" element={<NinethA a={5} b={10} />} />
          <Route path="/9b" element={<NinethB a={20} b={30} />} />
          <Route path="/tenth" element={<Tenth />} />
          <Route path="/eleventh" element={<Eleventh />} />
          <Route path="/twelveth" element={<Twelveth />} />
          <Route path="/thirteen" element={<Thirteen />} />
          <Route path="/fourteen" element={<Fourteen />} />
          <Route path="/weather" element={<Seventeen />} />
          <Route path="/todo" element={<Eighteen/>} />
        </Routes>
      </div>
 
  );
}

// Page components
function Home() {
  return <h1>Welcome to Home Page</h1>;
}

function Product() {
  return <h1>Welcome to Product Page</h1>;
}

function About() {
  return <h1>Welcome to About Page</h1>;
}

function Contact() {
  return <h1>Welcome to Contact Page</h1>;
}

export default Fifteen;
