import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext } from "react";
import { useState } from "react";



const GifContext = createContext();

const GifProvider = ({ children }) => {
    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);
    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState('gifs');
    const [favorites, setFavorites] = useState([]);
    return (<GifContext.Provider value={{ gf,gifs,setGifs,filter,setFilter,favorites,setFavorites}}>
         {children}
     </GifContext.Provider>)
}


export const GifState = () => useContext(GifContext);


export default GifProvider;