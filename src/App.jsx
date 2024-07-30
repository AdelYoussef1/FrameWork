import { useState } from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import { createBrowserRouter } from 'react-router-dom'

import './App.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import NotFound from './Components/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
   {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
   {
    path:"*",
    element:<h1 className="bg-red-700 text-9xl">404</h1>
   }
    ]
   }
    
  ])
  return (
<RouterProvider router={router}/>
  )
}

export default App
