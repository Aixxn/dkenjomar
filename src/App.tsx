import Navbar from './Navbar'
import './styles/App.css'
import About from './About';
import { HiArrowSmRight } from "react-icons/hi";
import { MdCleanHands } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <section id="home" className="home-section">
        <div className="title-card-container">
            <div className="title-card">
            <h1 className="title-card-heading">Your smile is your <span className="title-card-second-color">first impression.</span></h1>
            <p className="title-card-subheading">Explore how much easier dental care can be when everything you need is under one roof.</p>
            </div>
            <div className='buttons-container'>
                <button className="explore-button" onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}>Explore Services <HiArrowSmRight /> </button>                            
            </div>  
                
        </div>     
      </section>
      <section id="divider" className='features-section'>
        <div className='feature-header'>
            <h2 className='feature-title'>Dental Clinic for everything you need</h2>
            <p className='feature-subtitle'>Our Dental Clinic & Laboratory can grow your confidence with the perfect smile.</p>
        </div>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <FaHandsHelping />
            </div>
            <h3 className="feature-heading">Comprehensive Care</h3>
            <p className="feature-description">Complete dental solutions under one roof, from checkups to advanced treatments.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FaUserDoctor />
            </div>
            <h3 className="feature-heading">Experienced Team</h3>
            <p className="feature-description">Expert dentists delivering personalized care in a welcoming atmosphere.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <MdCleanHands />
            </div>
            <h3 className="feature-heading">Clean & Safe</h3>
            <p className="feature-description">Neat facilities with strict hygiene protocols for your safety.</p>
          </div>
        </div> 
      </section>
       <About />
    </>
    
  )
}

export default App
