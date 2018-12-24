import React, { Component } from 'react'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoFacebook } from 'react-icons/io'
export default class Footer extends Component {
  state = {
    socmed: [
      {
        type: 'ig' ,
        url: 'https://www.instagram.com/sevtasaputra/' ,
        icon: <FiInstagram />
      } ,
      {
        type: 'fb' ,
        url: 'https://www.facebook.com/sev1993' ,
        icon: <IoLogoFacebook />
      } ,
    ]
  }

  render() {
    return (
      <div className='container mx-auto my-10 flex items-center justify-center flex-col'>
        <div className="text-sm text-center font-sans text-grey-darker">© 2018 Sevta Saputra. ALL RIGHTS RESERVED </div>
        <div className="socmed-icon-container flex">
          {this.state.socmed.map((item , i) => (
            <IconSocmed key={i} icon={item.icon} url={item.url} />
          ))}
        </div>
      </div>
    )
  }
}

function IconSocmed({icon , url}) {
  return (
    <a target="__blank" href={url} className='icon mx-2 cursor-pointer mt-10 text-xl text-black'>{icon}</a>
  )
}