import React from 'react';
import { Link } from 'react-router-dom';
import { FaBrain, FaGraduationCap, FaLanguage, FaGlobe, FaMobile, FaChartLine, FaUniversity, FaUserGraduate, FaUsers, FaChalkboardTeacher, FaClipboardCheck, FaCogs, FaRobot, FaUserCog, FaRoute, FaLayerGroup, FaDesktop } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About SmartLearnify AI</h1>
        <p className="about-tagline">The operating system for Pakistan's future classrooms</p>
      </section>

      <section className="about-essence">
        <div className="essence-card">
          <h2>🧠 What is SmartLearnify AI—In Essence?</h2>
          <p>
            SmartLearnify AI is not just educational software—it's an AGI-native educational operating system. 
            Think of it as the "operating system for Pakistan's future classrooms", powered by Arthur, 
            an artificial general intelligence agent developed using the Ava-Education™ model.
          </p>
          <p>
            It's personalized, localized, scalable, multilingual, offline-capable, and dynamically responsive 
            to each student's unique learning profile (LCP). It serves as a digital tutor, curriculum planner, 
            assessment system, and institutional insight engine—all in one.
          </p>
        </div>
      </section>

      <section className="strategic-alignment">
        <h2>🔍 Strategic Fit with HEC</h2>
        <p className="alignment-intro">
          SmartLearnify AI maps directly onto the Higher Education Commission's national priorities:
        </p>
        
        <div className="alignment-grid">
          <div className="alignment-item">
            <div className="alignment-header">
              <FaUniversity className="alignment-icon" />
              <h3>Quality Improvement</h3>
            </div>
            <ul className="alignment-features">
              <li>Adaptive learning pathways</li>
              <li>Smart diagnostics</li>
              <li>Mastery tracking</li>
              <li>Real-time AGI tutoring</li>
            </ul>
          </div>
          
          <div className="alignment-item">
            <div className="alignment-header">
              <FaGlobe className="alignment-icon" />
              <h3>Access Expansion</h3>
            </div>
            <ul className="alignment-features">
              <li>Multi-language support</li>
              <li>Offline-first mode</li>
              <li>Remote sync for rural areas</li>
            </ul>
          </div>
          
          <div className="alignment-item">
            <div className="alignment-header">
              <FaUserGraduate className="alignment-icon" />
              <h3>Inclusivity & Personalization</h3>
            </div>
            <ul className="alignment-features">
              <li>LCP engine tailoring content by:</li>
              <li>- Learner style</li>
              <li>- Learning speed</li>
              <li>- Confidence levels</li>
              <li>- Behavioral patterns</li>
            </ul>
          </div>
          
          <div className="alignment-item">
            <div className="alignment-header">
              <FaChalkboardTeacher className="alignment-icon" />
              <h3>Faculty Empowerment</h3>
            </div>
            <ul className="alignment-features">
              <li>Interactive dashboards</li>
              <li>Override tools</li>
              <li>Co-authoring with Arthur</li>
            </ul>
          </div>
          
          <div className="alignment-item">
            <div className="alignment-header">
              <FaClipboardCheck className="alignment-icon" />
              <h3>System Oversight</h3>
            </div>
            <ul className="alignment-features">
              <li>Centralized performance monitoring</li>
              <li>Compliance tools</li>
              <li>Intervention management</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="core-mechanics">
        <h2>⚙️ How It Works: The Core Mechanics</h2>
        <p className="mechanics-intro">
          SmartLearnify AI is powered by a suite of advanced AGI components working in harmony to deliver 
          a truly personalized educational experience:
        </p>
        
        <div className="mechanics-grid">
          <div className="mechanics-card">
            <div className="mechanics-header">
              <FaRobot className="mechanics-icon" />
              <h3>Arthur</h3>
            </div>
            <p className="mechanics-description">
              The AGI agent that learns about the learner and dynamically teaches via real-time diagnostics.
              Arthur adapts to each student's learning style and pace, providing personalized guidance.
            </p>
          </div>
          
          <div className="mechanics-card">
            <div className="mechanics-header">
              <FaUserCog className="mechanics-icon" />
              <h3>LCP (Learner Cognitive Profile)</h3>
            </div>
            <p className="mechanics-description">
              A constantly evolving model of each student that captures learning patterns, strengths, weaknesses, 
              and preferences to deliver tailored educational content and approaches.
            </p>
          </div>
          
          <div className="mechanics-card">
            <div className="mechanics-header">
              <FaRoute className="mechanics-icon" />
              <h3>GTP (Goal Trajectory Plan)</h3>
            </div>
            <p className="mechanics-description">
              A reverse-mapped journey from target exam to now, creating a customized learning path that 
              ensures students reach their educational goals efficiently and effectively.
            </p>
          </div>
          
          <div className="mechanics-card">
            <div className="mechanics-header">
              <FaLayerGroup className="mechanics-icon" />
              <h3>Agent Orchestration Layer</h3>
            </div>
            <p className="mechanics-description">
              Intelligently assigns AGI agents by region, subject, and campus, ensuring that the right 
              resources are allocated to provide optimal support for every learning situation.
            </p>
          </div>
          
          <div className="mechanics-card">
            <div className="mechanics-header">
              <FaDesktop className="mechanics-icon" />
              <h3>Faculty Console</h3>
            </div>
            <p className="mechanics-description">
              A control center for human-AI collaboration, enabling educators to monitor progress, 
              make adjustments, and work alongside AI to deliver the best possible educational experience.
            </p>
          </div>
        </div>
      </section>

      <section className="key-features">
        <h2>Core Capabilities</h2>
        <div className="features-grid">
          <div className="feature-item">
            <FaBrain className="feature-icon" />
            <h3>Personalized Learning</h3>
            <p>Adapts to each student's learning style, pace, and preferences to create a truly individualized educational experience.</p>
          </div>

          <div className="feature-item">
            <FaGlobe className="feature-icon" />
            <h3>Localized Approach</h3>
            <p>Custom-fit for Pakistan's educational landscape while maintaining global standards of excellence.</p>
          </div>

          <div className="feature-item">
            <FaChartLine className="feature-icon" />
            <h3>Scalable Infrastructure</h3>
            <p>Designed to grow from individual classrooms to nationwide implementation without compromising performance.</p>
          </div>

          <div className="feature-item">
            <FaLanguage className="feature-icon" />
            <h3>Multilingual Support</h3>
            <p>Communicates in multiple languages to ensure accessibility for all students across diverse linguistic backgrounds.</p>
          </div>

          <div className="feature-item">
            <FaMobile className="feature-icon" />
            <h3>Offline Capability</h3>
            <p>Functions effectively even in areas with limited internet connectivity, ensuring no student is left behind.</p>
          </div>

          <div className="feature-item">
            <FaGraduationCap className="feature-icon" />
            <h3>Learning Profile Customization</h3>
            <p>Creates and continuously updates a Learning Capability Profile (LCP) for each student to optimize their educational journey.</p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          We envision a future where every student in Pakistan has access to world-class education 
          tailored specifically to their needs, abilities, and aspirations. SmartLearnify AI is not 
          just a tool—it's a transformation of how we approach education in the digital age.
        </p>
        <div className="cta-container">
          <Link to="/dashboard" className="btn btn-primary">Experience SmartLearnify</Link>
        </div>
      </section>
    </div>
  );
};

export default About; 