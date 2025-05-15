import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './view/HomePage'
import AboutPage from './view/AboutPage'
import ProductPage from './view/ProductPage'
import ContactPage from './view/ContactPage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
