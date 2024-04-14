import React from 'react'
import logo from "../assets/logo.png"
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import DarkMode from '../function/DarkMode'
import { useNavigate } from 'react-router-dom'


  

function Navbar({active}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { darktheme, toggleTheme } = useTheme();
  const navigate = useNavigate()
  const navigation = [
    {id:1, name: 'Accueil', href: './' },
    {id:2, name: 'Menu', href: './menu' },
    {id:3 , name: 'Contact', href: './services' },
 
  ]
  
  return (

<div className='w-full z-10 relative b-10'> 



{/*
<div className="bg-white">
<header className="absolute inset-x-0 top-0 z-50">
  <nav className="flex items-center justify-between p-6 lg:px-8 bg-white border-black border-bottom-black" aria-label="Global" >
    <div className="flex lg:flex-1">
    <a href="../" class="flex items-center space-x-3 rtl:space-x-reverse">
     
      <img src={logo} alt='logo_icon'  />
       <span style={{ color: darktheme === true ? 'white' : 'black' }} class="self-center text-2xl font-semibold whitespace-nowrap ">La Brasserie du Ciel Étoilé</span>
       </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
          {item.name}
        </a>
      ))}
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <div class="flex items-center space-x-6 rtl:space-x-reverse">
    <a href="tel:5541251234" class="text-sm  text-black dark:text-white hover:underline">
    
    <i class="fa-solid fa-phone fa-beat text-accent text-xl"></i> &nbsp;
     <b style={{ color: darktheme === true ? 'white' : 'black' }} 
    >(555) 412-1234</b></a>

   
    {darktheme === false &&   <svg  onClick={toggleTheme} className="w-6 h-6 text-black dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 0 1-.5-18v0A9 9 0 0 0 20 15h.5a9 9 0 0 1-8.5 6Z"/>
  </svg>}

  {darktheme === true &&  <svg onClick={toggleTheme} className="w-6 h-6 text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5V3m0 18v-2M7 7 5.7 5.7m12.8 12.8L17 17M5 12H3m18 0h-2M7 17l-1.4 1.4M18.4 5.6 17 7.1M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
</svg>}
   
 
</div>
    </div>
  </nav>
  <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
    <div className="fixed inset-0 z-50" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
      <a href="../" class="flex items-center space-x-3 rtl:space-x-reverse">
     
      <img src={logo} alt='logo_icon'  />
       <span style={{ color: darktheme === true ? 'white' : 'black' }} class="self-center text-2xl font-semibold whitespace-nowrap ">La Brasserie du Ciel Étoilé</span>
       </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
</header>

<div className="relative isolate px-6 pt-14 lg:px-8">
  <div
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
  <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding.{' '}
        <a href="#" className="font-semibold text-indigo-600">
          <span className="absolute inset-0" aria-hidden="true" />
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Data to enrich your online business
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        fugiat veniam occaecat fugiat aliqua.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get started
        </a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
  <div
    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    aria-hidden="true"
  >
    <div
      className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
      }}
    />
  </div>
</div>
    </div>*/}

<nav className="  bg-white border-gray-200 z-10  w-full  dark:bg-black">


    <div class="flex flex-row  justify-between  mx-auto max-w-screen-xl p-4">
        <a href="../" className="flex items-center space-x-3 rtl:space-x-reverse ">
     
       <img src={logo} alt='logo_icon'  />
        <span  className="self-center lg:text-2xl text-xl dark:text-white text-black  font-semibold whitespace-nowrap ">La Table Enchantée</span>
        </a>
        <div class="  rtl:space-x-reverse mt-1 ">
          {/*  <a href="tel:5541251234" class="text-sm  text-black dark:text-white hover:underline">
            
            <i class="fa-solid fa-phone fa-beat text-accent text-xl"></i> &nbsp;
             <b className='dark:text-white text-black'
  >(555) 412-1234</b></a>*/}

         
          <DarkMode />
           
         
        </div>
    </div>
</nav>
<nav class="bg-accent dark:bg-b-700 h-auto z-10  w-full  ">
    <div class="max-w-screen-xl px-4 py-3 mx-auto">
        <div class="flex justify-center  lg:justify-center sm:justify-center lg:items-center ">
            <ul class="flex flex-row lg:gap-5  lg:justify-center   font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
{navigation.map((item)=>{
  return (
  <li key={item.id}>
  <a    href={item.href}  className="text-xl  text-white  hover:underline font-bold tracking-tight cursor-pointer ">
  {item.name === active ? <h1 className='text-white uppercase'>{item.name}</h1> :<h1 className='uppercase text-black'>{item.name }</h1> } 
                   
  
  </a>
                  
  </li>

)
})}
              
              
            </ul>
        </div>
    </div>
</nav>
</div>
   
       
  )
}

export default Navbar