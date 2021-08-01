import React from 'react'
import searchImg from '../../assets/img/search.jpeg';
import './search.css';
export const Search = () => {
    return (
            <div id="containerSearch">
                    <img src={searchImg} alt="Imagen de Portada" id="imgSearch"/>
                    <form id="search">
                        <input type="text" name="search" id="inputSearch" placeholder="Buscar Palabra Clave"/>
                        <input type="submit" value="Buscar" />
                    </form>
            </div>
    )
}
