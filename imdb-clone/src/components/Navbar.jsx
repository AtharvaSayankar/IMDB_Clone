import React from 'react'
import Logo from '../assets/movielogo.jpg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-2'>
      <img className='w-[50px]' src={Logo} alt="" />

      <Link to="/" className='text-blue-400 text-xl font-bold'>Movies</Link>

      <Link to="/watchlist" className='text-blue-400 text-xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar
