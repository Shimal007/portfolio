import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';
import ticketvideo from '../../assets/vedio/chennai museum.mp4';
import quiz from '../../assets/vedio/AI Quiz.mp4';
import app from '../../assets/vedio/app.mp4';
const projects = [
  {
    id: 1,
    title: 'Ticket Booking Chatbot',
    description:
      'An AI chatbot system for Chennai Museum that lets users explore exhibits, book tickets, and make payments. Built with React.js, Flask, and MongoDB, it uses LangChain with LLaMA 3 for smart, natural conversations. Razorpay handles secure payments.',
    tags: ['React.js', 'Flask', 'MongoDB', 'Razorpay', 'LangChain', 'LLaMA 3'],
    video: ticketvideo,
    github: 'https://github.com/Sanjayraj-k/TicketBookingchatbot.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
  },
  {
    id: 3,
  title: "Fitness App with User Authentication",
  description: "A mobile fitness application built with React Native, featuring user authentication via Firebase. Includes login, signup, and social login options (Google, Facebook, Apple) with a sleek UI, gradient backgrounds, and navigation between welcome, login, signup, and home screens.",
  tags: ["React Native", "Firebase", "Authentication", "Expo", "React Navigation", "Mobile App","Clerk"],
    video: quiz,
    github: 'https://github.com/jeyachandranj/Google-Form-AI.git',
    live: 'https://drive.google.com/drive/folders/13dqocupCOYRtiv6-7IjBPsy6PmxXyL9F?usp=sharing',
  }
];

const Projects = ({ projectEnter, projectLeave, buttonEnter, buttonLeave }) => {
  return (
    <motion.div
      className="projects-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="projects-container">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onMouseEnter={projectEnter}
              onMouseLeave={projectLeave}
            >
              <div className="project-image">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiGithub />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={buttonEnter}
                      onMouseLeave={buttonLeave}
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
