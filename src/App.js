// src/App.jsx

import Header from './components/Header';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
     <Router>
    <div className="App">
      <Header />
      <div className='maincontent'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>

      </div>
      
      <Footer />
    </div>
    </Router>
  );
}

export default App;