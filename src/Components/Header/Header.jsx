import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <nav className="border-l-sky-400 bg-sky-400">
        <ul className='navbar flex p-2 bg-orange-900'>
           <li>
            <NavLink to="" className="text-black border rounded p-3 border-zinc-900">Home</NavLink>
           </li>
           <li>
            <NavLink to="/About" className="text-black border rounded p-3 border-zinc-900">About</NavLink>
           </li>
           <li>
            <NavLink to="/Portfolio" className="text-black border rounded p-3 border-zinc-900">Portfolio</NavLink>
           </li>
           <li>
            <NavLink to="/Contact" className="text-black border rounded p-3 border-zinc-900">Contact</NavLink>
           </li>
        
        </ul>
    </nav>
    </>
  )
}
