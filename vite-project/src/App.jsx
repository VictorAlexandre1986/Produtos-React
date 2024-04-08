
import './App.css'


import Home from './pages/home';
import Cadastro from './pages/cadastro';

import Navbar from './components/Navbar';


import {BrowserRouter, Routes, Route} from 'react-router-dom';

const url = "http://localhost:3000/produtos";
function App() {



  return (
    <>
        
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
