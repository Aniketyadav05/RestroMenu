import { motion } from 'framer-motion';

const FullScreenZoomView = ({ image, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={image}
        className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
      />
    </motion.div>
  );
};

export default FullScreenZoomView;
