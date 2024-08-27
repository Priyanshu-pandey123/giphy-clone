

import React from 'react'
import { Link } from 'react-router-dom';


const Gif = ({ gif,hover=true }) => {
  //console.log(gif);
  const { images, username } = gif;
  //console.log(images?.fixed_width?.webp,username)
  return (
    <Link to={`/${gif.type}/${gif.slug}`}>
      <div className='w-full mb-2 relative  cursor-pointer group aspect-video'>
          <img
        src={images?.fixed_width?.webp}
        alt={username}
        className='w-full object-cover rounded transition-all duration-300'
        />
        <div className='absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end p-2 '>
          <img
            src={gif?.user?.avatar_url}
            alt={gif?.user?.display_name}
            className='h-8 rounded-full'
          />
          <span>{gif?.user?.display_name}</span>
        </div>


      </div>
    
      
      
    </Link>
  )
  }

export default Gif