import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>

          <div className='Navbar-left'>
            <h1></h1>
           </div>

        <div className='Navbar-center'>
          
                 <a href="#section" className="btn">About</a>
                 <a href="#Services">services</a>
                 <a>Experien</a>
                 <a href='#Portfolio'>portfolio</a>
                 
        </div>
        
        <div className='Navbar-rigth'>
        <button className='button-contact'>Contact</button>
           </div>




    </div>
  )
}

export default Navbar