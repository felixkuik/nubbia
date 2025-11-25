import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: "📚",
            title: "Ingestión de Manuales Técnicos",
            description: "Nubbia lee y comprende PDFs técnicos, planos y guías de mantenimiento para responder con precisión de ingeniero."
        },
        {
            icon: "⚙️",
            title: "Integración con ERP y SCADA",
            description: "Conecta la IA con tus sistemas de gestión para dar información en tiempo real sobre stock de repuestos o estado de maquinaria."
        },
        {
            icon: "🛡️",
            title: "Soporte 24/7 sin Alucinaciones",
            description: "Protecciones específicas para evitar respuestas erróneas. Si Nubbia no lo sabe, escala el ticket a un humano automáticamente."
        }
    ];

    return (
        <section className="features" id="soluciones">
            <div className="container">
                <h2>¿Por qué Nubbia para Industria?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
