import { motion } from 'framer-motion'
import './About.css'
import about from '../../assets/images/about.jpg'
const About = ({ textEnter, textLeave }) => {
  return (
    <motion.div
      className="about-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="about-container">
        <div className="about-content">
          <motion.h2
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span style={{ color: '#fff' }}>About </span>
            <span className="about-me-blue">Me</span>
          </motion.h2>

          <motion.div
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am a Full Stack and GenAI Developer passionate about building intelligent, user-centric applications that combine modern web development with advanced AI capabilities. I work across frontend, backend, deep learning, computer vision, and LLM-based systems, focusing on delivering scalable, real-world solutions. With experience developing award-winning platforms, AI-powered tools, and automation systems, I bring strong problem-solving abilities and end-to-end product thinking to every project. I enjoy working with technologies like FastAPI, Neo4j Knowledge Graphs, Pinecone, LangGraph, and custom-trained models, and I’m driven by a constant desire to learn, innovate, and create seamless AI experiences that make a meaningful impact.
            </p>

          </motion.div>
        </div>

        <motion.div
          className="about-image"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img src={about} alt="Profile" className="profile-image" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About