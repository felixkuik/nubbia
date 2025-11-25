import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Solicitar Demo</h2>
                    <p>Déjanos tus datos y te contactaremos para agendar una demostración personalizada.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" required placeholder="Tu nombre" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" required placeholder="Tus apellidos" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Corporativo</label>
                        <input type="email" id="email" required placeholder="nombre@empresa.com" />
                    </div>
                    <button type="submit" className="btn-primary btn-submit">Enviar Solicitud</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
