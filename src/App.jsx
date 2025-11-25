import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import IndustrySection from './components/IndustrySection';
import SecuritySection from './components/SecuritySection';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Header onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <Features />
        <IndustrySection />
        <SecuritySection />
        <CTA />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
