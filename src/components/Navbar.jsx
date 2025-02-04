import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center w-full items-center fixed top-0 z-50 bg-themeblack/90 border-bottom'>
      <div className='w-[1225px] justify-between items-center py-5 flex'>
        <h2 className='text-2xl font-extrabold tracking-widest text-themeWhite font-Pooppins'>VAULT</h2>

        <nav className='flex justify-center items-center gap-4'>
          <NavLink to='/' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Home</NavLink>
          <NavLink to='/about' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Deposite</NavLink>
          <NavLink to='/contact' className={'text-themeWhite hover:text-themeGreen transition-all ease-in duration-150 px-2 py-2 tracking-wide font-Pooppins text-sm font-semibold uppercase '}>Withdraw</NavLink>
        </nav>

        <button className='bg-themeGreen/80 hover:bg-themeGreen tracking-wider transition-all ease-in duration-300 cursor-pointer hover:scale-[1.04] rounded-full px-4 py-2 text-white text-sm font-Pooppins font-semibold'>
          Discord
        </button>
      </div>
    </div>
  )
}

export default Navbar
