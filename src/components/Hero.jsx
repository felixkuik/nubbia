
import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>Atención técnica industrial, resuelta en segundos.</h1>
                    <p>Nubbia transforma manuales técnicos complejos en respuestas instantáneas para tus clientes y operarios. IA generativa entrenada para la industria.</p>
                    <button onClick={onOpenModal} className="btn-primary">Empezar ahora &rarr;</button>
                </div>
                <div className="hero-image">
                    <div className="hero-card">
                        <div className="chat-bubble user">
                            <p><strong>Usuario:</strong> La inyectora modelo X-200 muestra error E-45 de sobrecalentamiento. ¿Qué hago?</p>
                        </div>
                        <div className="chat-bubble bot">
                            <span className="bot-label">✨ Nubbia AI</span>
                            <p>El error E-45 indica fallo en la válvula de refrigeración. <br /><br /><strong>Solución recomendada (Manual pág. 42):</strong><br />1. Verifique la presión del circuito de agua.<br />2. Si es inferior a 2 bares, abra la válvula auxiliar.<br />3. Reinicie el panel de control.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
