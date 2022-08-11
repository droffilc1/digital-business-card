import React from 'react'

function Info() {
  return (
    <div className='info'>
      <img src='assets/profile.png' alt='profile'/>
      <h3>Jane Doe</h3>
      <h6>Software Developer</h6>
      <p>janedoe.website</p>
      <div className='btn'>
        <button className='email'><img src='assets/Mail.png' alt=''/> Email</button>
        <button className='linkedin'><img src='assets/linkedin.png' alt=''/> LinkedIn</button>
      </div>
    </div>
  )
}

export default Info