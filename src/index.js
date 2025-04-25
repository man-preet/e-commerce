import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import Products from './Pages/Products.jsx';
import ProductDetails from './Pages/ProductDetails';
import Address from './Pages/Address.jsx';
import PageNotFound from './Pages/PageNotFound.jsx';
import RazorPayPayment from './Pages/RazorPayPayment.jsx';
import Cart from './Pages/Cart.jsx';
import AllProducts from './Pages/AllProducts.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/page-not-found' element={<PageNotFound/>}/>
        <Route path='/payment' element={<RazorPayPayment/>}/>
        <Route path='/add-to-cart' element={<Cart/>}/>
        <Route path='/all-products' element={<AllProducts/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
