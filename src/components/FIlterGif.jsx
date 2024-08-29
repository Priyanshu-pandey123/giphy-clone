
import React, { useState } from 'react'
import filters from '../contsant/filterData'
import { HiMiniArrowTrendingUp } from 'react-icons/hi2'
import { GifState } from '../context/context';

const FIlterGif = () => {
  
  const { filter, setFilter } = GifState();
  const [showColor, setShowColor] = useState(false);
  console.log(filter)


  // const handleClick = (f,i) => {
  //   setFilter(f.value)
  //   setShowColor(true)
  // }
  console.log(filters)
  return (
    <div className='flex justify-between'>
      <div> 
        <HiMiniArrowTrendingUp size={35} className='text-green-500' />
        <span>Trending</span>
      </div>  
       <div>
        <span className='flex rounded-full border-2 border-white w-full'>
           {
              filters.map((f,i) => <span
              className={`my-2 px-2 py-2 rounded-full w-full cursor-pointer ${filter===f.value ? f.background : 'bg-transparent'}`}
               onClick={()=>setFilter(f.value)}
            >{f.title}</span>)
          }
         </span>
      </div>
      

    f</div>
  )
}

export default FIlterGif