import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div id='icons'>
            <span className='f'><i className="fa-brands fa-facebook fa-1x"></i></span>
            <span className='i'><i className="fa-brands fa-instagram fa-1x"></i></span>
        </div>
        <div if='img'>
            <img src='./Home.png' alt='Home'></img>
        </div>
    </div>
  )
}

export default Home