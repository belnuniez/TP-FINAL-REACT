import React from 'react'
import '../Hero/Hero.css';

// Importar imagenes
import Disponible from '../assets/descargar.png';
import Usuarios from '../assets/usuarios.png'

const Home = () => {
   
    return(
        
            <section className="Hero-contenedor">
                <div className="Hero">
                    <h1>Welcome to our
                        <br />
                        <span className='Subrayado'>Food Recipe</span> App!</h1>
                    <p className='Hero-parrafo'>You can add and save your favorite recipes, search for new dishes, and find inspiration for your next meal.</p>

                    <div className="download-botones">
                        <img src= {Disponible} alt="" />
                    </div>

                    <div className="usuarios-contenedora">
                        <img src= {Usuarios} alt="" />

                        <div className='usuarios-activos'>
                        <h3>15800 +</h3>
                        <p>Active Users</p>
                        </div>

                    </div>

                </div>
            </section>
        

        
    )
}

export default Home