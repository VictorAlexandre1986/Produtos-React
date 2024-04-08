import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container_navegacao'>
        <div>
            <h1>Shop</h1>
        </div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/cadastro">Cadastro</Link>
        </nav>
    </div>
  )
}

export default Navbar