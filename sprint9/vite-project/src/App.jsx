import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home/Home.jsx'
import Produtos from './components/Produtos/Produtos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
      <Produtos/>
      
    </div>
  )
}

export default App
