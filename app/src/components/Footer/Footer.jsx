import React from 'react'
import '../Footer/Footer.css'

import Logo from '../assets/logo-footer.png'

const Footer = () => {

    return(
    <>
    
    <footer className="footer" id='footer'>

        {/* <!-- Parte superior del footer --> */}
        <div className="footer-top">
            
            {/* <!-- Columna 1 --> */}
            <div className="footer-column">
                <div className="footer-logo">
                    <img src= {Logo} alt="Logo"/>
            </div>
            <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="social-icons">

                {/* Icono de instagram */}
                <button className="button">
                    <svg viewBox="0 0 24 24" fill="none" height="20" width="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"class="w-6 h-6 text-gray-800 dark:text-white"><path clip-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" fill-rule="evenodd" fill="currentColor"></path></svg>
                </button>
                
                {/* Icono de whatsapp */}
                <button className="button">
                    <svg viewBox="0 0 24 24" fill="none" height="20"width="20"xmlns="http://www.w3.org/2000/svg"aria-hidden="true"class="w-6 h-6 text-gray-800 dark:text-white"><path clip-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"fill-rule="evenodd" fill="currentColor"></path><path d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"fill="currentColor"></path></svg>
                </button>

                {/* Icono de youtube */}
                <button className="button">
                    <svg viewBox="0 0 24 24"fill="currentColor"height="20"width="20"xmlns="http://www.w3.org/2000/svg"aria-hidden="true"class="w-6 h-6 text-gray-800 dark:text-white"><path clip-rule="evenodd"d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"fill-rule="evenodd"></path></svg>
                </button>
                
            </div>
            
        </div>

            {/* <!-- Columna 2 --> */}
            <div className="footer-column">
                <h3>Company</h3>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#search">Search</a></li>
                    <li><a href="#create">Create Recipe</a></li>
                    <li><a href="#history">Recipe History</a></li>
                </ul>
            </div>

            {/* <!-- Columna 3 --> */}
            <div className="footer-column">
                <h3>Contact</h3>
                <ul>
                    <li>(406) 555-0120</li>
                    <li>www.example.com</li>
                    <li>example@gmail.com</li>
                    <li>Argentina, Buenos Aires</li>
                </ul>
            </div>

            {/* <!-- Columna 4 --> */}
            <div className="footer-column">
                <h3>Get the latest information</h3>
                <div class="email-subscribe">
                    <input type="email" placeholder="Email address"/>
                    <button>→</button>
                </div>
            </div>
        </div>

        {/* <!-- Parte inferior del footer --> */}
        <div className="footer-bottom">
            Proyecto ficticio realizado por Belén Nuñez como parte del trabajo final del Módulo 1 
            de Front-End en la Diplomatura de Full Stack Developer de la UTN.
        </div>

</footer>
    
    </>
        
    )

}

export default Footer