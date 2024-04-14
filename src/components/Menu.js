
import React, { useState } from 'react'
import Dash from './Dash'
import pasta_image from "../assets/pasta.jpg"
import MenuCard from './MenuCard'

const menuTypes = [ "All","breakfast","drinks","dinner","deserts"]
    

const menuData = [
    {
        img: "/assets/pasta.jpg", // Utilisation d'un chemin d'image relatif avec un slash initial
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"breakfast"
    },
    {
        img: "/assets/pasta.jpg",
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"dinner"
    },
    {
        img: "/assets/pasta.jpg",
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"deserts"
    },
    {
        img: "/assets/pasta.jpg",
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"breakfast"
    },
    {
        img: "/assets/pasta.jpg",
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"deserts"
    },
    {
        img: "/assets/pasta.jpg",
        title: "Delicious Cake",
        desc: "Pates Bolognaise avec des tomates et un jus d'orange",
        price: "$29.50",
        type:"breakfast"
    },
];




const Menu = () => {

  const currentPage ="Menu"

    
    const [menuType , setMenuType] = useState(menuData);
    const [activeMenu , setActiveMenu] = useState("All");
 
    const ChangeMenu = (menuType) => {

        
        switch (menuType) {
          case "All":
            setMenuType(menuData);
            setActiveMenu("All")
            break;
          case "breakfast":
            setMenuType(menuData.filter((p) => p.type === "breakfast"));
            setActiveMenu("breakfast")
            break;
          case "drinks":
            setMenuType(menuData.filter((p) => p.type === "drinks"));
            setActiveMenu("drinks")
            break;
            case "dinner":
             setMenuType(menuData.filter((p) => p.type === "dinner"));
             setActiveMenu("dinner")
                break;
            case "deserts":
            setMenuType(menuData.filter((p) => p.type === "deserts"));
         setActiveMenu("deserts")
         break;
          // Add other cases as needed
          default:
            setMenuType(menuData); 
            setActiveMenu("All")// Set to all items if the type is not recognized
            break;
        }
      };

   
  return (
    <div className='container pt-40'>
              <div className='space-y-4 w-fit mx-auto text-center'>
<h2 className='text-4xl md:text-6xl font-bold '>
Choose Best <span className='text-accent'>Nos menus menu</span>

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

 <ul className='mt-10 hidden sm:flex gap-6 md:gap-10 lg:gap-20 w-fit mx-auto mb-10'>
      {menuTypes.map((type) => (
        <li
          key={type}
          className={`${
            type === activeMenu ? 'bg-accent text-white' : ''
          } px-4 py-2 rounded-3xl text-[14px] sm:text-[16px]`}
          onClick={() => ChangeMenu(type)}>
          {type}
        </li>
      ))}
    </ul>
<div className='grid lg:grid-cols-[35%,1fr] gap-10 pt-10'>
<div className='w-fit mx-auto'>
    <img data-aos="zoom-in"
    data-aos-duration="300"
    data-aos-once="true"
    
    className="w-[100%] max-w-[400px] h-auto "
src={pasta_image} alt='pasta_image'

/>
</div>

<div className='grid w-fit max-auto sm:grid-cols-2 gap-4'>
{menuType.map((item,index)=> <MenuCard

key={index} img={item.img} title={item.title}
price={item.price}
desc={item.desc}
/>)}

</div>

</div>
    </div>
  )
}

export default Menu