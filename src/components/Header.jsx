import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const logoutfeature = () => {
    localStorage.setItem("isloggedin" , JSON.stringify(false))
    window.location.href = "/"
    alert("Logged Out")
    
  }
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        <button onClick={logoutfeature}>Logout</button>
    </div>
  )
}

export default Header