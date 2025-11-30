import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiSmartphone, FiGlobe, FiCpu } from 'react-icons/fi';
import './Projects.css';
import ticketimg from '../../assets/images/chennai.png';
import fitnessimg from '../../assets/images/fitnessapp.jpg';
import tagmeimg from '../../assets/images/tagmenow.png';
import mockimg from '../../assets/images/mockinterview.png';
import contentGenImg from '../../assets/images/scribe.png';
const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description: 'Designed for the Chennai Museum, this AI‑powered chatbot enables visitors to explore exhibits, book tickets, and complete secure payments seamlessly. Leveraging React.js for the front‑end, Flask and MongoDB for the back‑end, and LangChain with LLaMA 3 for advanced natural‑language understanding, the system delivers intelligent, context‑aware conversations. Integrated with Razorpay for reliable payment processing and offering 24/7 WhatsApp support, the chatbot ensures a smooth, round‑the‑clock visitor experience.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3', 'Meta Developer'],
    image: ticketimg,
    github: 'https://github.com/Shimal007/TicketBookingBot.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
    type: 'AI Chatbot',
    status: 'Live',
    techCount: 6,
    icons: [FiCode, FiDatabase, FiGlobe]
  },
  {
    id: 2,
    title: 'StudyMate - AI Learning Assistant',
    description: 'An intelligent RAG-based study companion built with Flask, React, and Ollama that transforms learning from documents and videos. Features PDF text extraction with PyMuPDF, audio transcription using SpeechRecognition, and YouTube transcript processing for multi-format content analysis. Utilizes SentenceTransformers for semantic embeddings and FAISS for efficient vector similarity search to retrieve contextually relevant information. Includes AI-powered quiz generation with customizable difficulty levels and automated grading with explanations, personalized study plan creation (1-30 days) with daily task breakdowns and time estimates, and conversational Q&A using IBM Granite 3.3 model via Ollama. With semantic chunking for context preservation, retry mechanisms for robust JSON parsing, and comprehensive error handling, it delivers a complete end-to-end learning ecosystem.',
    tags: ['Flask', 'React', 'Ollama', 'FAISS', 'PyMuPDF', 'RAG', 'Streamlit', 'IBM-Watson'],
    github: 'https://github.com/Shimal007/Studymate.git', // Replace with actual link
    type: 'AI Platform',
    status: 'Live',
    techCount: 6,
    icons: [FiCpu, FiCode, FiDatabase]
  },
  {
    id: 3,
    title: "Fitness App with User Authentication",
    description: "A mobile fitness application built with React Native, featuring user authentication via Firebase. Includes login, signup, and social login options (Google, Facebook, Apple) with a sleek UI, gradient backgrounds, and navigation between welcome, login, signup, and home screens.",
    tags: ["React Native", "Firebase", "Authentication", "Expo", "React Navigation", "Mobile App", "Clerk"],
    image: fitnessimg,
    github: 'https://github.com/Sanjayraj-k/Fitness_app.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
    type: 'Mobile App',
    status: 'Live',
    techCount: 7,
    icons: [FiSmartphone, FiCode, FiDatabase]
  },
  {
    id: 4,
    title: 'TagMeNow — AI Face Matching & Tagging System',
    description: 'An AI-powered photo management platform that lets users upload images, detect and extract faces, cluster people, tag individuals, and search for matching photos using FaceNet, MTCNN, and CLIP-based vision search. It supports solo-photo face matching, dataset-wide clustering, text-to-image search, and advanced filters such as face-count detection and single/duo/group photo identification. The system includes secure authentication, a personal album, Drive-like storage with extension-ready access, ZIP downloads, and highlighted match previews—built end-to-end with React.js, Flask, MongoDB, and PyTorch.',
    tags: ['React.js', 'Tailwind CSS', 'MongoDB', 'FaceNet', 'MSTN', 'Deep Learning', 'Mtcnn', 'Flask', 'Pytorch', 'Clip'],
    image: tagmeimg,
    github: 'https://github.com/Shimal007/TagMe.git',
    live: 'https://drive.google.com/file/d/1XIlywq9LTnZuituBOOZfZtpAx55ZMZFo/view?usp=sharing',
    type: 'AI Web App',
    status: 'Live',
    techCount: 7,
    icons: [FiCpu, FiGlobe, FiCode]
  },
  {
    id: 5,
    title: 'AI-Powered Mock Interview Platform',
    description: 'An AI-powered recruitment and assessment platform built with React.js, Flask, and MongoDB that automates hiring and improves the candidate journey. It features HR authentication, role creation, bulk student onboarding, ATS scoring, aptitude quizzes, coding rounds, and an integrated AI assistant. The system supports company profile scraping and provides a unified learning and testing ecosystem. Candidates undergo face-based identity verification with real-time proctoring—face tracking, audio monitoring, and tab-switch detection—for secure exams. With webcam-enabled forms, practice quizzes, multi-round interviews, automated scoring, and seamless dashboard navigation, it delivers a complete end-to-end hiring solution.',
    tags: ['React.js', 'Flask', 'MongoDB', 'LLM', 'OpenCV', 'Docker'],
    image: mockimg,
    github: 'https://github.com/Shimal007/Mock-Interview.git',
    live: 'https://drive.google.com/file/d/1Hn26j3s6h4LLm7kP9DlGu4wQhq4liof5/view?usp=sharing',
    type: 'AI Platform',
    status: 'Live',
    techCount: 6,
    icons: [FiCpu, FiCode, FiDatabase]
  },
  {
    id: 6,
    title: 'AI Content Generator Platform',
    description: 'A comprehensive AI-powered content creation platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that transforms content generation using Google Generative AI and Groq SDK. It features 18 specialized templates including blog creation, YouTube SEO optimization, Instagram content generation, code writing/explanation, and image language translation. The system includes secure JWT and Google OAuth authentication, credit-based usage with Razorpay payment integration, real-time diff visualization for text improvements, and an integrated Toast UI markdown editor. With content history tracking, analytics dashboard, cover letter generation with resume upload, AI flowchart creator, and automated SEO optimization, it delivers a complete end-to-end content creation solution for marketers, developers, and content creators.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Google AI', 'Razorpay'],
    image: contentGenImg, // Replace with your project image variable
    github: 'https://github.com/Shimal007/Ai-Content-Generator.git', // Replace with actual link
    live: 'https://scribegenai.vercel.app/', // Replace with actual deployment link
    type: 'AI Platform',
    status: 'Live',
    techCount: 6,
    icons: [FiCpu, FiCode, FiDatabase]
  }


];

const Projects = ({ projectEnter, projectLeave, buttonEnter, buttonLeave }) => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredTag, setHoveredTag] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleProjects(prev => prev + 2);
      setLoading(false);
    }, 500);
  };

  const handleVideoError = (e) => {
    console.log('Video failed to load:', e.target.src);
    e.target.style.display = 'none';
  };

  const handleVideoLoad = (e) => {
    if (!isMobile) {
      const playPromise = e.target.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented:', error);
        });
      }
    }
  };

  // Enhanced animation variants for project cards
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotateX: -15
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }),
    hover: {
      y: -20,
      scale: 1.05,
      rotateY: 5,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 300
      }
    }
  };

  // Animation variants for tech stack tags
  const tagVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      rotateX: -90
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      rotateY: 10,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 300
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  // Animation variants for project content
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <div
      className="projects-section"
    >
      <div className="projects-bg-particles"></div>
      <div className="projects-container">
        <motion.h2
          onMouseEnter={projectEnter}
          onMouseLeave={projectLeave}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.slice(0, isMobile ? visibleProjects : projects.length).map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => {
                setHoveredCard(project.id);
                projectEnter();
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                projectLeave();
              }}
              layout
            >
              <div className="project-image">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', backgroundColor: '#1a1a1a' }}
                />

                {/* Project Type Indicator */}
                <div className="project-type">
                  {project.type}
                </div>

                {/* Status Indicator */}
                <div className="project-status">
                  <div className="status-dot"></div>
                  <span className="status-text">{project.status}</span>
                </div>

                {/* Tech Stack Preview */}
                <div className="tech-preview">
                  {[...Array(Math.min(project.techCount, 3))].map((_, i) => (
                    <div key={i} className="tech-dot"></div>
                  ))}
                </div>

                {/* Floating Icons */}
                <div className="floating-icons">
                  {project.icons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      className="floating-icon"
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon />
                    </motion.div>
                  ))}
                </div>

                {/* Remove mobile placeholder for mobile view */}
                <motion.div
                  className="project-overlay"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="project-links"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiGithub />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.3 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiExternalLink />
                    </motion.a>
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                className="project-content"
                variants={contentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  className="project-tags"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      custom={tagIndex}
                      variants={tagVariants}
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setHoveredTag(tag)}
                      onHoverEnd={() => setHoveredTag(null)}
                      className={`project-tag ${hoveredTag === tag ? 'tag-glow' : ''}`}
                      style={{
                        background: `linear-gradient(135deg, 
                          rgba(102, 126, 234, 0.2) 0%, 
                          rgba(118, 75, 162, 0.2) 100%)`,
                        border: `1px solid ${hoveredTag === tag ? 'rgba(102, 126, 234, 0.8)' : 'rgba(102, 126, 234, 0.4)'}`,
                        boxShadow: hoveredTag === tag
                          ? '0 0 25px rgba(102, 126, 234, 0.5), 0 0 50px rgba(118, 75, 162, 0.3)'
                          : 'none'
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {isMobile && visibleProjects < projects.length && (
          <motion.div
            className="load-more-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="load-more-btn"
              onClick={loadMore}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
            >
              Load More Projects
              {loading && <span className="loading-spinner"></span>}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
