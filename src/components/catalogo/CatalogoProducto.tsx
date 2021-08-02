import React from 'react'
interface props {
    img: string,
    name: string
}
export const CatalogoProducto = ({img, name}: props) => {
    return (
        <div className="catalogoProducto">
            <img src={img} alt={name} />
            <p>{name}</p>
        </div>
    )
}
