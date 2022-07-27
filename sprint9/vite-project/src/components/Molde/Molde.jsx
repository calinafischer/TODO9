import React from 'react'

const Molde = ({dados}) => {
    const {id, image, name, description, oldPrice, price} = dados
  return (
    <div>
        <img url= {image}></img>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>De <span>{oldPrice}</span></p>
        <p>Por <span>{price}</span></p>
        <button>Comprar</button>
    </div>
  )
}

export default Molde
