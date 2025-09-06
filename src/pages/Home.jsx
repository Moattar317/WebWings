
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';

import About from '../components/About';
import Stats from '../components/Stats';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';

import '../App.css';

function Home() {
  return (
    <div className="home">
      
      <Hero />
      <Services />
      <Process />
      
      <About />
      <Stats />
      <TechStack />
      <Testimonials />
      

    </div>
  );
}

export default Home;