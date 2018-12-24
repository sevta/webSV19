import React, { Component } from 'react'

export default class Dock extends Component {
  render() {
    return (
      <div className='os-dock-container fixed flex justify-center pin-b w-full text-center'>
        <div className="os-dock bg-white p-3 rounded">dock</div>
      </div>
    )
  }
}
