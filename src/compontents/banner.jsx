import React from "react";
import "../assets/css/Home.scss";
import CopyToClipboard from "./clickboard";
import CountdownTimer from "./count";

import ai from "../assets/image/home/ai.png";
import face from "../assets/image/home/banner-face.png";
import check from "../assets/image/home/check.png";
function Banner() {
  const textToCopy = "0x62126ec407eae34393ab88b1f5d57e8566e570be";
  const endDate = new Date('03/22/2024');
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="banner-content">
                <h1 className="heading">
                  imag
                  <img src={ai} />
                  ne
                  <span>Innovate, Create, Auction</span>
                </h1>
                <h2>
                  GPU AI-based decentralised image processing service and Art
                  auction gallery onchain.
                </h2>
                <p>Testnet soon in 10 days</p>
                <div className="btn-container">
                  <a href="#" class="th-btn th">
                    LAUNCH APP
                  </a>
                  <a href="#" class="th-btn th">
                    BUY
                  </a>
                </div>
                <div className="copclick">
                  <h2>$IMAG</h2>
                  <p>{textToCopy}</p>
                  <CopyToClipboard text={textToCopy} />
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="glass-effect">
                <div className="float1"></div>
                <div className="float2">
                  <img src={face} />
                </div>
                <div className="float3">
                  <h3>GPU AI</h3>
                  <p>Artistry</p>
                </div>
                <div className="float4">
                  <img src={check} />
                  <div className="f4-content">
                    <p>IMAG #6969</p>
                    <span>imagAIne</span>
                  </div>
                </div>
                <div className="float5">
                  <div className="f5-content1">
                    <h4>
                    5.758 ETH
                    </h4>
                    <p>Latest Bid</p>
                  </div>
                  <div className="f5-content2">
                    <h4>
                    $5758.31
                    </h4>
                    <p>+12.45%</p>
                  </div>
                </div>
                <div className="float6">
                  <h4>
                  LAUNCH
                  </h4>
                <p>
                Soon On
                </p>
                </div>
                <div className="float7">
                <CountdownTimer endDate={endDate} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
