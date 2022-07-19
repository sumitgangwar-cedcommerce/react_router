import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <div id='logo'>
                <Link to='/'><img src='./edu.png' alt='logo'></img></Link>
            </div> 
            <div id='link-only'>
                <Link to='/'>Home</Link>
                <Link to='/OurProducts'>Our Product</Link><i class="fa-solid fa-caret-down"></i>
                <Link to='/ContactUs'>Contact Us</Link>
            </div>
        </nav>

        <Outlet></Outlet>
    </div>
  )
}

export default Layout