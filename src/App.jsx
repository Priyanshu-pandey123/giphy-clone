
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import Categories from './pages/Categories'
import SingleGif from './pages/SingleGif'
import Search from './pages/Search'
import Favourites from './pages/Favourites'



function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
      {
      path:'/',
      element:<Home/>
      },
      {
       path: '/category',
       element:<Categories/>
      },
      {
        path: '/:type/:slug',
        element:<SingleGif/>
      },
      {
        path: '/search/:query',
        element:<Search/>
      },
       {
        path: '/favorites',
        element:<Favourites/>
      
       }
    
    
    
    ]
    
   }])
   
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
