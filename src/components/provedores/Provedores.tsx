import React from 'react'
import alfa from '../../assets/img/Alfa.jpg';
import argos from '../../assets/img/argos.png';
import corona from '../../assets/img/corona.png';
import dewalt from '../../assets/img/dewalt.png';
import eternit from '../../assets/img/eternit.svg';
import pintuco from '../../assets/img/pintuco.webp';
import sika from '../../assets/img/sika.png';
import stanley from '../../assets/img/stanley.png';
import './provedores.css';
export const Provedores = () => {
    return (
        <div id="provedores">
            <h2> Nuestros Provedores </h2>
            <p>Calidad, buenos precios y todo para nuestros clientes</p>
            <div id="provedoresIMG">
                <div className="provedores-wraper">
                    <img src={alfa} alt="alfa" />
                </div>

                <div className="provedores-wraper">
                    <img src={argos} alt="argos" />
                </div>

                <div className="provedores-wraper">
                    <img src={corona} alt="corona" />
                </div>

                <div className="provedores-wraper">
                    <img src={dewalt} alt="dewalt" />
                </div>

                <div className="provedores-wraper">
                    <img src={eternit} alt="eternit" />
                </div>

                <div className="provedores-wraper">
                    <img src={pintuco} alt="pintuco" />
                </div>

                <div className="provedores-wraper">
                    <img src={sika} alt="sika" />
                </div>

                <div className="provedores-wraper">
                    <img src={stanley} alt="stanley" />
                </div>
                
            </div>
            
        </div>
    )
}
