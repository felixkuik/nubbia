import React from 'react';

const Footer = () => {
    return (
        <footer style={{ padding: '2rem', textAlign: 'center', color: '#6b7280', fontSize: '0.9rem', borderTop: '1px solid #eee' }}>
            <p>&copy; {new Date().getFullYear()} Nubbia AI. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
