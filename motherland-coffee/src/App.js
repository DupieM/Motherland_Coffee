import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./componements/navbar";
import Sticker from "./Pages/Sticker/sticker";

const App = () => {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sticker/:locationName" element={<Sticker />} />
        </Routes>
      </div>
  );
};

export default App;