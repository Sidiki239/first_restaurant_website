import React from 'react'
import Dash from './Dash'
import { useNavigate } from 'react-router-dom'

import wrap from "../assets/wrap.jpg"
function Feature() {
  const navigate = useNavigate()
  return (
    <div className='container pt-2 mt-10'>
       <h1 className='lg:text-6xl text-4xl font-bold pt-2 text-center dark:text-white text-black'>
Menus <span className='text-accent'>Speciaux</span>

        </h1>
<center>
<p className='max-w-[550px] pt-5 dark:text-gray-500 text-black text-center mx-5'>

    Lorem ipsum dolor sit
     amet consectetur adipisicing
      elit. Non 
      
  </p> 
  </center>



<div className='grid md:grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 gap-16 mt-10 justify-center'>
<div className='w-fit mx-auto self-end shadow-xl px-4 py-4 '>
<img className='w-[100%] max-w-[400px] sm:max-w-full md:w-full h-auto shadow-2xl'
src="https://images.pexels.com/photos/12419163/pexels-photo-12419163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Grid image'
 width={500} height={300} 
/>

<div className='space-y-4'>


<div>
<Dash/>
<h3 className="text-2xl text-black justify-between flex">
<a className="dark:text-white  text-black"  >
  <span aria-hidden="true" className="absolute inset-0 " />
 Shrimp Salad
</a>
<p  style={{borderRadius:"7px"}} className=" bg-accent font-extrabold text-sm lg:text-xl text-white px-1 py-1 shadow-5xl border-white border-2xl " >75 DH</p></h3>
</div> 
<p className='dark:text-gray-500 text-black text-[14px] xl:text-[16px] '>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla consectetur recusandae mollitia. Tempore repellat animi odio ipsum temporibus, aperiam magni optio ut suscipit? Dolorem hic laudantium odit non commodi.

</p>

</div>

</div>
<div className='w-fit mx-auto shadow-xl px-4 py-4  '>
<img className='w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl'
src="https://images.pexels.com/photos/5836435/pexels-photo-5836435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Grid image'
 width={500} height={600} 
/>

<div className='space-y-4'>

<Dash/>
<h3 className="text-2xl text-black justify-between flex">
<a className="dark:text-white  text-black">
  <span aria-hidden="true" className="absolute inset-0" />
  Breakfast of wrap
</a>
<p  style={{borderRadius:"7px"}} className=" bg-accent font-extrabold text-sm lg:text-xl text-white px-1 py-1 shadow-5xl border-white border-2xl " >75 DH</p></h3>
<p className='dark:text-gray-500 text-[14px] xl:text-[16px]'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla consectetur recusandae mollitia. Tempore repellat animi odio ipsum temporibus, aperiam magni optio ut suscipit? Dolorem hic laudantium odit non commodi.

</p>
</div>

</div>
<div className='w-fit mx-auto self-end shadow-xl px-4 py-4'>
<img className='w-[100%] max-w-[400px] md:w-full sm:max-w-full h-auto shadow-2xl'
src="https://images.pexels.com/photos/248444/pexels-photo-248444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='Grid image'
  height={300} 
/>

<div className='space-y-4'>

<Dash/>
<h3 className="text-2xl text-black justify-between flex">
<a className="dark:text-white  text-black" >
  <span aria-hidden="true" className="absolute inset-0" />
Salmon width Sushi
</a>
<p  style={{borderRadius:"7px"}} className=" bg-accent font-extrabold text-sm lg:text-xl text-white px-1 py-1 shadow-5xl border-white border-2xl " >75 DH</p></h3>
<p className='dark:text-gray-500 text-[14px] xl:text-[16px]'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nulla consectetur recusandae mollitia. Tempore repellat animi odio ipsum temporibus, aperiam magni optio ut suscipit? Dolorem hic laudantium odit non commodi.

</p>
</div>

</div>
</div><br/><br/><br/>
<center>
<a href='/menu' className='lg:ml-5 lg:t-10 text-center lg:text-left t-10'>
<button 
  className=' text-accent underline px-4 py-2 text-2xl   rounded-3xl sm:text-3xl  lg:text-4xl  lg:px-4 lg:py-2 cursor-pointer shadow-4xl'

>
 Voir le menu
</button></a> 
</center>


    </div>
  )
}

export default Feature