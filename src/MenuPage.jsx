import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, X, Sparkles, Star, MapPin, Clock, Phone, QuoteIcon } from 'lucide-react';
import {MenuImages} from "./images"
const MenuPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Sample menu images - replace with actual paths
  const menuImages = [
    { id: 1, name: "VADA PAV, SIDES & NOODLES", image: MenuImages.Menu1,logo:MenuImages.VadaPav },
    { id: 2, name: "STARTERS, RICE & WRAPS", image: MenuImages.Menu2,logo:MenuImages.Noodles },
    { id: 3, name: "SANDWICH, BURGER,FRIES & PASTA", image: MenuImages.Menu3,logo:MenuImages.Sandwich },
    { id: 4, name: "MAGGI & SOUTH INDIAN", image: MenuImages.Menu4,logo:MenuImages.Dosa },
    { id: 5, name: "PIZZA", image: MenuImages.Menu5,logo:MenuImages.Pizza },
    { id: 6, name: "HOT COFFEE, TEA & SHAKES", image: MenuImages.Menu7,logo:MenuImages.Kulhad },
    { id: 7, name: "THICK SHAKE & COLD COFFEE", image: MenuImages.Menu8,logo:MenuImages.ColdCoffee },
    { id: 8, name: "COOLERS & MOCKTAILS", image: MenuImages.Menu9 ,logo:MenuImages.Mojito},
    { id: 9, name: "SOUPS & DESSERTS", image: MenuImages.Menu6,logo:MenuImages.Desserts }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,       // slower stagger
        delayChildren: 0.4,         // more time before starting
        ease: "easeInOut"
      }
    }
  };
  
  
  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,      // lower = softer bounce
        damping: 16,        // slightly more damped
        mass: 0.6           // slightly heavier feel
      }
    }
  };
  
  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,         // slower animation
        ease: [0.25, 0.1, 0.25, 1] // custom easing (easeInOutQuad)
      }
    }
  };
  
   
  
  
  

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 overflow-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-20 font-[Welcome]">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-orange-300 to-red-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/8 left-100 w-32 h-32 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-80 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-600 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-br from-green-300 to-green-500 rounded-full blur-xl animate-pulse delay-2000"></div>
        
      </div>
      
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
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
            <img src={MenuImages.Logo} alt=""  className="w-24 h-24 text-white" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <Star className="w-4 h-4 text-yellow-600" />
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div variants={itemVariants} className="mb-2">
          <h1 className="text-4xl md:text-6xl font-black text-gray-800 mb-2 font-[Hindi]">
            Rohit भैया
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 font-bold font-[Hindi]">
          मुंबई Cha Vada Pav
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className=" text-gray-600 mb-8 max-w-lg leading-relaxed flex flex-row"
        >
          <QuoteIcon className='scale-x-[-1] w-3 h-3 md:w-6 md:h-6'/><span className='font-bold text-sm md:text-xl '>Authentic Mumbai street food served with love</span>< QuoteIcon className="w-3 h-3 md:w-6 md:h-6"/>
        </motion.p>

        {/* Location Info */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-2 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <a href="https://www.google.com/search?q=Rohit+Bhaiya+Mumbai+ka+Vada+Pav&stick=H4sIAAAAAAAA_-NgU1I1qDC2NEtJMre0MExLSjYxNTG2MqgwSzQ1B4qYGBqnpJomG6QuYpUPys_ILFFwykjMrExU8C3NTUrMVMhOVAhLTElUCEgsAwBRkO8KSwAAAA&hl=en-GB&mat=Cer0ZjqHeiwSElcBYJahaSR1Xe6A0N7BsRrk3odgBPa2NIoxAI3elQ3xqOOoo13FYYF0lBgFiPrR3h38uAXiP0sqecFT0FPQO_VVomtEFpnuP-oHrCfPNs0_U4s8YeBTqJw&authuser=1" className='flex flex-row' target='_blank'>
            <MapPin className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Raja Park ,Jaipur ,Rajasthan</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">12 PM - 12 AM</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-yellow-400 text-sm font-medium"
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
                  className="w-64 h-80 bg-gradient-to-br from-yellow-200 to-yellow-600 rounded-3xl shadow-xl cursor-pointer overflow-hidden backdrop-blur-sm border border-white/20"
                >
                  {/* Placeholder for menu image */}
                  <img src={item.logo} alt="" className='w-full h-[80%] object-contain mx-auto mt-4' />
                  <div className="w-full h-[15%] bg-gradient-to-br from-yellow-300 to-yellow-400 flex items-center justify-center text-white font-bold text-center px-2 text-base leading-tight overflow-hidden text-ellipsis break-words">
  {item.name.split(" ").length > 2 
    ? <>
        {item.name.split(" ").slice(0, 2).join(" ")}<br />
        {item.name.split(" ").slice(2).join(" ")}
      </>
    : item.name}
</div>



                  
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  
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
    <Phone className="w-5 h-5 text-yellow-500" />
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
    <MapPin className="w-5 h-5 text-yellow-500" />
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
              "0 0 0 20px rgba(249, 225, 22, 0)",
              "0 0 0 0 rgba(249, 225, 22, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl backdrop-blur-sm"
        >
          <a href="https://www.swiggy.com/menu/1156153?source=sharing" target="_blank">Order Now 🍴</a>
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
        <div className="bg-[#FFF101] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center justify-center p-4">
          <img
            src={selectedImage.image}
            alt=""
            className="max-h-[80vh] w-auto object-contain"
          />
          <h3 className="text-2xl text-center font-[Hindi] pt-4 font-bold text-gray-800 mb-2">
            {selectedImage.name}
          </h3>
        </div>

       

        {/* Close button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSelectedImage(null)}
          className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer"
        >
          <X className="w-6 h-6 text-gray-600" />
        </motion.button>
      </motion.div>
    </motion.div>
  ) : null}
</AnimatePresence>

    </div>
  );
};

export default MenuPage;