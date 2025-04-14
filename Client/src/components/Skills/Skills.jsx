import { motion } from 'framer-motion';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaDatabase,
  FaCss3Alt,
  FaPython,
  FaBootstrap,
  FaJava,
} from 'react-icons/fa';

import {
  SiLangchain,
  SiDocker,
  SiTailwindcss,
  SiJsonwebtokens,
  SiRazorpay,
  SiOpenai,
  SiFlask,
  SiC,
  SiOpencv,
} from 'react-icons/si';

import './Skills.css';

const skills = [
  { name: 'JavaScript', level: 95, icon: <FaJs />, color: '#f0db4f' },
  { name: 'React', level: 90, icon: <FaReact />, color: '#61dafb' },
  { name: 'Node.js', level: 88, icon: <FaNodeJs />, color: '#68a063' },
  { name: 'Express', level: 85, icon: <FaNodeJs />, color: '#000000' },
  { name: 'MongoDB', level: 80, icon: <FaDatabase />, color: '#4DB33D' },
  { name: 'LangChain', level: 80, icon: <SiLangchain />, color: '#000000' },
  { name: 'LangGraph', level: 75, icon: <SiLangchain />, color: '#8884d8' },
  { name: 'Python', level: 85, icon: <FaPython />, color: '#3776ab' },
  { name: 'Flask', level: 80, icon: <SiFlask />, color: '#000000' },
  { name: 'Docker', level: 70, icon: <SiDocker />, color: '#2496ed' },
  { name: 'CSS', level: 90, icon: <FaCss3Alt />, color: '#2965f1' },
  { name: 'Bootstrap', level: 85, icon: <FaBootstrap />, color: '#7952b3' },
  { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss />, color: '#38b2ac' },
  { name: 'JWT Auth', level: 80, icon: <SiJsonwebtokens />, color: '#000000' },
  { name: 'Razorpay', level: 75, icon: <SiRazorpay />, color: '#0f66dc' },
  { name: 'Deep Learning', level: 70, icon: <SiOpenai />, color: '#3333cc' },
  { name: 'OpenCV', level: 80, icon: <SiOpencv />, color: '#00599C' },
  { name: 'Machine Learning', level: 75, icon: <SiOpenai />, color: '#c71610' },
  { name: 'C', level: 80, icon: <SiC />, color: '#00599C' },
  { name: 'Java', level: 85, icon: <FaJava />, color: '#007396' },
];

const Skills = ({ textEnter, textLeave }) => {
  return (
    <motion.div 
      className="skills-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="skills-container">
        <motion.h2 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3>{skill.name}</h3>
              <div className="skill-progress">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ backgroundColor: skill.color }}
                />
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
