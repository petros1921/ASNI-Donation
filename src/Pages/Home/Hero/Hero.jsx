import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Import your real images for the big carousel
import IMG1 from '../../../assets/Images/Gallery/IMG-1.jpg';
import IMG2 from '../../../assets/Images/Gallery/IMG-2.jpg';
import IMG3 from '../../../assets/Images/Gallery/IMG-3.jpg';
import IMG4 from '../../../assets/Images/Gallery/IMG-4.jpg';

const heroImages = [IMG1, IMG2, IMG3, IMG4];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-split">
        
        {/* Left Side: Text Overlay */}
        <div className="hero-left">
          <div className="hero-content">
            <h1>Empowering students in Ethiopia to <span className="highlight">dream bigger.</span></h1>
            <p className="hero-description">
              Every contribution helps a student break the cycle of poverty. 
              We connect donors with talented students who need support to pursue their dreams.
            </p>
            
            <div className="buttons">
              <Link to="/donation" className="btn">Donate Now</Link>
              <Link to="/about" className="btn2">Learn More</Link>
            </div>

            <div className="hero-trust">
              <div className="avatars">
                <img src="https://i.pravatar.cc/100?img=1" alt="Donor" />
                <img src="https://i.pravatar.cc/100?img=2" alt="Donor" />
                <img src="https://i.pravatar.cc/100?img=3" alt="Donor" />
              </div>
              <p>Join <b>2,000+</b> monthly donors</p>
            </div>
          </div>
        </div>

        {/* Right Side: Massive Edge-to-Edge Carousel */}
        <div className="hero-right">
          {heroImages.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt="Student in Ethiopia" 
              className={`hero-bg-img ${i === index ? 'active' : ''}`} 
            />
          ))}
          
          {/* Optional: Subtle overlay to blend the image with the left side */}
          <div className="hero-image-overlay"></div>
        </div>

      </div>
    </section>
  );
}

export default Hero;