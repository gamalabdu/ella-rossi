import React from 'react'
import './styles.css'
import scared from '../../assets/videos/Scared To Love 3 Final Canvas NO.gif'

const Contact = () => {
  return (
    <div className='contact-container'>
      
      <img className='video' src={scared} />
      
          <h1>CONTACT</h1>

          <div style={{ height: "50%"}} className='contact-info'>

            <span className='mgmt'> MGMT: TRASHDIDTHIS@GMAIL.COM </span>
            {/* <span> MGMT: TRASHDIDTHIS@GMAIL.COM </span>
            <span> MGMT: TRASHDIDTHIS@GMAIL.COM </span>
            <span> MGMT: TRASHDIDTHIS@GMAIL.COM </span> */}
          </div> 


  </div>
  )
}

export default Contact