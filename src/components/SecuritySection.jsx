import React from 'react';
import './SecuritySection.css';

const SecuritySection = () => {
    return (
        <section className="security-section" id="seguridad">
            <div className="container">
                <h2>Seguridad de Grado Empresarial</h2>
                <p>
                    Tus datos técnicos son tu propiedad intelectual más valiosa. Nubbia está diseñado desde cero
                    con privacidad y seguridad como prioridad. Despliegue on-premise disponible.
                </p>
                <div className="security-badges">
                    <div className="badge">🔒 Encriptación AES-256</div>
                    <div className="badge">🏢 Opción On-Premise</div>
                    <div className="badge">✅ Compliance ISO 27001</div>
                    <div className="badge">🛡️ SOC 2 Type II</div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
