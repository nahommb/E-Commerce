// components/transition/page_transition.js
import { motion } from 'framer-motion';

export const PageTranstion = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10}}    // Starting point for fade in
      animate={{ opacity: 1, y: 0 }}     // Where it ends on entering
      exit={{ opacity: 0, y: -20 }}       // Where it goes on exiting
      transition={{ duration: 0.6 }}      // Transition duration
    >
      {children}
    </motion.div>
  );
};
