import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
               <li><Link to='/'>Home</Link> </li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <li><Link to='/Event'>Event</Link></li>
                <li><Link to='/Feedback'>Feedback</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </nav>
        
        <Outlet />
    </div>
  )
}

export default Layout