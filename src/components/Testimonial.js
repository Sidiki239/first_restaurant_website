import React from 'react'
import { UserIcon } from '@heroicons/react/24/outline';
function Testimonial() {


  const iconUser = ()=>{
  
    <svg xmlns="http://www.w3.org/2000/svg" class="icon  icon-tabler icon-tabler-user" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
  </svg>
    
  
  }
  const Mark = ({ children }) => {
    return (
      <mark className="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {children}
      </mark>
    );
  };

const data = [
    {
      content: (
        <>
      J'ai aimé leur coucous c'était le plus <strong>bon </strong> auquel j'ai goûté. </>
      ),
      author: "Jonh Doe",
      title: "VP Sales at Google",
      avatar:
        "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&ixlib=rb-1.2.1&q=80&w=100&h=100",
    },
    {
      content: (
        <>
      j'y suis allé une fois et depuis j'y vais <strong>chaque semaine</strong>
        .
        </>
      ),
      author: "Jonh Doe",
      title: "Lead marketer at Netflix ",
      avatar:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&crop=faces&fit=crop&w=100&h=100&q=80",
    },
    {
      content: (
        <>
       Je <strong>ne  cuisine même plus</strong> chez moi depuis ma première visite.
        </>
      ),
      author: "Jonh Doe ",
      title: "Co-founder of Acme Inc",
      avatar:
        "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&crop=faces&q=80",
    },
  ];
  return (
    <div className="pb-5 pl-5 pr-5">
    <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
      <div className="text-sm font-bold tracking-wider text-accent uppercase">
      Avis de nos clients
      </div>
      <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
   
      </h2>
      <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
        Quelques temoinages de nos clients sur nos plats
      </p>
    </div>
    
    <div className="container p-6 mx-auto mb-10 xl:px-0">
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal">
              Share a real <Mark>testimonial</Mark> that hits some
              of your benefits from one of your popular customer.
            </p>
            <div className="flex items-center mt-8 space-x-3">
              <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                <img
                  alt="Avatar"
                  src="https://user-assets.tailory.io/components/nglRA7ZQsfSGY4AWlHZh7sRqT573/1630486284368-user1.jpg"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="text-lg font-medium">
                  Sarah Steiner
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  VP Sales at Google
                </div>
              </div>
            </div>
          </div>
        </div> */}
    
        {data.map((item, index) => (
          <div
            className={
              index === 0 ? "lg:col-span-2 xl:col-auto" : ""
            }
            key={index}>
            <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                {item.content}
              </p>
              <div className="flex items-center mt-8 space-x-3">
              <i class="fa-solid fa-user text-accent"></i>
               
                <div>
                  <div className="text-lg font-medium dark:text-white text-black">
                    {item.author}
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testimonial