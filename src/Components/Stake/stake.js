import React from "react";

import "./stake.css";
import "../Header/header.css";
import "../Dashboard/dashboard.css";

import twitter from "../../media/twitter.svg";
import discord from "../../media/discord.svg";
import github from "../../media/github.svg";
import token from "../../media/token.svg";
import estoken from "../../media/estoken.svg";

function stake() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="title-one">
          <div className="title-container">
            <h1>Stake</h1>
          </div>
          <div className="paragraph-container">
            <p>Withdraw your FORT from our legacy stake pool.</p>
          </div>
        </div>
        <div className="card-stake-holder">
          <div className="card-stake">
            <div className="card-stake-title">
              <img src={token}></img>
              <h4>FORT</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Base APR </h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Your boosted APR</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>User's total RP</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Rewards </h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>RP Earned</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Total Protocol Revenue</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="connect-stake">

                <button>
                    Connect Wallet
                </button>

              </div>
            </div>
          </div>

          <div className="card-stake">
            <div className="card-stake-title">
              <img src={estoken}></img>
              <h4>esFORT</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Base APR </h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Your boosted APR</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>User's total RP</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Rewards </h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>RP Earned</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>$-</h4>
                </div>
                <div className="row-3">
                  <h3>Total Protocol Revenue</h3>
                  <h4>$-</h4>
                </div>
              </div>
              <div className="connect-stake">

                <button>
                    Connect Wallet
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <img src={twitter}></img>
        <img src={discord}></img>
        <img src={github}></img>
      </footer>
    </main>
  );
}

export default stake;
