import React from "react";
import CounterApp from "./components/counterApp";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterApp />} />
      </Routes>
    </BrowserRouter>
  );
}
