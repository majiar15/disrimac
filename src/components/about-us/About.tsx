import React from 'react';
import inicio from '../../assets/img/building.jpg';
import mision from '../../assets/icons/mision.svg';
import vision from '../../assets/icons/objetivo.svg';
import './about.css';
export const About = () => {
    return (
        <div>
            
                <h1 id="nuestra-historia">Nuestra Historia</h1>
            <div id="inicios">
                <p >
                Disrimac es una empresa dedicada a la distribución de materiales para la industria madera y de construcciones con mas de 30 años en el mercado brindando la mejor atención y vendiendo los mejores productos de la mano de los mejores proveedores para que todas las construcciones 
                </p>
                <img src={inicio} alt="" />
            </div>
                
            <div id="nuestos-inicios">
            <img src={inicio} alt="" />
                <p>
                <span  id="title-nuestros-inicios">Nuestros Inicios</span>
                <br/>
                Esta empresa inicio como una inversión empresarial familiar en la industria madera, al pasar de los años y gracias a la buena administración que se le dio  se amplió su catalogo y se constituyo como una distribuidora para la industria madera y de construcciones ofreciendo productos necesarios para la realización de trabajos industriales y caseros, actualmente gracias a este crecimiento , constancia, buena administración y ampliación de la gama de productos y servicios lograron contar con una sede virtual la cual realiza transacciones comerciales en la ciudad de Cartagena y barranquilla además del punto físico y las oficinas con las que se cuentan en la ciudad de Cartagena.
                </p>
            </div>
            <div id="mision-vision">
                <div id="mision">
                    <img src={mision} alt="mision" width="100"/>
                    <h2>Mision</h2>
                    <p>Somos una empresa que trabaja día a día para brindar a sus clientes la mayor diversidad en materiales bajo premisas de precio, calidad y servicio acorde a las exigencias del mercado, contamos con un amplio portafolio de productos con las mejores marcas, excelente calidad y precios competitivos.</p>
                </div>
                <div id="vision">
                    <img src={vision} alt="vision" width="100"/>
                    <h2>Vision</h2>
                    <p>
                        Ser reconocidos como distribuidores líderes en proveer soluciones completas en materiales de ferretería y madera de alta calidad a nuestros clientes superando así sus expectativas, proyectándonos como una compañía competitiva que sea de gran aporte para el crecimiento económico del país. 
                    </p>
                </div>
            </div>
            




        </div>
    )
}
