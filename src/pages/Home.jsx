
import React, { useContext } from 'react'
import { GifState } from '../context/context';



const Home = () => {
  const name = GifState();
  console.log(name);
  return (
    <div>
      Home{ name}
    </div>
  )
}

export default Home