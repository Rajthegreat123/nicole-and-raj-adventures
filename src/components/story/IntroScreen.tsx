
import React from 'react';
import { motion } from 'framer-motion';

interface IntroScreenProps {
  onStart: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      className="story-intro"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="story-title">The Legend of Nicole</h1>
      
      <motion.div 
        className="text-lg mb-8 max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p>Welcome to a nostalgic journey through friendship, choices, and inside jokes!</p>
        <p className="mt-4">In this interactive story, you'll relive key moments of an iconic friendship, making choices that may or may not align with how things actually happened...</p>
        <p className="mt-4 font-bold text-story-primary">Are you ready to embark on this adventure?</p>
      </motion.div>
      
      <motion.button 
        className="story-start-btn"
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.3 }}
      >
        Begin Your Journey
      </motion.button>
    </motion.div>
  );
};

export default IntroScreen;
