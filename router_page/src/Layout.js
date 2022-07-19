import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <div id='front'> <Link to='/'><img src='./logo.png' alt='logo'></img></Link></div>
            <div id='left'><Link to='/Cities'>Cities</Link>
                <Link to='/Drivers'>Driver</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Partners'>Partners</Link>
                <Link to='/Help'>Help</Link>
            </div>
        </nav>
       
            <Outlet></Outlet>
        
    </div>
  )
}

export default Layout