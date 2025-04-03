import React, { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'wouter';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const [location] = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
        // Scroll to top when navigating to a new page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400); // This should match the CSS transition time
    }
  }, [location, displayLocation]);

  // Scroll transition
  useEffect(() => {
    let prevScrollPos = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define different transition effects based on the path
  const getTransitionEffect = () => {
    // Create different effects for different pages
    if (displayLocation.includes('contact')) {
      return {
        fadeIn: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.1 
          }
        },
        fadeOut: {
          opacity: 0,
          y: 50,
          transition: { 
            duration: 0.4, 
            ease: [0.65, 0, 0.35, 1] 
          }
        }
      };
    } else if (displayLocation.includes('about')) {
      return {
        fadeIn: {
          opacity: 1,
          x: 0,
          transition: { 
            duration: 0.5, 
            ease: 'easeOut',
            when: "beforeChildren" 
          }
        },
        fadeOut: {
          opacity: 0,
          x: -50,
          transition: { 
            duration: 0.4, 
            ease: 'easeIn' 
          }
        }
      };
    } else if (displayLocation.includes('varieties')) {
      return {
        fadeIn: {
          opacity: 1,
          scale: 1,
          transition: { 
            duration: 0.5, 
            ease: [0.175, 0.885, 0.32, 1.275] 
          }
        },
        fadeOut: {
          opacity: 0,
          scale: 0.98,
          transition: { 
            duration: 0.4, 
            ease: 'easeOut' 
          }
        }
      };
    } else {
      // Default for home and other pages
      return {
        fadeIn: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.5, 
            ease: 'easeOut',
            delay: 0.1
          }
        },
        fadeOut: {
          opacity: 0,
          y: -20,
          transition: { 
            duration: 0.4, 
            ease: 'easeIn' 
          }
        }
      };
    }
  };

  const pageVariants = getTransitionEffect();

  // Staggered children animation
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={displayLocation}
        className={`transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-10 opacity-0'}`}
        initial="fadeOut"
        animate={transitionStage}
        variants={pageVariants}
        layoutId="page-container"
      >
        <motion.div 
          variants={childVariants}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}