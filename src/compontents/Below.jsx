import React from "react";
import "../assets/css/Home.scss";
import Footer from "./footer";
import CopyToClipboard from "./clickboard";

import team1 from "../assets/image/home/team-img1.png";
import team2 from "../assets/image/home/team-img2.png";
import team3 from "../assets/image/home/team-img3.png";
import team4 from "../assets/image/home/team-img4.png";
import vector2 from "../assets/image/home/vector2.png";
import vector1 from "../assets/image/home/vector1.png";

import btn1 from "../assets/image/home/btn1.png";
import btn2 from "../assets/image/home/btn2.png";
import btn3 from "../assets/image/home/btn3.png";
import btn4 from "../assets/image/home/btn4.png";
import token from "../assets/image/home/TOKENOMICS-img.png";
import group1 from "../assets/image/home/Group 165.png";
import group2 from "../assets/image/home/Group 166.png";
import group3 from "../assets/image/home/Group 167.png";
import group4 from "../assets/image/home/Group 168.png";
import logo1 from "../assets/image/home/logo1.png";
import logo2 from "../assets/image/home/logo2.png";
import logo3 from "../assets/image/home/logo3.png";
import logo4 from "../assets/image/home/logo4.png";
function Belowbody() {
  const textToCopy = "0x62126ec407eae34393ab88b1f5d57e8566e570be";
  return (
    <div>
      <section class="team text-center pt-5">
        <div className="token">
          <div class="container">
            <div class="row">
              <div class="team-head">
                <h2 class="text-white border-gradient border-gradient-purple">
                  Team
                </h2>
              </div>
              <div class="team-card pt-5">
                <div class="border-gradient border-gradient-purple team-img">
                  <img src={team1} alt="" />
                  <h3>Andrew Mathew</h3>
                  <p>Co-Founder</p>
                </div>
                <div class="border-gradient border-gradient-purple team-img">
                  <img src={team2} alt="" />
                  <h3>leena samuel</h3>
                  <p>Creative Head</p>
                </div>
                <div class="border-gradient border-gradient-purple team-img">
                  <img src={team3} alt="" />
                  <h3>Sam kieran</h3>
                  <p>Co-Founder</p>
                </div>
                <div class="border-gradient border-gradient-purple team-img">
                  <img src={team4} alt="" />
                  <h3>Ashok jain</h3>
                  <p>Design Lead</p>
                </div>

                <img class="vector1" src={vector2} alt="" />
                <img class="vector2" src={vector1} alt="" />
              </div>

              <div class="team-head">
                <h2 class="text-white border-gradient border-gradient-purple mt-5">
                  PARTNERS
                </h2>
              </div>
              <div class="team-card1">
                <div class="team-img1 mt-5">
                  <img src={logo1} alt="" />
                  <img src={logo2} alt="" />
                  <img src={logo3} alt="" />
                  <img src={logo4} alt="" />
                </div>
                
              </div>

              <div class="team-head">
                <h2 class="text-white border-gradient border-gradient-purple mt-5">
                  TOKENOMICS
                </h2>
              </div>
              <div className="tokens">
                <div class="col-lg-4 tokenomics mt-5">
                  <img class="btn-img" src={btn1} alt="" />
                  <img class="btn-img" src={btn2} alt="" />
                  <img class="btn-img" src={btn3} alt="" />
                  <img class="btn-img" src={btn4} alt="" />
                </div>
                <div class="col-lg-4 mt-5 tokenomics1">
                  <img src={token} alt="" />
                </div>
                <div class="col-lg-4 mt-5 tokenomics">
                  <img class="btn-img" src={group1} alt="" />
                  <img class="btn-img" src={group2} alt="" />
                  <img class="btn-img" src={group3} alt="" />
                  <img class="btn-img" src={group4} alt="" />
                </div>
              </div>
              <div className="copy copy1">
                <div className="copclick copclick1">
                  <h2>$IMAG</h2>
                  <p>{textToCopy}</p>
                  <CopyToClipboard text={textToCopy} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Belowbody;
