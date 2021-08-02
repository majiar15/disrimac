import React from 'react'
import { CatalogoProducto } from './CatalogoProducto'
import herrajes from '../../assets/img/herrajes.jpg';
import madera from '../../assets/img/madera.jpg';
import pinturas from '../../assets/img/pinturas.jpg';
import herramientas from '../../assets/img/herramientas.jpg';
import Construccion from '../../assets/img/construccion.jpg';
import tuberia from '../../assets/img/tuberia.jpg';
import  './catalogo.css';
export const Catalogo = () => {
    const jsonData = [
         {img: herrajes ,name:"Herrajes"},
         {img: madera, name:"Maderas"},
         {img: pinturas ,name:"Pinturas"},
         {img: herramientas, name:"Herramientas"},
         {img: Construccion, name: "Materiales De Construccion"},
         {img: tuberia, name: "Tuberias y PVC"}
    ];
    
    return (
        <div id="catalogo">
            <h2>Catalogo De Productos</h2>
            <p>Contamos con un completo portafolio de soluciones para cada necesidad.
Ofrecemos productos con excelente calidad y la mejor relación costo-beneficio</p>
            <div id="catalogoproducts">
                {   
                    jsonData.map(item => {       
                        return <CatalogoProducto img={item.img} name={item.name}/>;
                    })
                }
            </div>

        </div>
    )
}
