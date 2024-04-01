
import React from 'react'


const ServicesCard = ({img , title, desc}) => {
  return (
    <div>
        <div className='space-y-3 text-center'>
<img alt={title} className='mx-auto' src={img} width={120} height={100}/>
<div className=' sm:items-center mt-4 mx-auto '>
<b>{title}</b>
<div className='flex gap-2 w-fit mx-auto mt-2 justify-center'>
<div className='bg-accent w-[7px] h-[7px] rounded-full'/>
<div className='bg-accent w-[7px] h-[7px] rounded-full'/>
<div className='bg-accent w-[7px] h-[7px] rounded-full'/>
</div>
<p className='text-[14px] text-gray-700'>{desc}</p>
</div>
</div>
    </div>
  )
}

export default ServicesCard