import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Survey from '../components/Survey'

const Services = () => {
  const active = "Contact"
  return (
    <div className='bg-white dark:bg-black'>
    <Navbar active={active}/>
  <Survey/>
  <div className=' bottom-0 w-full'>
    <Footer/>
    </div>
  
  </div>
  )
}

export default Services