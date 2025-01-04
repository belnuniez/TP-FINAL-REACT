import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../src/index.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Inspo from './components/Inspo-section/Inspo-section'
import Footer from './components/Footer/Footer'

import App from './App'

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <Header/>
      <Hero/>
        <main>
          <About />
          <Inspo/>
          <App />
        </main>
      <Footer/>
    </StrictMode>
  )
