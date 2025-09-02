// src/components/TechStack/TechStack.jsx
import React from 'react';
import './TechStack.css';
import l1 from '../assets/f8.png';
import l2 from '../assets/f7.png';
import l3 from '../assets/f2.png';
import l4 from '../assets/f3.png';
import l5 from '../assets/m2.png';
import l6 from '../assets/b5.png';
import l7 from '../assets/d2.png';
import l8 from '../assets/d3.png';
import l9 from '../assets/d5.png';
import l10 from '../assets/b1.png';
import a1 from '../assets/m5.png';
import a2 from '../assets/m4.png';  
import a3 from '../assets/b7.png';
import a4 from '../assets/m1.png';
import a5 from '../assets/b2.png';
import a6 from '../assets/f5.png';
import a7 from '../assets/d4.png';
import a8 from '../assets/d2.png';
import a9 from '../assets/b8.png';
import a10 from '../assets/m8.png';

const TechStack = () => {
  const technologies = [
    { name: "HTML5", logo: l1},
    { name: "CSS3", logo: l2 },
    { name: "Angular", logo: l3 },
    { name: "React.js", logo: l4 },
    { name: "React Native", logo: l5 },
    { name: "Node.js", logo: l6 },
    { name: "MySQL", logo: l7 },
    { name: "PostgreSQL", logo: l8 },
    { name: "MongoDB", logo: l9 },
    { name: "ASP.Net Core", logo: l10 },
    { name: "Java", logo: a1 },
    { name: "Kotlin", logo: a2 },
    { name: "Dart", logo: a3 },
    { name: "Flutter", logo: a4 },
    { name: "C#", logo: a5 },
    { name: "Bootstrap", logo: a6 },
    { name: "Oracle", logo: a7 },
    { name: "SQL", logo: a8 },
    { name: "Delphi", logo: a9 },
    { name: "Unity", logo: a10 }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section className="tech-stack">
      <div className="tech-stack-container">
       

        <div className="tech-marquee">
          <div className="tech-track">
            {duplicatedTechs.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-logo">
                  <img src={tech.logo} alt={tech.name} />
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default TechStack;