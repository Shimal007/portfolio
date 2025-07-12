import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ textEnter, textLeave }) => {
  const languages=[
    { name: 'Python', color: '#3776AB', icon: '🐍' },
    { name: 'Java', color: '#007396', icon: 'J' },
    { name: 'C', color: '#00599C', icon: 'C' },
    { name: 'Langchain', color: '#00599C', icon: '🔗' },
    { name: 'LangGraph', color: '#00599C', icon: 'LG' },
    { name: 'Pytessaract', color: '#00599C', icon: 'PT' },
    { name: 'Machine Learning', color: '#F05032', icon: '🤖' },
    { name: 'Deep Learning', color: '#F05032', icon: '🧠' },
    { name: 'Computer Vision', color: '#F05032', icon: 'CV' },
  ]
  const frontendTech = [
    { name: 'HTML', color: '#E34F26', icon: '🌐' },
    { name: 'CSS', color: '#1572B6', icon: '🎨' },
    { name: 'TailwindCss', color: '#F7DF1E', icon: 'TC' },
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
    {name:'Docker',color: '#181717',icon:'D'}
  ];

  // Custom TechCard with 3D tilt and sparkles
  const TechCard = ({ tech }) => {
    const cardRef = useRef(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    // 3D tilt effect
    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return; // Disable on mobile
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      setTilt({ x: rotateX, y: rotateY });
    };
    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
      setHovered(false);
    };
    const handleMouseEnter = () => {
      setHovered(true);
    };

    return (
      <motion.div
        className={`tech-card${hovered ? ' tech-card-glow' : ''}`}
        ref={cardRef}
        style={{
          transform: `rotateX(${-tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.07 : 1})`,
          transition: tilt.x === 0 && tilt.y === 0 ? 'transform 0.6s cubic-bezier(.4,2,.3,1)' : 'transform 0.18s cubic-bezier(.4,2,.3,1)',
          boxShadow: hovered ? `0 0 32px 0 ${tech.color}55, 0 8px 32px 0 #0005` : undefined,
          zIndex: hovered ? 2 : 1,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        tabIndex={0}
        aria-label={tech.name}
      >
        <div className="tech-icon" style={{ backgroundColor: tech.color }}>
          {tech.icon}
        </div>
        <span className="tech-name">{tech.name}</span>
        {/* Sparkles overlay */}
        <div className={`tech-sparkles${hovered ? ' show' : ''}`}></div>
      </motion.div>
    );
  };

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, staggerChildren: 0.1 } },
  };

  return (
    <div className="tech-showcase">
      {/* Animated background accent */}
      <div className="skills-bg-accent"></div>
      <div className="container">
        <motion.h2 
          className="section-title main-title" 
          onMouseEnter={textEnter} 
          onMouseLeave={textLeave}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Skill<span className="highlight">s</span>
        </motion.h2>
        <motion.section className="tech-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h3 className="section-title">
            Front<span>end</span>
          </h3>
          <motion.div className="tech-grid" variants={sectionVariants}>
            {frontendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="tech-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h3 className="section-title">
            Back<span>end</span>
          </h3>
          <motion.div className="tech-grid" variants={sectionVariants}>
            {backendTech.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.section>
        <motion.section className="tech-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h3 className="section-title">
            Languages & <span>AI</span>
          </h3>
          <motion.div className="tech-grid" variants={sectionVariants}>
            {languages.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section className="tech-section" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <h3 className="section-title">
            Platforms <span>& Tools</span>
          </h3>
          <motion.div className="tech-grid" variants={sectionVariants}>
            {platformsTools.map((tech, index) => (
              <TechCard key={index} tech={tech} />
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
