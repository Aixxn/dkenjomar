import aboutImage from '../images/about.jpg';
import placeholderImage from '../images/placeholder.jpg';
import './styles/About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-label">About Us</div>
          <h2 className="about-heading">D'Kenjomar Dental Clinic & Laboratory</h2>
          <p className="about-description">
          D'Kenjomar Dental Clinic & Laboratory is committed to providing exceptional dental care with a focus on patient comfort and satisfaction.
          </p>
        </div>
        <div className="about-image-wrapper">
        <img src={aboutImage} alt="D'Kenjomar Dental Clinic" className="about-image" /> 
        </div>
        </div>
      <h2 className="about-doctors"> Meet the Orthondontists</h2>
       <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-placeholder">
                <img src={placeholderImage} alt="Dr. Marielle Sangalang" className="doctor-photo" />
              </div>
              <h4 className="doctor-name">Dr. Marielle Sangalang</h4>
              <p className="doctor-specialty">Orthodontist</p>
            </div>
            <div className="doctor-card">
              <div className="doctor-placeholder">
                <img src={placeholderImage} alt="Dr. Alvin Centeno" className="doctor-photo" />
              </div>
              <h4 className="doctor-name">Dr. Alvin Centeno</h4>
              <p className="doctor-specialty">Orthodontist</p>
            </div>
            <div className="doctor-card">
                <div className="doctor-placeholder">
                  <img src={placeholderImage} alt="Dr. Rey" className="doctor-photo" />
              </div>
              <h4 className="doctor-name">Dr. Rey</h4>
              <p className="doctor-specialty">Orthodontist</p>
            </div>
          </div>
    </section>
  );
};

export default About;