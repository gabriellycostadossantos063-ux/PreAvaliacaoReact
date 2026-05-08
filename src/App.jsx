import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Ex4 from './pages/Ex4'
import Ex13 from './pages/Ex13'


function App() {
 
  return (

    <>  
      <Header/>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Ex4" element={<Ex4 />} />
       <Route path="/Ex13" element={<Ex13 />} />
     </Routes>
      <Footer />
 </>
)
 
}
 
export default App
 