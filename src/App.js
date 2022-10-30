import React from "react";
import HomePage from "./components/Home/HomePage";
import "./css/style.css"
import Footer from './components/Home/Footer/Footer'
import Header from './components/Home/Header/Header'
import Product from "./components/Product/Product";
import { Route, Routes } from "react-router-dom"
import Products from "./components/Productss/Products";
import Basket from "./components/Basket/Basket";
import Login from "./components/Auth/Login/Login";
import Register from "./components/Auth/Register/Register";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:slug" element={<Products />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
