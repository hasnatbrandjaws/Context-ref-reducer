import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Ref from "./components/Ref";
import ComponentOne from "./components/ComponentOne";

const App = () => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("isloggedin")) || false
  );
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route element={<ProtectedRoute isloggedin={token} />}>
          <Route path="/product/:slug" element={<ProductDetail />} />
        </Route>
        <Route path="refpractice" element={<Ref/>} />
        <Route path="/componentone" element={<ComponentOne/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
