import React from 'react';
import { Instagram, WholeWord, MapPin, MessageCircle } from 'lucide-react';
import '../styles/footer.css'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Enlaces de página</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Perfil</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li>Políticas de Privacidad</li>
            <li>Términos y Condiciones</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contáctanos</h3>
          <div className="social-icons">
            <a href="#"><Instagram /></a>
            <a href="#"><MessageCircle /></a>
            <a href="#"><MapPin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;