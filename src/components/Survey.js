
import React from 'react'
import surveyImageq from "../assets/survey.jpg"
const Survey = () => {

  const surveyImage= "https://us.123rf.com/450wm/yupiramos/yupiramos1712/yupiramos171206729/91214629-cartoon-smiling-man-young-character-portrait-vector-illustration.jpg?ver=6"
  return (
    <div className='container pt-10  mb-10'>
 <div className='grid lg:grid-cols-[50%,1fr] gap-20'>
<div>
<img
className='w-[100%] h-auto lg:w-auto lg:h-[90vh]'
src={surveyImage}
width={1000}
height={600}
alt='survey image'
/>
</div>
<div >
<center>
<h2 className='text-4xl md:text-6xl font-bold pt-3 text-black dark:text-white'>
Contactez  <span className='text-accent'>Nous !!</span>

</h2></center><br/><br/>
<center><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit
placeat atque animi beatr</p></center>
<div className='   flex-cols justify-between gap-10 pt-5 pl-5  '>
<div className='text-gray-700 flex flex-row justify-start gap-4'>
<i  class="fa-solid fa-location-dot fa-beat text-accent text-4xl lg:text-7xl "></i>
<b className='lg:text-5xl text-xl ' >Adresse, Agadir 80000</b>


</div><br/>
<div>
<div className='text-gray-700 flex flex-row justify-start gap-4'>
<i style={{marginLeft:0}} class="fa-solid fa-phone fa-beat text-accent text-4xl lg:text-6xl  "></i> 
 <b className='lg:text-4xl text-black dark:text-white' >(555) 412-1234</b>
</div>

</div>
<br/>
<div >
<iframe style={{width:"100%",height:300,background:"lavender"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6882.246905122674!2d-9.523372699999978!3d30.40423910000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1711816560508!5m2!1sfr!2sma"   allowfullscreen="true"  referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
</div>


 </div>


</div>
  )
}

export default Survey