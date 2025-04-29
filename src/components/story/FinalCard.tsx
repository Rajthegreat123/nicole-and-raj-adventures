
import React from 'react';
import { motion } from 'framer-motion';

interface FinalCardProps {
  goBack: () => void;
}

const FinalCard: React.FC<FinalCardProps> = ({ goBack }) => {
  return (
    <div className="py-4">
      <motion.h2 
        className="story-title mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        A Special Message
      </motion.h2>
      
      <motion.div 
        className="story-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-story-primary mb-6">To My Dearest Friend</h3>
          
          <p className="text-xl mb-4">
            From Roman Ridge to today, our friendship has been one wild adventure.
          </p>
          
          <p className="text-xl mb-4">
            Through Minecraft builds never completed, and endless inside jokes,
            you've been the Raj to my Nicole – the friend who made every moment memorable.
          </p>
          
          <p className="text-xl mb-4">
            Even when I was being a bit of a bully (sorry about that),
            you saw the real me, and I'm forever grateful for your forgiveness and friendship.
          </p>
          
          <p className="text-xl font-bold text-story-secondary mt-8">
            Here's to our iconic friendship – may it continue for many more chapters to come!
          </p>
          
          <p className="mt-6 text-lg italic">With love and laughter,</p>
          <p className="text-xl font-bold">Nicole</p>
        </div>
      </motion.div>
      
      <div className="mt-6 text-center">
        <motion.button 
          className="story-back-btn"
          onClick={goBack}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back
        </motion.button>
      </div>
    </div>
  );
};

export default FinalCard;
