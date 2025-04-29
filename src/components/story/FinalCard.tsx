
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

          {/* Polaroid image */}
          <motion.div 
            className="relative mx-auto mb-8 w-64 bg-white p-3 shadow-lg" 
            style={{ 
              transform: "rotate(-3deg)",
              maxWidth: "280px" 
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/31456824-25ef-432b-b3d6-68081c947e66.png" 
              alt="Two friends together" 
              className="w-full mb-2"
            />
            <p className="text-center text-gray-800 font-handwriting text-lg pt-1 pb-3">
              2 Giga Chads
            </p>
          </motion.div>
          
          <p className="text-xl mb-4">
            Heyy boyyy,
          </p>
          
          <p className="text-xl mb-4">
            Papi chulo, it's crazy how we've known each other since reception, and I'm honestly so happy with how we've grown into who we are today. I remember when you used to harass me (you still do), and now we're the bestest of friends.
          </p>
          
          <p className="text-xl mb-4">
            But you're more than just my best friend; you're someone who's made my life brighter, sillier, and way more meaningful. Thank you for always being there. Thank you for being my best friend.
          </p>
          
          <p className="text-xl font-bold text-story-secondary mt-8">
            - Raj
          </p>
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
