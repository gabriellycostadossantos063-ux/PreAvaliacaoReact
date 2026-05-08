import { Link } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
function Exercicio4() {
 
  const [dias, setDias] = useState("")
  const [resultado, setResultado] = useState("")
 
  function calcular(event) {
    event.preventDefault()
 
    const horas = Number(dias) * 24
 
    setResultado(`A viagem teve ${horas} horas`)
  }
 
  return (
<>
<h2>Viagem</h2>
 
      <form onSubmit={calcular}>
<input
          type="number"
          placeholder="Dias"
          value={dias}
          onChange={(e) => setDias(e.target.value)}
        />
 
        <button type="submit">Calcular</button>
</form>
 
      <p>{resultado}</p>
</>
  )
}
 
export default Exercicio4
        
    




