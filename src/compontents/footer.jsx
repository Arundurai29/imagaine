import React from 'react'
import "../assets/css/Home.scss";

import follow from "../assets/image/home/FOLLOW US.png";
import insta from "../assets/image/home/insta.png";
import twiter from '../assets/image/icons/Vector.png';
import telegram from '../assets/image/icons/telegram.png';
function Footer() {
  return (
    <>
      <footer>
      <section class="footer">
        <h1 class="double-line-text">LOGO</h1>
        <div class="container-fluid footer-con">
          <img src={follow} alt="" />
        </div>
        <div class="social">
          <img class="insta" src={insta} alt="" />
          <img class="insta"src={twiter} alt="" />
          <img class="insta" src={telegram} alt="" /><br />
          <p>(C) imagAIne. All Rights Reserved, 2024</p>
        </div>
      </section>
    </footer>
    </>
  )
}

export default Footer
