import { Link } from 'react-router-dom';
import './style.css';

function Home() {
    return (
        <>
            <h2>Bem-Vindo(a) ao meu sistema</h2>
            <Link to="/Ex4">
            <button>navegar para exercicio4</button>
            </Link>
             <Link to="/Ex13">
            <button>navegar para exercicio13</button>
            </Link>
        
        </>
    )
}

export default Home