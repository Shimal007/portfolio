import { motion } from 'framer-motion'
import { useState } from 'react'
import emailjs from "@emailjs/browser";

import { FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi'
import './Contact.css'

const Contact = ({ textEnter, textLeave, buttonEnter, buttonLeave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.sendForm(
      'service_fmgkxt5', // 🔁 Replace with your EmailJS service ID
      'template_hxv9s4f', // 🔁 Replace with your EmailJS template ID
      e.target,
      'mFfnGnNe3w7LatdiI' // 🔁 Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log('Email sent successfully!', result.text)
        setIsSubmitting(false)
        setSubmitMessage('✅ Thank you for your message! I will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => {
          setSubmitMessage('')
        }, 5000)
      },
      (error) => {
        console.error('Email send error:', error.text)
        setIsSubmitting(false)
        setSubmitMessage('❌ Something went wrong. Please try again later.')
        setTimeout(() => {
          setSubmitMessage('')
        }, 5000)
      }
    )
  }

  return (
    <motion.div 
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="contact-container">
        <motion.h2 
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              onMouseEnter={buttonEnter}
              onMouseLeave={buttonLeave}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} <FiSend />
            </motion.button>

            {submitMessage && (
              <motion.div 
                className="submit-message"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}
          </motion.form>

          <motion.div 
            className="contact-info"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out if you're looking for a developer, have a question, 
              or just want to connect.
            </p>

            <div className="info-item">
              <span className="info-label">Email:</span>
              <a 
                href="mailto:shimalakmal12@gmail.com"
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
              >
                shimalakmal12@gmail.com
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span>+91 9894621913 </span>
            </div>

            <div className="social-links">
              <a 
                href="https://www.linkedin.com/in/shimal-akmal/" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://github.com/Shimal007" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <FiGithub />
              </a>
              <a 
                href="https://x.com/Shimal1545925" 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={buttonEnter}
                onMouseLeave={buttonLeave}
              >
                <FiTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact