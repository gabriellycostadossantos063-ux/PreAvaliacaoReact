import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Ex1 from './pages/Ex1'
import Ex2 from './pages/Ex2'
import Ex3 from './pages/Ex3'

function App() {
 
  return (

    <>  
      <Header/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Ex1" element={<Ex1 />} />
       <Route path="/Ex2" element={<Ex2 />} />
       <Route path="/Ex3" element={<Ex3 />} />
     </Routes>
      <Footer />
 </>
)
 
}
 
export default App
 