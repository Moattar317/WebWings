// src/components/Stats/Stats.jsx
import React, { useState, useEffect, useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    {
      number: 5,
      suffix: "+",
      label: "Years of Experience",
      description: "Delivering digital excellence"
    },
    {
      number: 20,
      suffix: "+", 
      label: "Clients",
      description: "Trusted partnerships worldwide"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Support",
      description: "Always here when you need us"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ end, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime;
      const startCount = 0;

      const updateCount = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * (end - startCount) + startCount));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="stats" ref={statsRef}>
      <div className="stats-container">
        <div className="stats-content">
          <h2>Translating technology into a positive impact</h2>
          <p>Our approach allows us to deliver exceptional experiences that drive growth and success for all stakeholders.</p>
        </div>
        
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="stat-number">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="stat-label">{stat.label}</h3>
              <p className="stat-description">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;