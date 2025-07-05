// WelcomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = ['Welcome', 'नमस्ते', 'Bonjour', 'Hola'];

const WelcomeScreen = ({ isVisible }) => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < texts.length - 1) {
      const timer = setTimeout(() => setTextIndex((prev) => prev + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [textIndex]);

  const currentText = texts[textIndex];
  const fontClass =
    currentText === 'नमस्ते' ? 'font-[Hindi] text-6xl' : 'font-[Welcome] text-5xl';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 5.8 }}
          transition={{ duration: 2 }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={textIndex}
              className={`text-white  md:text-6xl font-light tracking-wide absolute ${fontClass}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {currentText}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
