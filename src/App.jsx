import { useState } from 'react';
import "./App.css";
import Header from './Header/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Body/Home.jsx';
import Shop from './Body/Shop.jsx';
import Blog from './Body/Blog.jsx';
import About from './Body/About.jsx';
import Contact from './Body/Contact.jsx';
import Product from './Body/Product.jsx';
import NotFound from './Components/NotFound.jsx';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path='/shop'
            element={<Shop/>}
          ></Route>
          <Route
              path='/shop/:flowerID'
              element={<Product />}
            ></Route>    
          <Route
            path='/blog'
            element={<Blog />}
          ></Route>
          <Route
            path='/about'
            element={<About />}
          ></Route>
          <Route
            path='/contact'
            element={<Contact />}
          ></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
