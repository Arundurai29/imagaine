import React from 'react'
import '../assets/css/Home.scss';

import twiter from '../assets/image/icons/Vector.png';
import telegram from '../assets/image/icons/telegram.png';
import scan from '../assets/image/icons/etherscan.png';
import logo from '../assets/image/logo/LOGO.png';

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg fixed-top navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Story</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tokenomics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">GPU</a>
        </li>
       
      </ul>
    </div>
    <div className='soical-links' >
        <ul>
            <li>
                <a href='https://twitter.com'><img src={twiter} /></a>
            </li>
            <li>
                <a href='https://twitter.com'><img src={telegram} /></a>
            </li>
            <li>
                <a href='https://twitter.com'><img src={scan} /></a>
            </li>
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
