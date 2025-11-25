import React from 'react';
import './Header.css';

const Header = ({ onOpenModal }) => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          Nubbia
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#soluciones">Soluciones</a></li>
            <li><a href="#industria">Industria</a></li>
            <li><a href="#seguridad">Seguridad</a></li>
          </ul>
        </nav>
        <button onClick={onOpenModal} className="btn-primary">Solicitar Demo</button>
      </div>
    </header>
  );
};

export default Header;
