import React from 'react'
import '../About/About.css'

// Importar imagenes:
import Imagen from '../assets/about-imagen.png'
import Icono1 from '../assets/about-icono1.png'
import Icono2 from '../assets/about-icono2.png'
import Icono3 from '../assets/about-icono3.png'

const About = () => {
  return (

    <>

    <section className="about" id='about'>

      <div className="titulo">
        <h2>The <span className='span'>Seamless <br />
          Experience</span> of our App</h2>
      </div>

      <div className="content">

        <div className="imagen">
          <img src= {Imagen} alt="" />
        </div>
        
        <div className='detalles'>
          <ul className='items'>
            <li><img src= {Icono1} alt="" /> Browse and explore recipes</li>
            <li><img src= {Icono2} alt="" /> Add your own recipes</li>
            <li><img src= {Icono3} alt="" /> Save and delete recipes</li>
          </ul>
        </div>

      </div>

    </section>
    

    
    
    
    
    </>
    
  )
}

export default About