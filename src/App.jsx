import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomeHeader from './components/home/HomeHeader'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=""/>
          <Route path="/about" element=""/>
          <Route path="/product" element=""/>
          <Route path="/contact" element=""/>
      </Routes>
      </BrowserRouter>
      <HomeHeader/>
    </>
  )
}

export default App
