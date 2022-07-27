import React, { useEffect, useState } from 'react'
import Molde from '../Molde/Molde'
// import S from './Produtos.module.css'//
import { listaProdutos } from '../../data/produtos'
const Produtos = ({ nome }) => {

const [req, setReq] = useState([])
async function handleReq (){
    const resposta = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
    const json = await resposta.json()
    const respostaFinal = json.products  //array de objetos
    setReq([...respostaFinal])
    console.log(req)
}

  useEffect(() => {
      handleReq()
  }, [])

  return (
    <div >

      <section>
        {listaProdutos.map((produto) => {
          return (<Molde dados={produto} key={produto.id} />)
        })}
      </section>
    </div>
  )
}

export default Produtos