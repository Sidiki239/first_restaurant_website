import React from 'react'
import burger1 from "../assets/pizza.jpg"
import { useNavigate } from 'react-router-dom'
import Dash from './Dash'



const burger = "https://images.pexels.com/photos/19247575/pexels-photo-19247575/free-photo-of-legumes-fast-food-restaurant-rapide-fromage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
function Hero() {
  const width = window.innerWidth
const navigate = useNavigate()
  return (
    <>
    <div className='w-full'>
 
    <div className=' relative '>
  
      <img
className='w-full
 lg:h-400  right-0 top-0  '      
      src={burger} alt='burgerImage'
      
      />


<div className=' sm:h-[calc(100vh-120px)] lg:absolute   sm: mt-10 sm:items-center   z-10  lg:items-start   sm:pt-5 top-10 '>
  <div className='space-y-4 bg-[#fffff98] z-10 p-4 b-10 sm:top-5  lg:text-left text-center '><br/>
{/* <p className='uppercase font-medium text-white  sm:mt-50 '>Wide option of choice</p> */}
<h2 className='text-5xl lg:text-7xl lg:ml-5 sm:text-6xl lg:text-white dark:text-white sm:text-black font-bold lg:text-left text-center'>
Delicious <span className='text-accent '>Food</span>
</h2>
<p  className='text-gray-700 lg:ml-5 lg:text-[18px]
sm:text-[16px] text-center lg:text-left 
'>Delicious food color , aroma  and taste<br/>
Commander tout de suite !!
</p>







</div>
<div style={{textAlign: width < 500 ? "center": "inherit" }}  >
<a    href='/menu' className='lg:ml-5 lg:t-10  sm:w-full   z-10 relative     lg:text-left'>
<button  style={{textAlign:"center",alignSelf:"center",}} 
  className='bg-accent text-white px-4 py-2 text-2xl  lg:rounded-5xl rounded-3xl sm:text-3xl  lg:text-5xl lg:ml-4 lg:mt-6 lg:px-8 lg:py-2 cursor-pointer shadow-4xl'
  onClick={()=>navigate("menu")}
>
 Explorer
</button></a> 
</div> 

</div>

    </div>
     
  
    
  
    </div>
 
 

   
    <br/><br/> <br/><br/> <br/>
    </>

  )
}

export default Hero