
import React, { useEffect, useState } from 'react'
import { HiEllipsisVertical, HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { GifState } from '../context/context';



const Header = () => {
   
    const [categoires, SetCategories] = useState([]);
    const [showcategories, setShowCategories] = useState(false);
    const { gf, gifs, setGifs } = GifState();
    
    const fetchData =async () => {
        const { data } = await gf.categories();
        SetCategories(data);
        console.log(categoires)
    } 


    useEffect(() => {
        fetchData();
    },[])

  return (
      <nav>
          <div className='relative flex gap-4 justify-between items-center'>
              <Link to="/" className='flex gap-1'>
                  <img
                      src='/logo.svg'
                      alt="Logo"
                      className='w-8'
                  
                  />
                  <h1 className='text-4xl'>GIPHY</h1>
              
              </Link>
              {/* categoires */}
              
              <div className=' bont-bold text-md  gap-2 flex items-center'>
                  
                  {/* // <Link className='px-4 py-1  hidden lg:block border-b-4 hover:gradient'>Prince</Link> */}
                  {
                      categoires?.slice(0, 5)?.map((c,) => <Link
                          to={`/${c.name_encoded}`}
                          key={c?.gif?.id}
                          className='hidden lg:block'
                  
                       >{c.name}
                      </Link>)
                  }
                  


              <button className='' onClick={()=>setShowCategories(!showcategories)}>
                <HiEllipsisVertical size={35} className={`py-1 hidden lg:block border-b-4 hover:gradient  ${showcategories ?"gradient" :'' } `} />
              </button>
              
              <div className='h-9 px-6 bg-gray-500 pt-2 cursor-pointer rounded'>
                  <Link to='/favorites'>Favorite GIf</Link>
              </div>

              <button>
                  <HiMiniBars3BottomRight size={30} className='text-sky-400 block lg:hidden'/>
              </button>      
           </div>
       
           
          {/* popup */}
          { 
              showcategories && (
                  <div className='absolute right-0 top-16 px-10 pt-6 pb-9 w-full gradient  z-20 '>
                      <span>Categories</span>
                      <hr />
                      <Link>Prince</Link>
                  </div>
             )
              
          }
             </div>
        {/* search */}
      </nav>
  )
}

export default Header