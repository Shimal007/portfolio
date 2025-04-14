import { motion } from 'framer-motion'
import './About.css'
import about from '../../assets/images/about.png'
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
            About Me
          </motion.h2>
          
          <motion.div 
            className="about-text"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
  I'm a passionate Full Stack Developer and 2nd-year student with hands-on experience building real-world applications across domains like museum ticketing systems, secure document management, and e-commerce platforms.
</p>
<p>
  I specialize in JavaScript technologies (React, Node.js, Express, MongoDB) and have worked with tools like LangChain, LangGraph, Razorpay, WebRTC, and OpenRouteService. Whether it's integrating AI-driven chatbots, building multilingual interfaces, or creating intuitive dashboards, I thrive on turning ideas into impactful solutions.
</p>
<p>
  Beyond coding, I'm always exploring new tech stacks, collaborating on hackathons, and working on innovative projects that solve real problems. When I’m not at the keyboard, I enjoy deep conversations, creative brainstorming, and diving into sci-fi concepts and tech trends.
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