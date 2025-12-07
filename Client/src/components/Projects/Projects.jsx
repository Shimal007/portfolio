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
    description: 'AI-powered chatbot for Chennai Museum enabling ticket booking and exhibit exploration. Built with LLaMA 3, LangChain, and React, it features secure Razorpay payments and 24/7 WhatsApp support for seamless visitor assistance.',
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
    description: 'Intelligent RAG-based learning assistant transforming PDFs and videos into interactive study materials. Features AI quiz generation, personalized study plans, and Q&A using IBM Granite 3.3, driven by FAISS retrieval and Ollama.',
    tags: ['Flask', 'React', 'Ollama', 'FAISS', 'PyMuPDF', 'RAG', 'Streamlit', 'IBM-Watson'],
    image: contentGenImg, // Using same placeholder if specific image not available, or updated if user provided relevant import. Reusing contentGenImg as placeholder or keeping original logic if undefined. 
    // Wait, the user prompt didn't strictly specify images for all new items in the JSON, but the previous file had them.
    // The previous file had `contentGenImg` for the 6th item. 
    // The user's JSON provided `ticketimg`, `fitnessimg`, `tagmeimg`, `mockimg`, `contentGenImg`.
    // StudyMate (id:2) in the user's JSON didn't have an image variable name listed in the `image:` field in the prompt text (it just said `github`, `type` etc).
    // EXCEPT, looking at the previous file content, StudyMate was already there at index 1 (id: 2), but it didn't have an `image` property in the existing code?
    // Let me check existing code...
    // Existing code id:2 has NO image property.
    // I should probably keep it consistent or use a placeholder if needed, but I'll stick to what was there or updated.
    // Actually, looking at the user's input for id:2, it also does NOT have an image property. 
    // I will adhere to the user's input structure but add the image property if it was present in the PROMPT's other items.
    // In the prompt, items 1, 3, 4, 5, 6 have images. Item 2 does NOT.
    // I will explicitly NOT add an image for item 2 to follow the input, or maybe I should use a default?
    // The React component `img src={project.image}` might break if undefined.
    // I should probably use a placeholder or one of the existing imports if safe.
    // However, the existing code for id:2 also didn't have an image.
    // Let's look at the render: `src={project.image}`. If undefined, it shows broken image.
    // I shall expect the user might have forgotten it or it's handled elsewhere?
    // Actually, looking at the previous file, id:2 did NOT have an image.
    // I will assume it's fine or user will fix. 
    // WAIT, for the LAST item (Content Generator), the user provided `image: contentGenImg`.
    // I will use that.

    // UPDATE: Users prompt for id:2:
    // params: ...
    // ...
    // tags: ...
    // github: ...
    // no image field.

    // I will proceed without image for id:2, same as existing.

    github: 'https://github.com/Shimal007/Studymate.git',
    type: 'AI Platform',
    status: 'Live',
    techCount: 6,
    icons: [FiCpu, FiCode, FiDatabase]
  },
  {
    id: 3,
    title: "Fitness App with User Authentication",
    description: "Sleek mobile fitness app built with React Native and Firebase. Features robust user authentication including Google, Facebook, and Apple social logins, wrapped in a modern, gradient-rich user interface.",
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
    description: 'Advanced AI photo manager for face detection, clustering, and semantic search using FaceNet and CLIP. Offers Drive-like storage, text-to-image search, and smart album organization in a secure, full-stack application.',
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
    description: 'Comprehensive AI recruitment platform automating hiring with ATS scoring, proctored mock interviews, and coding rounds. Features real-time face tracking, audio monitoring, and bulk candidate management for secure, efficient assessments.',
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
    description: 'MERN stack platform leveraging Google AI and Groq for generating diverse content across 18+ templates. Includes SEO optimization, code generation, and credit-based payments via Razorpay, all within a secure, analytics-driven dashboard.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Google AI', 'Razorpay'],
    image: contentGenImg,
    github: 'https://github.com/Shimal007/Ai-Content-Generator.git',
    live: 'https://scribegenai.vercel.app/',
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
