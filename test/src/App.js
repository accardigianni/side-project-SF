import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/navbar';
import Fighters from './components/fighters/fighters';
import Welcome from "./components/welcom/welcom";
import Contact from "./components/contact/contact";


function App() {
  return (
    <div className="App">


      <Router>
        <Navbar />
        <Routes>

          <Route path="/welcome" element={< Welcome />} />
          <Route path="/fighters" element={<Fighters />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </Router>

    </div>
  );
}

export default App;
