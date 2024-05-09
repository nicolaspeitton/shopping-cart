import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-green-700 text-white font-medium'>
        <p className='flex justify-start m-4 '>Shopping Cart</p>
        
        <ul className='flex justify-end'>
            <li className='m-4 '><a href="#">Home</a></li>
            <li className='m-4 '><a href="#">Search</a></li>
            <li className='m-4 '><a href="#">Cart</a></li>
        </ul>
</nav>
  )
}

export default Navbar
