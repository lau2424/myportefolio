import React from 'react'
import '../Styles/Navbar.scss';
import logo from '../Images/chat.png';
import github from '../Images/github.png';
import mailme from '../Images/email.png';
import linkedin from '../Images/linkedin.png';

export default function Navbar() {
  return (
    <div className='nav-parent'>
      <div className="nav-top"><img src={logo} alt="Logo" /> <h3>WEB DEVELOPPER</h3></div>
      <div className="nav-buttom">
        <a href="https://github.com/lau2424" target="_blank">
        <img src={github} alt="github" />
        </a>
        <a href="https://linkedin.com/in/laurentlarfa/" target="_blank">
        <img src={linkedin} alt="linkedin" />
        </a>
        <a href="mailto:Laurent.Larfa@gmail.com?body=Hey, I'd like to reach you" target="_blank">
        <img src={mailme} alt="mail" />
        </a>
      </div>
    </div>

  )
}
