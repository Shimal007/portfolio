import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './SectionWrapper.css';

const SectionWrapper = ({ children, id, dark, onVisible }) => {
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (onVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Debounce the callback to prevent excessive updates
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              onVisible();
            }, 100);
          }
        },
        { threshold: 0.5, rootMargin: '-80px 0px -20% 0px' } // Offset for navbar height
      );

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [id, onVisible]);

  return (
    <section
      id={id}
      className={`section-wrapper ${dark ? 'dark' : ''}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }} // Reduced amount for mobile
        className="section-container"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;