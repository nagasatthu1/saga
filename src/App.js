import React from "react";
import CounterApp from "./components/counterApp";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Users from "./components/Users";
import EditUser from "./components/EditUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/users" element={<Users />} />
        <Route path="/editUser/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
