
import React, { useContext } from 'react'
import { GifState } from '../context/context';



const Home = () => {
  const { name ,gf} = GifState();
  console.log(name,gf);
  return (
    <div>
      Home{ name}
    </div>
  )
}

export default Home