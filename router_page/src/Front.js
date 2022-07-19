import React from 'react'
import './Front.css'

const Front = () => {
  return (
    <div>
      <div id='front-page'>
          <div id='heading'>
            <h1>Make Upto 35$/hr</h1>
            <h1>Driving your car</h1>
          </div>
          <div id='form'>
            <h2>Apply Now</h2>
            <p>Enter your info, and then downlaod the lyft app to create your driver profile.</p>
            <p><input type='text' placeholder='First Name'></input></p>
            <p><input type='text' placeholder='Last Name'></input></p>
            <p><input type='text' placeholder='Email address'></input></p>
            <p><input type='text' placeholder='City'></input></p>
            <p><input type='text' placeholder='Phone number'></input></p>
            <p><input type='text' placeholder='Promocode(optional)'></input></p>
            <p><input type='Checkbox'></input>I agree to the <span>Lyft Terms</span></p>
            <button>BECOME A DRIVER</button>
            <p>Already Applied?<span> Check the status of your application here.</span></p>
          </div>
        </div>
        <div id='important'>
          <h1>See How Much You Can Make</h1>
          <p>How many hours do you want to drive this week?</p>
          <p>
            <input id='h' type='text' placeholder='Hours'></input>
            <input id='c' type='text' placeholder='City'></input>
            <button>CALCULATE</button>
          </p>
        </div>
    </div>
  )
}

export default Front