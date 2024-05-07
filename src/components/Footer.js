import React from 'react'
import Dash from './Dash'
import { useTheme } from '../context/ThemeContext'
import facebook from "../assets/facebook.svg"
import logo from "../assets/logo.png"


  


 
function Footer()  {
    const { darktheme, toggleTheme } = useTheme();

  return (

    <>
  
  
        <section className="py-10 dark:bg-black   bg-white sm:pt-16 lg:pt-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl ">
        <div className=" lg:flex-row flex-col  flex lg:justify-between ">
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8  text-left">
            <a href="" className="flex items-left">
            <img src={logo} alt='logo_icon' /> 
                              <span  className=" dark:text-white text-black self-center text-2xl font-semibold whitespace-nowrap ">&nbsp;La Table Enchantée</span>
                          </a>
                <p className="text-base w-full leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>

                <div className=" mt-4  text-left  sm:mt-0 ">
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
<div className=' flex lg:flex-row flex-col justify-center   gap-4 lg:gap-10'>
            <div className='mt-10  lg:mt-0' >
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Contact</p>

                <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium mt-5">
                    <li className="mb-4">
                        <a href="" className="hover:underline">
                        <div className="flex items-center">
                        <i class="fa-solid fa-phone fa-beat text-accent"></i>
<span   className="ml-0 text-sm dark:text-white text-black ">(555) 412-1234</span>
</div>
 </a>   </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">
                        <div className="flex  flex-row justify-start">
                        <i class="fa-solid fa-location-dot text-accent fa-beat"></i>
                      <span  className="ml-0 text-sm dark:text-white text-black ">Adresse, 80000 Agadir </span>
                        </div>
                        
                        </a>
                    </li>
<li>
<a href='' className='hover:underline'>
<div className='flex items-right'>
<i class="fa-regular fa-clock fa-beat text-accent"></i>
<span className="ml-0 text-sm  dark:text-white text-black "  >&nbsp; &nbsp;8:00 - 16:00</span>

</div>
</a>
</li>

                </ul>
            </div>
            </div>

            <div >
                <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">services</p>

                <div>
                <ul className="text-gray-500 dark:text-gray-400 font-medium mt-5">
                    <li className="mb-4">
                        <a href="" className="hover:underline">
                        <div className="flex items-center">
                        <i class="fa-solid fa-wifi text-accent "></i>
<span   className="ml-0 text-sm dark:text-white text-black ">&nbsp; Wifi disponible</span>
</div>
 </a>   </li>
                    <li className="mb-4">
                        <a href="" className="hover:underline">
                        <div className="flex  flex-row justify-start">
                        <i class="fa-solid fa-square-parking text-accent"></i>
                      <span  className="ml-0 text-sm dark:text-white text-black ">&nbsp;Place de parking </span>
                        </div>
                        
                        </a>
                    </li>
<li>
<a href='' className='hover:underline'>
<div className='flex items-right'>
<div className=" h-auto w-auto items-center justify-center rounded-lg bg-accent">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moped" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
<path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
<path d="M6 9l3 0" />
</svg>
</div>
<span className="ml-0 text-sm  dark:text-white text-black "  >&nbsp; &nbsp;Livraison a domicile</span>

</div>
</a>
</li>

                </ul>
            </div>
            </div>
            </div>
           
        </div>

        <hr className="mt-5 mb-5 border-gray-200" />

       <p className="text-sm text-center text-gray-600">© Fait par <b><a href="https://my-portfolio-red-alpha.vercel.app/"><u>Sidiki DEMBÉLÉ</u></a></b> </p>
     </div>
</section>


    </>
  )
}

export default Footer
