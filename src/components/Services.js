import React from 'react'
import Dash from './Dash'
import ServicesCard from './ServicesCard'
import image from "../assets/wrap.jpg"
import { useNavigate } from 'react-router-dom'
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'


const foodIcon =()=> {
  
return (
    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tools-kitchen" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 3h8l-1 9h-6z" />
    <path d="M7 18h2v3h-2z" />
    <path d="M20 3v12h-5c-.023 -3.681 .184 -7.406 5 -12z" />
    <path d="M20 15v6h-1v-3" />
    <path d="M8 12l0 6" />
  </svg> )
}
const livraisionIcon=()=> {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-moped" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
  <path d="M6 9l3 0" />
</svg> )
    }
    const cuisineIcon=()=> {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chef-hat" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c1.918 0 3.52 1.35 3.91 3.151a4 4 0 0 1 2.09 7.723l0 7.126h-12v-7.126a4 4 0 1 1 2.092 -7.723a4 4 0 0 1 3.908 -3.151z" />
            <path d="M6.161 17.009l11.839 -.009" />
          </svg> )
        }


const features = [
    {
      name: 'Manger sur place',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse ',
      icon: foodIcon,
    },
    {
      name: 'Livraison à domicile',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor ',
      icon: livraisionIcon,
    },
    {
      name: 'Cuisine professionnelle',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor .',
      icon: cuisineIcon,
    },
  ]
  
 



  
const service_Data = [
    {
        img: "https://img.freepik.com/free-vector/catering-service-concept-illustration_114360-7488.jpg?w=996&t=st=1707321096~exp=1707321696~hmac=1339544dfd570e53277da994ccae5ddade08275e80b84c8d87804ef082acd513",
           title: "Cuisine professionnelle",
        desc: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        img: "https://img.freepik.com/free-vector/american-diner-concept-illustration_114360-16310.jpg?w=996&t=st=1707320709~exp=1707321309~hmac=be7e8af4cc5e863335328f1a7555eade1e6e6cbdeb0f452d56eb7f08c5fdac42",
        title: "Dinner a table",
        desc: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
    {
        img: "https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=996&t=st=1707320238~exp=1707320838~hmac=4f83392a733accb87f807e42e734ed6fe1ab94c62d9ea89fe2c72ae5e7af80c7",
        title: "Livraision a domicile",
        desc: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    },
   
   /*  {
        img: "/assets/wrap.jpg",
        title: "Cuisine professionnelle",
        desc: "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "
    }, */
];


function Services() {

  const navigate =useNavigate()
  return (
    <>
    <div className="dark:bg-black bg-white py-24 sm:py-32">

    <h2 className='text-4xl dark:text-white text-black md:text-6xl font-bold text-center '>

        Choisissez notre meilleur <span className='text-accent'>Service</span>
        
        </h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
        
        
          <p className="mt-6 text-lg leading-8 text-gray-600 ">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl sm:mt-20 lg:mt-24 lg:max-w-4xl md:align-center ">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-24 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
               <h1 className="dark:text-white text-black">   {feature.name}</h1>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
       
      </div>
    </div>
  
  {/*  <div className='container pt-40 '>
        <div className='space-y-4 w-fit mx-auto text-center'>
<h2 className='text-4xl md:text-6xl font-bold '>
Choisissez notre meilleur <span className='text-accent'>Service</span>

</h2>
<p className='text-gray-700'>

    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis fugiat minus obcaecati autem soluta consequatur ex aliquam ducimus nemo veritatis.
    <br/>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit.
</p>
<div className='w-fit mx-auto'>
<Dash/>

</div>
 </div>
<div className='grid gap-10 md:grid-cols-3 md:gap-4 pt-8 items-center mt-10'>

{service_Data.map((item , index)=>
<ServicesCard 
key={index}
img={item.img}
title={item.title}
desc={item.desc}

/>

)}
</div>

</div>*/}
    </>
  )
}

export default Services