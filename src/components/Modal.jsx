import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Check if env vars are set
        if (!import.meta.env.VITE_EMAILJS_SERVICE_ID ||
            !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
            !import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
            alert("Error de configuración: Faltan las claves de EmailJS en el archivo .env");
            setStatus('error');
            return;
        }

        const formData = new FormData(form.current);
        const values = Object.fromEntries(formData.entries());

        const templateParams = {
            name: `${values.user_name} ${values.user_lastname}`,
            time: new Date().toLocaleString('es-ES'),
            message: `Nuevo lead interesado en demo.\nEmail de contacto: ${values.user_email}`
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 2000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert("Hubo un error al enviar el mensaje. Por favor intenta de nuevo.");
            });
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <div className="modal-header">
                    <h2>Solicitar Demo</h2>
                    <p>Déjanos tus datos y te contactaremos para agendar una demostración personalizada.</p>
                </div>

                {status === 'success' ? (
                    <div style={{ textAlign: 'center', padding: '2rem 0', color: '#22c595' }}>
                        <h3>¡Mensaje enviado correctamente!</h3>
                        <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Te contactaremos pronto.</p>
                    </div>
                ) : (
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="user_name">Nombre</label>
                            <input type="text" name="user_name" id="user_name" required placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_lastname">Apellidos</label>
                            <input type="text" name="user_lastname" id="user_lastname" required placeholder="Tus apellidos" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="user_email">Email Corporativo</label>
                            <input type="email" name="user_email" id="user_email" required placeholder="nombre@empresa.com" />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary btn-submit"
                            disabled={status === 'sending'}
                            style={{ opacity: status === 'sending' ? 0.7 : 1 }}
                        >
                            {status === 'sending' ? 'Enviando...' : 'Enviar Solicitud'}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Modal;
