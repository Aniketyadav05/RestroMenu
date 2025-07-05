import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, X, Sparkles, Star, MapPin, Clock, Phone, QuoteIcon } from 'lucide-react';
import {MenuImages} from "./images"
const MenuPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample menu images - replace with actual paths
  const menuImages = [
    { id: 1, name: "Vada Pav", image: MenuImages.Menu1 },
    { id: 2, name: "Misal Pav", image: MenuImages.Menu2 },
    { id: 3, name: "Dosa", image: MenuImages.Menu3},
    { id: 4, name: "Chutneys", image: MenuImages.Menu4 },
    { id: 5, name: "Bhel Puri", image: MenuImages.Menu5 },
    { id: 6, name: "Pav Bhaji", image: MenuImages.Menu6 },
    { id: 7, name: "Pav Bhaji", image: MenuImages.Menu7 },
    { id: 8, name: "Pav Bhaji", image: MenuImages.Menu8 },
    { id: 9, name: "Pav Bhaji", image: MenuImages.Menu9 }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // slight overlap
        delayChildren: 0.3,
        ease: "easeInOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,   // lower stiffness = smoother
        damping: 14,     // more damping = less bounce
        mass: 0.5        // lighter element = more fluid
      }
    }
  };
  
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };
  

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-20 font-[Welcome]">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Free Chutney Badge */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 1 }}
        className="fixed top-4 right-4 z-50"
      >
        <motion.div
          animate={{ 
            rotate: [0, -5, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <a href="https://www.google.com/search?q=Rohit+Bhaiya+Mumbai+ka+Vada+Pav&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEtJMre0MExLSjYxNTG2MqgwSzQ1B4qYGBqnpJomG6QuYpUPys_ILFFwykjMrExU8C3NTUrMVMhOVAhLTElUCEgsAwBRkO8KSwAAAA&hl=en-GB&mat=Cer0ZjqHeiwSElcBYJahaSR1Xe6A0N7BsRrk3odgBPa2NIoxAI3elQ3xqOOoo13FYYF0lBgFiPrR3h38uAXiP0sqecFT0FPQO_VVomtEFpnuP-oHrCfPNs0_U4s8YeBTqJw&authuser=1">Visit Now</a>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative"
      >
        {/* Chef Avatar */}
        <motion.div
          variants={itemVariants}
          className="relative mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
            <ChefHat className="w-16 h-16 text-white" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <Star className="w-4 h-4 text-orange-600" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-2 font-[Hindi]">
            Rohit भैया
          </h1>
          <p className="text-xl md:text-2xl text-orange-600 font-bold font-[Hindi]">
          मुंबई Cha Vada Pav
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed flex flex-row"
        >
          <QuoteIcon className='scale-x-[-1] w-6 h-6'/><span className='font-bold'>Authentic Mumbai street food served with love</span>< QuoteIcon className="w-6 h-6"/>
        </motion.p>

        {/* Location Info */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-2 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/search?q=Rohit+Bhaiya+Mumbai+ka+Vada+Pav&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEtJMre0MExLSjYxNTG2MqgwSzQ1B4qYGBqnpJomG6QuYpUPys_ILFFwykjMrExU8C3NTUrMVMhOVAhLTElUCEgsAwBRkO8KSwAAAA&hl=en-GB&mat=Cer0ZjqHeiwSElcBYJahaSR1Xe6A0N7BsRrk3odgBPa2NIoxAI3elQ3xqOOoo13FYYF0lBgFiPrR3h38uAXiP0sqecFT0FPQO_VVomtEFpnuP-oHrCfPNs0_U4s8YeBTqJw&authuser=1" className='flex flex-row' target='_blank'>
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-sm">Raja Park ,Jaipur ,Rajasthan</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-500" />
            <span className="text-sm">10 AM - 12 AM</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-orange-500 text-sm font-medium"
        >
          Scroll to explore our menu ↓
        </motion.div>
      </motion.section>

      {/* Menu Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-2 px-6"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black text-gray-800 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Tap any dish to see it up close
          </p>
        </motion.div>

        {/* Horizontal Scrollable Menu Cards */}
        <div className="overflow-x-auto pb-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="flex gap-4 px-4 min-w-max"
          >
            {menuImages.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div
                  onClick={() => setSelectedImage(item)}
                  className="w-64 h-80 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-3xl shadow-xl cursor-pointer overflow-hidden backdrop-blur-sm border border-white/20"
                >
                  {/* Placeholder for menu image */}
                  <div className="w-full h-full bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center text-white font-bold text-xl">
                    {item.name}
                  </div>
                  
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Menu item name */}
                  <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {item.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-white/30 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-gray-800 mb-6"
          >
            Street Food, Elevated
          </motion.h2>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            From the bustling streets of Mumbai to your plate, we bring you the most authentic flavors with a modern twist. Every vada pav is made with love, every chutney crafted to perfection.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 z-[999] "
      >
        <div className="max-w-md mx-auto text-center mb-12">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-gray-800 mb-8"
          >
            Visit Us
          </motion.h2>
          <motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="flex flex-row items-center justify-center gap-3"
>
  <a
    href="https://wa.me/919928819320?text=Hello%20World"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <Phone className="w-5 h-5 text-orange-500" />
    <span className="text-gray-700">+91 99288 19320</span>
  </a>
</motion.div>

<motion.div
  initial={{ y: 50, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="flex flex-row items-center justify-center gap-3"
>
  <a
    href="https://www.google.com/search?q=Rohit+Bhaiya+Mumbai+ka+Vada+Pav"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2"
  >
    <MapPin className="w-5 h-5 text-orange-500" />
    <span className="text-sm text-gray-700">Raja Park, Jaipur, Rajasthan</span>
  </a>
</motion.div>

        </div>
      </motion.section>

      {/* Floating Order Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(249, 115, 22, 0.7)",
              "0 0 0 20px rgba(249, 115, 22, 0)",
              "0 0 0 0 rgba(249, 115, 22, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl backdrop-blur-sm"
        >
          <a href="/">Order Now 🍴</a>
        </motion.button>
      </motion.div>

      {/* Modal for Image Preview */}
      <AnimatePresence>
        {selectedImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.3, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-lg w-full"

            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              
            
                <img src={selectedImage.image} alt="" className="aspect-auto flex items-center justify-center text-white font-bold text-3xl"/>
            
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedImage.name}
                  </h3>
                  <p className="text-gray-600">
                    Authentic Mumbai street food made with love and traditional recipes.
                  </p>
                </div>
              </div>
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>
            </motion.div>
          </motion.div>
        ): null}
      </AnimatePresence>
    </div>
  );
};

export default MenuPage;