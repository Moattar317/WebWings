// src/App.jsx

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';

import About from './components/About';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Process />
      
      <About />
      <Stats />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;