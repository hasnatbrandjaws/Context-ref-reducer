import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const logoutfeature = () => {
    localStorage.setItem("isloggedin" , JSON.stringify(false))
    window.location.href = "/"
    alert("Logged Out")
    
  }
  return (
    <div className='bg-gray-800 text-white shadow-md p-4'>
    <nav className='flex justify-between items-center'>
      <ul className='flex gap-6'>
        <li><Link to="/" className='hover:text-blue-400 transition duration-300'>Home</Link></li>
        <li><Link to="/about" className='hover:text-blue-400 transition duration-300'>About</Link></li>
        <li><Link to="/products" className='hover:text-blue-400 transition duration-300'>Products</Link></li>
        <li><Link to="/register" className='hover:text-blue-400 transition duration-300'>Register</Link></li>
        <li><Link to="/login" className='hover:text-blue-400 transition duration-300'>Login</Link></li>
        <li><Link to="/refpractice" className='hover:text-blue-400 transition duration-300'>Ref Practice</Link></li>
        <li><Link to="/contextpractice">Context Practice</Link></li>
      </ul>
      <button 
        onClick={logoutfeature} 
        className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300'>
        Logout
      </button>
    </nav>
  </div>
  )
}

export default Header