import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './SectionWrapper.css'

const SectionWrapper = ({ children, id, dark, onVisible }) => {
  useEffect(() => {
    if (onVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            onVisible()
          }
        },
        { threshold: 0.5 }
      )
      
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
      
      return () => {
        if (element) {
          observer.unobserve(element)
        }
      }
    }
  }, [id, onVisible])

  return (
    <section 
      id={id} 
      className={`section-wrapper ${dark ? 'dark' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper