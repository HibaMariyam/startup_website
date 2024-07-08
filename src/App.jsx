import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import HeroSection from './sections/HeroSection'
import Section2 from './sections/Section2'
import Section3 from './sections/Sections3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Footer from './components/Footer'

function App() {

  return (
    <>

      <div className='flex flex-col '>
        <section> <NavBar /></section>
        <section><HeroSection /></section>
        <section>  <Section2 /></section>
        <section><Section3 /></section>
        <section><Section4 /></section>
        <section><Section5 /></section>
        <section><Footer /></section>

      </div>

    </>
  )
}

export default App
