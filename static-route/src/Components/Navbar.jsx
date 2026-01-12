import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav  className='bg-blue-500 py-2 px-8 flex items-center justify-between'>

        <a href="/"><h1 className='text-lg text-white font-bold'  >React-Router</h1></a>
        <ul className='flex space-x-5 text-white font-semibold'>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                 <Link to="/about">About</Link>
            </li>
            <li>
                 <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
