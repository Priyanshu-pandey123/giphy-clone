
import React, { useContext, useEffect } from 'react'
import { GifState } from '../context/context';
import Gif from '../components/Gif';



const Home = () => {
  const { gf, gifs, setGifs, filter, setFilter } = GifState();
  
  const fetchData = async() => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: 'g'
    });
    setGifs(data);
    console.log(gifs);
  }
  
  useEffect(() => {
    fetchData();
  },[filter])

  return (
    <div>
      <img
        src='/banner.gif'
        alt="not found"
        className='mt-3 rounded w-full'
      />

      {/* FilterGifs */}
   
      
      {/* gifs{massionar layout} */}
       <div className= ' mt-2 columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
        {
          gifs.map((gif) => <Gif key={gif?.id}  gif={gif }  />)
        }
      </div>

    </div>
  )
}

export default Home