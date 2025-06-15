import React from 'react';
import './Skills.css';

const Skills = ({ textEnter, textLeave }) => {
  const frontendTech = [
    { name: 'HTML', color: '#E34F26', icon: '🌐' },
    { name: 'CSS', color: '#1572B6', icon: '🎨' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
    { name: 'React', color: '#61DAFB', icon: '⚛️' },
    { name: 'Bootstrap', color: '#7952B3', icon: 'B' }
  ];

  const backendTech = [
    { name: 'JavaScript', color: '#F7DF1E', icon: 'JS' },
    { name: 'Express JS', color: '#68CC00', icon: 'EX' },
    { name: 'Node.js', color: '#68A063', icon: '📗' },
    { name: 'MongoDB', color: '#47A248', icon: '🍃' },
    { name: 'SQL', color: '#00D4FF', icon: 'SQL' }
  ];

  const platformsTools = [
    { name: 'Github', color: '#181717', icon: '🐙' },
    { name: 'VS Code', color: '#007ACC', icon: '💻' },
    { name: 'Git', color: '#F05032', icon: '📊' },
    { name: 'BackStage', color: '#36BCF7', icon: '🎭' },
    { name: 'SonarCloud', color: '#F3702A', icon: '☁️' }
  ];

  const TechCard = ({ tech }) => (
    <div className="tech-card">
      <div className="tech-icon" style={{ backgroundColor: tech.color }}>
        {tech.icon}
      </div>
      <span className="tech-name">{tech.name}</span>
    </div>
  );

  return (
    <div className="tech-showcase">
      <div className="container">
        <h2 
          className="section-title main-title" 
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
        >
          Skill<span className="highlight">ss</span>
        </h2>
        <section className="tech-section">
          <h3 className="section-title">
            Front<span>end</span>
          </h3>
          <div className="tech-grid">
            {frontendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        <section className="tech-section">
          <h3 className="section-title">
            Back<span>end</span>
          </h3>
          <div className="tech-grid">
            {backendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>

        <section className="tech-section">
          <h3 className="section-title">
            Platforms <span>& Tools</span>
          </h3>
          <div className="tech-grid">
            {platformsTools.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;