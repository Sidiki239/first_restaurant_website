import React from 'react'
import Dash from './Dash'
import { useTheme } from '../context/ThemeContext'
import facebook from "../assets/facebook.svg"
import logo from "../assets/logo.png"


  


 
function Footer()  {
    const { darktheme, toggleTheme } = useTheme();

  return (
    <div   className='container pt-30 mt-0 dark:bg-black  bg-white '>
 <hr/>
<footer    className=" dark:bg-black  bg-white  ">
    <div className=" w-full p-4 py-3 lg:py-4">
        <div className=" sm:justify-between sm:flex-col   lg:flex-row  lg:flex   md:flex-col lg:justify-between    ">
          <div className="mb-6 md:mb-0">
              <a href="" className="flex items-center">
<img src={logo} alt='logo_icon' /> 
                  <span  className=" dark:text-white text-black self-center text-2xl font-semibold whitespace-nowrap ">&nbsp;Nom_Entreprise</span>
              </a>
          </div>
        
          <div className=" gap-4 sm:gap-6 sm:top-10 md:top-10  ">
              <div>
                  <h2   className="dark:text-white text-black ml-5  mb-4 text-sm font-semibold  uppercase ">Contact</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="" className="hover:underline">
                          <div className="flex items-center">
  <svg className="w-[23px] h-[23px] text-accent " aria-label="jdjjd" aria-hidden="false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"/>
  </svg>
  <span   className="ml-0 text-sm dark:text-white text-black ">(555) 412-1234</span>
</div>
   </a>   </li>
                      <li className="mb-4">
                          <a href="" className="hover:underline">
                          <div className="flex  flex-row justify-start">
                          <svg className="w-6 h-6 text-accent  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"/>
  </svg>
                        <span  className="ml-0 text-sm dark:text-white text-black ">Adresse, 80000 Agadir </span>
                          </div>
                          
                          </a>
                      </li>
<li>
<a href='' className='hover:underline'>
<div className='flex items-right'>
<i class="fa-regular fa-envelope text-accent text-xl"></i>
  <span className="ml-0 text-sm  dark:text-white text-black "  >&nbsp;emailentreprise@gmail.com </span>

</div>
</a>
</li>

                  </ul>
              </div>
    
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" className="hover:underline">LOGO</a>Tous droits reserves
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
           <i class="fa-brands fa-facebook text-blue-500"></i>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i style={{background: "linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)"}} class="fa-brands fa-instagram"></i>
                  <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i class="fa-brands fa-whatsapp text-green-500"></i>
                  <span className="sr-only">WhatsApp</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <i class="fa-brands fa-twitter text-blue-400"></i>
                  <span className="sr-only">Twitter account</span>
              </a>
             
          </div>
      </div>
    </div>
</footer>


    </div>
  )
}

export default Footer