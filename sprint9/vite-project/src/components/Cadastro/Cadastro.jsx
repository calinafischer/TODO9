import React, {useState} from "react"

    const Cadastro = ()=>{
        const [inputEmail, setEmail] = useState('')
        const [inputCPF, setCPF] = useState('')
    } 

    function handleInputEmail(target){
        setInputEmail(target.value)
    }

    function handleInputCPF(target){
        setInputCPF(target.value)
    }

    function validaEmail(){
        if(inputEmail.indexOf('@') > 2 && inputEmail.indexOf('.com') > inputEmail.indexOf('@')){
            alert("Email válido")
        }else{
            alert("Email inválido")
        }
    }

    function validaCPF(){
        if(cpf.isValid(inputCPF)){
            alert("CPF válido")
        }else{
            alert("CPF inválido")
        }
    }

    return(

    <section>

    <form className={s.form}>
      <label>Seu nome:</label><input type="text"/>
      <label>E-mail:</label><input type="email" value={inputEmail} onChange={({target})=> handleInputEmail(target)}/>
      <label>CPF:</label><input type="text" value={inputCPF} onChange={({target})=> handleInputCPF(target)}/>
      <div>
        <input type="radio" name="genero" value="masculino"/>
        <label htmlFor="masculino">Masculino</label>
        <input type="radio" name="genero" value="feminino"/>
        <label htmlFor="feminino">Feminino</label>
      </div>
      <button onClick={(event)=>{
        event.preventDefault()
        validaEmail()
        validaCPF()
        }}>Enviar</button>
    </form>
    
    </section>

    )