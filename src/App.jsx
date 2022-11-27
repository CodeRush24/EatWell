import React from 'react'
import Category from './components/Category'
import Food from './components/Food'
import Footer from './components/Footer'
// import img1 from './assets/EatWellLogo.png'
import HeadlineCarrds from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-amber-100'>
      <Navbar />
      <Hero />
      <HeadlineCarrds />
      <Food />
      <Category />
      <Footer />
    </div>
  )
}

export default App
