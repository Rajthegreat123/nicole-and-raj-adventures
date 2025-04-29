
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Choice {
  text: string;
  result: string;
  showCardButton?: boolean;
  onOpenCard?: () => void;
}

interface ChapterProps {
  number: number;
  title: string;
  scene: string;
  prompt: string;
  choices: Choice[];
  onNext: () => void;
  goBack: () => void;
  isFinal?: boolean;
}

const Chapter: React.FC<ChapterProps> = ({
  number,
  title,
  scene,
  prompt,
  choices,
  onNext,
  goBack,
  isFinal = false
}) => {
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  
  const handleChoiceClick = (index: number) => {
    setSelectedChoice(index);
  };
  
  const handleContinue = () => {
    setSelectedChoice(null);
    onNext();
  };

  const handleBack = () => {
    // Instead of going back to previous chapter, just reset the choice selection
    // to return to the prompt screen within the current chapter
    setSelectedChoice(null);
  };
  
  return (
    <div>
      <motion.h2 
        className="story-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        The Legend of Nicole
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h3 className="story-chapter">Chapter {number}: {title}</h3>
        <p className="story-text">{scene}</p>
        
        {selectedChoice === null ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="story-prompt">{prompt}</p>
            <div className="story-choices">
              {choices.map((choice, index) => (
                <motion.button
                  key={index}
                  className="story-choice-btn"
                  onClick={() => handleChoiceClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.3 }}
                >
                  {choice.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="animate-bounce-in"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="story-result">
              <p className="text-lg">{choices[selectedChoice].result}</p>
              
              {choices[selectedChoice].showCardButton && (
                <motion.button
                  className="mt-4 bg-story-secondary text-white py-2 px-6 rounded-lg font-bold transition-all hover:bg-pink-600"
                  onClick={choices[selectedChoice].onOpenCard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  Open Your Card
                </motion.button>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <motion.button 
                className="story-back-btn"
                onClick={handleBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Go Back
              </motion.button>
              
              {!isFinal && selectedChoice !== null && (
                <motion.button 
                  className="bg-story-button text-white py-2 px-6 rounded-lg font-bold transition-all hover:bg-story-button-hover"
                  onClick={handleContinue}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue to Next Chapter
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Chapter;
