import React from 'react'
import '../Header/Header.css'

// Importar imagenes
import Logo from '../assets/Icon.png'
import Logo2 from '../assets/logo-responsive.png'
import Burger from '../assets/burger-menu.svg'

const Home = () => {

    return(

        <header id='home'>
            <nav>
                <div>
                    <img src={Logo} className="Logo" />
                    <img src={Logo2} className="Logo2"/> 
                </div>

                <div className='nav' id='nav' >
                    <button className='cerrar-menu' id='cerrar' >Cerrar</button>
                
                    <ul className='nav-list'>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#search">Search</a></li>
                        <li><a href="#create">Create Recipe</a></li>
                        <li><a href="#history">Recipe History</a></li>
                        <li><a className='a-contact' href="#footer">Contact</a></li>
                    </ul>
                </div>
                
                {/* Botón call to action */}
                <a href="#create" className="cta">Create Recipe Now</a>

                <button id='abrir'className='abrir-menu' >
                    <img className='burger-menu'src={Burger} alt="" />
                </button>
                
            </nav>
        </header>
        
    )
}

export default Home