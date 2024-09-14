import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/nav'>Nav</Link></li>
            <li><Link to='/page'>Page</Link></li>
        </ul>
    </div>
  )
}

export default Menu