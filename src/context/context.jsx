import { createContext, useContext } from "react";
import { useState } from "react";



const GifContext = createContext();

const GifProvider = ({ children }) => {
    const name = "prince "
    const apiKey = import.meta.env.VITE_GIPHY_KEY;
    console.log(apiKey);
   return( <GifContext.Provider value={name}>
         {children}
     </GifContext.Provider>)
}


export const GifState = () => useContext(GifContext);


export default GifProvider;