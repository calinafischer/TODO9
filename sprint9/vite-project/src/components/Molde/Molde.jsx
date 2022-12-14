import React from 'react'
import s from '../Molde/Molde.module.css'

const Molde = ({dados}) => {
    const {id, image, name, description, oldPrice, price, installments} = dados
  return (
    <div className={s.container}>
        <div className={s.containerimg}>
        <img src={image}></img>
        </div>
        <p className={s.titulo}>{name}</p>
        <p className={s.descricao}>{description}</p>
        <p className={s.descricao}>De: R$<span>{oldPrice}</span></p>
        <p className={s.atual}>Por: R$<b>{price}</b></p>
        <p className={s.descricao}>ou {installments.count} x de {installments.value}</p>
        <button className={s.btn}>Comprar</button>
    </div>
    
  )
}

export default Molde
