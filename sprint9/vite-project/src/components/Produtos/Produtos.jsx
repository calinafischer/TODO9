import React, { useEffect, useState } from 'react'
import Molde from '../Molde/Molde'
import s from '../Produtos/Produtos.module.css'
// import S from './Produtos.module.css'
// import { listaProdutos } from '../../data/produtos'
const Produtos = ({ nome }) => {

const [req, setReq] = useState([])
const [paginaAtual, setpaginaAtual] = useState(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
async function handleReq (link){
    const resposta = await fetch(link)
    const json = await resposta.json()
    const respostaFinal = json.products  //array de objetos
    const proximaPagina = json.nextPage
    setReq([...req,...respostaFinal]) //... para desconstruir o array - spread
    console.log(req)
    setpaginaAtual(`https://${proximaPagina}`)
}

  useEffect(() => {
      handleReq(paginaAtual)
  }, [])

  return (

      <section className={s.container}>
        {req.map((produto)=>{
        return(<Molde dados={produto}/>)
        }
        )}

        <button className={s.btn} onClick={()=>{handleReq(paginaAtual)}}>Ainda mais produtos aqui</button>

      </section>
     )
}

export default Produtos