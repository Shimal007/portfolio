import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import { FiAward, FiCode, FiUsers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Contact from '../components/Contact/Contact';
import SectionWrapper from '../components/SectionWrapper/SectionWrapper';
import './HomePage.css';
import csd from '../assets/images/csd_2.jpg';
import eie from '../assets/images/Eie_1.jpg';
import hack from '../assets/images/hack.jpg';
import ibm from '../assets/images/ibm.png';
import exodia from '../assets/images/exodia.png';
import ai from '../assets/images/ai.jpg';
import gender from '../assets/images/gender.jpeg';
import srcas from '../assets/images/srcas.jpg';
import cybot from '../assets/images/cybot.jpeg';
import eie1 from '../assets/images/eie1.jpeg';

const HomePage = ({
  textEnter,
  textLeave,
  buttonEnter,
  buttonLeave,
  projectEnter,
  projectLeave,
  setActiveSection,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentAchievement, setCurrentAchievement] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const achievements = [
  {
    id: 3,
    title: "IBM Gen AI Hackathon",
    prize: "1st Prize",
    project: "StudyMate - AI Study Assistant",
    description: "AI-powered learning tool with quizzes, proctoring, translation, and analytics.",
    date: "August 2025",
    image: ibm,
  },
  {
    id: 4,
    title: "SRCAS Hackathon 2.0",
    prize: "1st Prize",
    project: "LLM for Cyber Issue SOPs",
    college: "Sri Ramakrishna College of Arts and Science",
    date: "December 2025",
    image: srcas,
  },
  {
    id: 5,
    title: "Cybot Fusion’26",
    prize: "2nd Prize",
    project: "Real-Time Phishing Detection",
    college: "Kongu Engineering College",
    date: "February 2026",
    image: cybot,
  },
  {
    id: 6,
    title: "CSD 24 Hour Hackathon",
    prize: "2nd Prize",
    project: "Ayurveda E-commerce with Chatbot",
    date: "March 2025",
    image: csd,
  },
  {
    id: 1,
    title: "Hackvotrix’25 Hackathon",
    prize: "Top Position",
    project: "Semantic Segmentation for Aerial Imagery",
    description: "Classified rivers, trees, buildings, and roads from village aerial imagery.",
    date: "June 2025",
    image: hack,
  },
  {
    id: 2,
    title: "Exodia’25 Hackathon",
    prize: "1st Prize",
    project: "Face Album Matching",
    description: "Built 'Tag Me' system to find a person in group photos using a reference image.",
    date: "September 2025",
    image: exodia,
  },
  {
    id: 7,
    title: "CSI Project Expo",
    prize: "1st Prize",
    project: "Museum Ticket Chatbot",
    date: "April 2025",
    image: eie,
  },
  {
    id: 8,
    title: "Newells2K25",
    prize: "1st Prize",
    project: "AI Mock Interviewer",
    date: "October 2025",
    image: ai,
  },
  {
    id: 9,
    title: "Eareyes 2K26 ",
    prize: "1st Prize",
    project: "Paper & Project Presentation",
    date: "2026",
    image: eie1,
  },
  {
    id: 10,
    title: "GEC club Event",
    prize: "1st Prize",
    project: "Paper Presentation",
    date: "2026",
    image: gender,
  }
];
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextAchievement();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentAchievement]);

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="home-page">
      {/* existing content */}
      <SectionWrapper id="home" onVisible={() => handleSectionChange('home')}>
        <motion.div
          className="home-section-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="home-hero-content">
            <div className="home-content">
              <motion.div
                className="home-text"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h4>Hello, I'm</h4>
                <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>
                  Shimal Akmal D
                </h1>
                <div className="type-animation">
                  <TypeAnimation
                    sequence={[
                      'I am a Full Stack Developer',
                      1000,
                      'I am a AI Developer',
                      1000,
                      ' I enjoy learning things that surprise me',
                      1000,
                      'I love solving problems',
                      1000,
                    ]}
                    wrapper="h3"
                    cursor={true}
                    repeat={Infinity}
                    speed={50}
                    deletionSpeed={70}
                  />
                </div>
              </motion.div>
              <motion.div
                className="home-buttons"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.a
                  href="#contact"
                  className="btn primary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1J5_C2u246Qqsy-QcKzPxznEHxNsve2ns/view?usp=sharing"
                  className="btn secondary"
                  onMouseEnter={buttonEnter}
                  onMouseLeave={buttonLeave}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Resume
                </motion.a>
              </motion.div>
            </div>
            <div className="achievements-slider">
              <div className="carousel-container">
                <motion.button
                  onClick={prevAchievement}
                  className="slider-arrow slider-arrow-left"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous achievement"
                >
                  <FiChevronLeft />
                </motion.button>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAchievement}
                    className="achievement-card"
                    initial={{ opacity: 0, x: 100, rotateY: 20 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -100, rotateY: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="achievement-glow" />
                    <div className="achievement-image-container">
                      <img
                        src={achievements[currentAchievement].image}
                        alt={achievements[currentAchievement].title}
                        className="achievement-image"
                      />
                      <div className="achievement-overlay" />
                    </div>
                    <div className="achievement-content">
                      <div className="achievement-badge">
                        <FiAward />
                      </div>
                      <h3 className="achievement-title">
                        {achievements[currentAchievement].title}
                      </h3>
                      <p className="achievement-description">
                        {achievements[currentAchievement].description}
                      </p>
                      <div className="achievement-footer">
                        <span className="achievement-date">
                          {achievements[currentAchievement].date}
                        </span>
                        <div className="achievement-dots">
                          {achievements.map((_, index) => (
                            <span
                              key={index}
                              className={`dot ${index === currentAchievement ? 'active' : ''}`}
                              onClick={() => setCurrentAchievement(index)}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <motion.button
                  onClick={nextAchievement}
                  className="slider-arrow slider-arrow-right"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next achievement"
                >
                  <FiChevronRight />
                </motion.button>
              </div>
            </div>
          </div>
          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span>Scroll Down</span>
            <div className="arrow" />
          </motion.div>
        </motion.div>
      </SectionWrapper>

      <SectionWrapper id="about" dark onVisible={() => handleSectionChange('about')}>
        <About textEnter={textEnter} textLeave={textLeave} />
      </SectionWrapper>

      <SectionWrapper id="skills" dark onVisible={() => handleSectionChange('skills')}>
        <Skills textEnter={textEnter} textLeave={textLeave} />
      </SectionWrapper>

      <SectionWrapper id="projects" onVisible={() => handleSectionChange('projects')}>
        <Projects
          projectEnter={projectEnter}
          projectLeave={projectLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      <SectionWrapper id="resume" dark onVisible={() => handleSectionChange('resume')}>
        <Resume
          textEnter={textEnter}
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>

      <SectionWrapper id="contact" onVisible={() => handleSectionChange('contact')}>
        <Contact
          textEnter={textEnter}
          textLeave={textLeave}
          buttonEnter={buttonEnter}
          buttonLeave={buttonLeave}
        />
      </SectionWrapper>
    </div>
  );
};

export default HomePage;
