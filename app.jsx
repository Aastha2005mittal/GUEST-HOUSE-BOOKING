import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function App() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-yellow-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">King Sukh Guest House</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#Home" className="hover:text-yellow-300">Home</a>
            <a href="#About" className="hover:text-yellow-300">About</a>
            <a href="#Services" className="hover:text-yellow-300">Services</a>
            <a href="#Rooms" className="hover:text-yellow-300">Rooms</a>
            <a href="#Gallery" className="hover:text-yellow-300">Gallery</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>
          <button className="bg-white text-yellow-800 font-bold px-4 py-2 rounded hover:bg-yellow-300 transition">BOOK NOW</button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1717059515180-d8d25c9379b7?q=80')` }}>
        <div className="bg-black bg-opacity-60 h-full flex items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center text-white px-4"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience Royal Comfort</h2>
            <p className="text-lg md:text-xl mb-6">A heritage stay in the heart of Purulia</p>
            <a href="#contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg text-lg">Book Now</a>
          </motion.div>
        </div>
      </section>

      {/* Add other sections like About, Services, Rooms using same animation logic */}
    </div>
  );
}
