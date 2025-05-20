import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './view/HomePage';
import AboutPage from './view/AboutPage';
import ProductPage from './view/ProductPage';
import ContactPage from './view/ContactPage';
import PageNotFound from './components/common/PageNotFound';
import CarsDetail from './components/CarsDetail';
import ContactForm from './components/ContactForm';
import Link from './components/Link';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />}>
          <Route index element={<ContactForm />} />
          <Route path="form" element={<ContactForm />} />
          <Route path="link" element={<Link />} />
        </Route>
        <Route path="/carsdetail/:id" element={<CarsDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
