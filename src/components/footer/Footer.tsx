import React from 'react'
import './footer.css';
import logo from '../../assets/img/logo.jpg';
export const Footer = () => {
    return (

        <footer>
        <div className="container-footer">
            <div className="sobreNosotros">
                <h3>DISRIMAC</h3>
                <p>lOGO </p>
                <p> copyright &copy; todos los derechos reservado</p>
            </div>
            <div className="center">
                <i className="fab fa-facebook-f"></i>
                
                <i className="fab fa-twitter"></i>
                
            </div>
            <div className="contacto">
                <h3>Contacto</h3>
                <p>Gmail:contacto@subastaonline.com</p>
                <p>Tel: (+57)300000</p>
            </div>
        </div>
    </footer>
    )
}
