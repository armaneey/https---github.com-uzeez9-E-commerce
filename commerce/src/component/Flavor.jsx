import React from 'react'
import './Flavor.css'
import image from '../assets/image.png'

function Flavor () {
  return (
    
   <section className='Flavor'>
    <div className='flavor-contain'>
        <h1>Flavor and Success in Every Can</h1>
        <img src={image} alt='Canned drink' className='overlay' />

        <span className='name'>The Guardian</span>
    </div>
   </section>
  )
}

export default Flavor
