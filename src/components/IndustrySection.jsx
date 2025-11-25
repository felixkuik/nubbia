import React from 'react';
import './IndustrySection.css';

const IndustrySection = () => {
    return (
        <section className="industry-section" id="industria">
            <div className="container industry-content">
                <div className="industry-text">
                    <h2>Integración Industrial Profunda</h2>
                    <p>
                        Nubbia no es solo un chat. Se conecta directamente con tu infraestructura existente.
                        Desde sistemas ERP como SAP y Oracle hasta SCADA y PLCs en planta.
                        Obtén diagnósticos que cruzan datos de manuales estáticos con telemetría en tiempo real.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <li style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #eee' }}>🔌 API REST</li>
                        <li style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #eee' }}>🏭 Modbus/OPC-UA</li>
                        <li style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #eee' }}>📊 SQL/NoSQL</li>
                    </ul>
                </div>
                <div className="industry-visual">
                    🏭 ↔️ 🧠
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;
