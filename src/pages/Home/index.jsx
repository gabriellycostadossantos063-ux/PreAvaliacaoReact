import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
            <h2>Bem-Vindo(a) ao meu sistema</h2>
            <Link to="/Ex1">
            <button>navegar para exercicio1</button>
            </Link>
             <Link to="/Ex2">
            <button>navegar para exercicio2</button>
            </Link>
             <Link to="/Ex3">
            <button>navegar para exercicio3</button>
            </Link>
        </>
    )
}

export default Home