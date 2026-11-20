import { Link } from 'react-router-dom';
import './Difference.css';

// Import real images from your Gallery folder
import IMG7 from '../../../assets/Images/Gallery/IMG-7.jpg';
import IMG8 from '../../../assets/Images/Gallery/IMG-8.jpg';

function Difference() {
  return (
    <section className="container Difference">
      
      {/* Left Side: Image Collage */}
      <div className="left-side-dif">
        <div className="dif-collage-wrapper">
          <img src={IMG7} alt="Students learning" className="dif-img-main" />
          <img src={IMG8} alt="Community impact" className="dif-img-secondary" />
        </div>
      </div>

      {/* Right Side: Content */}
      <div className="right-side-dif">
        <p className="section-tag">Impact</p>
        <h2>How your donation makes a difference</h2>
        <p className="section-subtitle">
          Every contribution helps a student pursue their dreams and create lasting change in their community.
        </p>
        
        <div className="impact-list">
          <div className="impact-card">
            <span className="check-icon">✓</span>
            <p>Scholarships provided annually</p>
          </div>
          <div className="impact-card">
            <span className="check-icon">✓</span>
            <p>Students supported in higher education</p>
          </div>
          <div className="impact-card">
            <span className="check-icon">✓</span>
            <p>Communities transformed through education</p>
          </div>
        </div>

        <div className="buttons">
          <Link to="/donation" className="btn">Donate Now</Link>
          <Link to="/about" className="btn2">Learn more</Link>
        </div>
      </div>

    </section>
  );
}

export default Difference;