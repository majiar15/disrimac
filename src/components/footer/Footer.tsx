import React from 'react'
import './footer.css';
import logo from '../../assets/img/logo.jpg';
export const Footer = () => {
    return (

        <footer>
        <div className="container-footer">
            <div className="sobreNosotros">
                <h3>DISRIMAC</h3>
                <img src={logo} alt="logo"  width="100"/>
                <p> Copyright &copy; todos los derechos reservado</p>
            </div>
            <div className="contacto">
                <h3>Contacto</h3>
                <p>Email: Info@disrimac.com</p>
                <p>Tel: (+57)3002457017</p>
            </div>
        </div>
    </footer>
    )
}
