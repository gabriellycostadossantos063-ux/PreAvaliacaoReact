
import { Link } from 'react-router-dom'

import './style.css'

import { useState } from 'react'
function Exercicio13() {



const [n1, setN1] = useState("")
const [n2, setN2] = useState("")
const [resultado, setResultado] = useState("")



function verificar(event) {
event.preventDefault()



if (Number(n1) % Number(n2) === 0) {
setResultado("É divisível")
} else {
setResultado("Não é divisível")
}
}

return (
<>
<h2>Divisível</h2>



<form onSubmit={verificar}>
<input
type="number"
placeholder="Primeiro número"
value={n1}
onChange={(e) => setN1(e.target.value)}
/>

<input
type="number"placeholder="Segundo número"
value={n2}
onChange={(e) => setN2(e.target.value)}
/>
<button type="submit">Verificar</button>
</form>



<p>{resultado}</p>
</>
)
}



export default Exercicio13

