import React from 'react'
import { Link} from "react-router-dom";
import logo from '../../assets/img/logo.jpg';
import  './appbar.css';
const Appbar = () => {
    return (
        <nav>
            <div id="logo">
                <img src={logo} alt="LogoDismac" />
            </div>
            <ul>
                    <li><Link className="link"to="disrimac/">Inicio</Link></li>
                    <li><Link className="link"to="disrimac/">Puntos De Venta</Link></li>
                    <li><Link className="link"to="disrimac/about">Sobre Nosotros</Link></li>
                    <li><Link className="link"to="disrimac/contact">Contacto</Link></li>
              
            </ul>
        </nav>
    )
}

export default Appbar;
