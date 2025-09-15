import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ScrollToTop from './components/ScrollToTop'; // <-- Add this import

import './App.css';
const defaultHeaderBg = "#fff"; // or your sticky color
function App() {
  const [sliderBg, setSliderBg] = useState(defaultHeaderBg);
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* <-- Add this line */}
      <div className="App">
        <Header sliderBg={sliderBg} />
        <div className='maincontent'>
          <Routes>
               <Route path="/" element={<Home setSliderBg={setSliderBg} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;