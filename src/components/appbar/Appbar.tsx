import React from 'react'
import logo from '../../assets/img/logo.jpg';
import  './appbar.css';
const Appbar = () => {
    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="LogoDismac" />
            </div>
            <ul>
                
                <li>Inicio</li>
                <li>Puntos De Venta</li>
                <li>Sobre Nosotros</li>
                <li>Contacto</li>
            </ul>
        </nav>
    )
}

export default Appbar;
