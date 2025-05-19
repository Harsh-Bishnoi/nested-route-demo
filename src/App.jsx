import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './view/HomePage'
import AboutPage from './view/AboutPage'
import ProductPage from './view/ProductPage'
import ContactPage from './view/ContactPage'
import PageNotFound from './components/common/PageNotFound'
import CarsDetail from './components/CarsDetail'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/carsdetail" element={<CarsDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
