import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import CarListing from "./pages/car-listing";
import Layout from "./pages/layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="listing" element={<CarListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
