import React from 'react'
import burger1 from "../assets/pizza.jpg"
import { useNavigate } from 'react-router-dom'
import Dash from './Dash'
import hero_background from "../assets/wrap_hero.jpg"



const burger = "https://images.pexels.com/photos/19247575/pexels-photo-19247575/free-photo-of-legumes-fast-food-restaurant-rapide-fromage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
function Hero() {
  const width = window.innerWidth
const navigate = useNavigate()
  return (
    <>
    <div class="relative pt-5 pb-12 bg-black xl:pt-39 sm:pb-16 lg:pb-32 xl:pb-30 2xl:pb-56">
    <div class="absolute inset-0">
<img class="object-cover w-full h-full  lg:h-full"
src="https://img.freepik.com/free-photo/front-view-burgers-stand_141793-15545.jpg?t=st=1715000140~exp=1715003740~hmac=7b7826bec117a76c91e883559f40c2a3dda9a154df8c97215db52ebc9ccef223&w=996"
// src="https://img.freepik.com/free-photo/side-view-chicken-doner-wrapped-lavash-french-fries-wooden-cutting-board_140725-12780.jpg?t=st=1712887900~exp=1712891500~hmac=fd655314ca053500dc3cd1616e7c10c8e12a8afb323eef6ffe2f28e82739638f&w=740" 
alt="" />
    </div>
    <div class="relative z-50">
        <div class=" w-full  mx-auto text-center lg:px-12 ">
        <center>
            <div class=" text-center lg:w-1/2 sm:w-1/2  sm:mt-20 ">
            <p class="mt-5 sm:mt-1 tracking-tighter text-white text-center">
                    <span class="font-sans font-normal text-center text-4xl lg:text-6xl">Savourez l'instant </span><br />
                    <span class="font-serif italic font-normal text-3xl lg:text-4xl">goûtez à l'exceptionnel</span>
                </p>
                <div class="flex justify-center mt-20 space-x-3 sm:space-x-4">
                    <a
                        href="./menu"
                        title=""
                        class="
                        
                            inline-flex
                            items-center
                            justify-center
                            px-10
                            py-3
                            font-sans
                            lg:text-3xl
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                         rounded-full
                            sm:leading-8
                            bg-accent
                            sm:text-lg
                           dark: text-white
                            hover:bg-opacity-90
                            text-center cursor-pointer
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                        role="button"
                        onClick={()=>navigate("./menu")}
                    >
                      Explorer
                    </a>

                
                </div>
            </div>
            </center>
        </div>
    </div>
</div>
    </>

  )
}

export default Hero
