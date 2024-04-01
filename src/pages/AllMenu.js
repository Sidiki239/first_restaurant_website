import React , {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { products, categories } from '../data/Products'

import { useTheme } from '../context/ThemeContext'
import { ThemeProvider } from '../context/ThemeContext'
const AllMenu = () => {

useEffect(()=>{
 // setActiveMenu("Toutes")

})

  const currentPage ="Menu"

    
const [menuType , setMenuType] = useState(products);
const [activeMenu , setActiveMenu] = useState("Toutes");

const ChangeMenu = (menuType) => {
  
    
    switch (menuType) {
      case "Toutes":
        setMenuType(products);
        setActiveMenu("Toutes")
        break;
      case "Plats":
        setMenuType(products.filter((p) => p.category === "Plats"));
        setActiveMenu("Plats")
        break;
      case "Snacks":
        setMenuType(products.filter((p) => p.category === "Snacks"));
        setActiveMenu("Snacks")
        break;
        case "Desserts":
        setMenuType(products.filter((p) => p.category === "Desserts"));
         setActiveMenu("Desserts")
            break;
        case "Boissons":
        setMenuType(products.filter((p) => p.category === "Boissons"));
         setActiveMenu("Boissons")
         break;
        case "Glaces":
        setMenuType(products.filter((p) => p.category === "Glaces"));
         setActiveMenu("Glaces")
        break;
      // Add other cases as needed
      default:
        setMenuType(products); 
        setActiveMenu("Toutes")// Set to all items if the type is not recognized
        break;
    }
  };

 
  return (


    <div className='dark:bg-black bg-white'>
    <Navbar active={currentPage}/>
    
    


<div  className="bg-white dark:bg-black mt-0">
<div className='   flex justify-between items-center mx-auto w-3/4 md:w-3/4 lg:w-1/2 ml-10 lg:mx-auto break-words overflow-x-auto'>
     <ul className="flex justify-between gap-4 overflow-x-auto w-full break-words lg:gap-3 mt-14">


    
{categories.map((cat)=> (
    <li
    key={cat.name}
    
    className={`${
        cat.name === activeMenu ? 'bg-accent text-white' : ''
      } px-5 py-2  dark:text-white  light:text-black  border-accent  rounded-xl text-[14px] sm:text-[16px] cursor-pointer border  `}
    onClick={() => ChangeMenu(cat.name)}
    >
    {cat.name}</li>
    )
    )}

     </ul>
</div>
      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-7 sm:py-8 lg:max-w-7xl lg:px-5  mt-10 ">
     
      <div className='flex justify-between'>
        <h2   className="text-2xl font-bold tracking-tight dark:text-white  light:text-black ">Categories</h2>
        <h3   className="text-2xl font-normal tracking-tight dark:text-white  light:text-black  ">{activeMenu}</h3>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-10">
          {menuType.map((product) => (
            <div key={product.id}  className="group relative shadow-xl dark:shadow-sm dark:shadow-slate-50 pt-2   dark:border-gray-100 ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between px-5 py-3">
                <div>
                  <h4 className="text-xl dark:text-white  light:text-black text-bold justify-between flex">
                    <a href={product.href} >
                      <span aria-hidden="true" className="text-bold inset-0 " />
                      {product.name}
                    </a>
                  </h4>
                  <p className='text-gray-700 text-[14px] xl:text-[16px] mt-2 w-full lg:w-full '>
Lorem ipsum dolor sit amet consectetur adipisicing elit.

</p> 
<p className=" bg-accent font-extrabold text-sm lg:text-xl lg:w-1/2 mt-5 sm:w-2/4 md:1/3 text-white px-1 py-1 rounded-xl shadow-5xl ">{product.price}</p>
                 
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

<Footer/>
    </div>
  )
}

export default AllMenu