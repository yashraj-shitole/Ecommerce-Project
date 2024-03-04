import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import ProductDetailsPage from './Components/ProductDetailsPage.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>

   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
    </Router>

    
  </React.StrictMode>,
)
