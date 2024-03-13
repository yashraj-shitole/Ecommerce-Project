import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './Components/ProductDetailsPage.jsx'
import Search from './Components/Search.jsx'
import Footer from './Components/Footer.jsx'
import Cart from './Components/Cart.jsx'
import LikedProducts from './Components/LikedProducts.jsx'
import Profile from './Components/Profile.jsx'
import ProductsPage from './Components/ProductsPage.jsx'
import Layout from './Components/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

    <Routes>
        <Route path="" element={<Layout/>}>
          <Route path="/" element={<ProductsPage/>}/>
        
      <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/likedproducts" element={<LikedProducts/>}/>
        <Route path="/profile" element={<Profile/>}/>
        </Route>
    </Routes>
    </Router>

    
  </React.StrictMode>,
)
