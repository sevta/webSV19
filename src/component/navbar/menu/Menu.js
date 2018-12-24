import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Trail , config } from 'react-spring'

export default function Menu({menuItem}) {
  return (
    <div className="menu flex">
      <Trail
        items={menuItem} 
        config={{
          tension: 150 ,
          friction: 14
        }}
        from={{
          opacity: 0,
          transform: 'translateY(4px)' 
        }}
        to={{
          opacity: 1,
          transform: 'translateY(0)'
        }}
      > 
        {item => props => (
          <Link style={props} to={item.path} className='menu-item ml-5 font-sans capitalize no-underline font-bold text-black'>{item.name}</Link>
        )}      
      </Trail>
    </div>
  )
}
