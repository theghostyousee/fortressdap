import React from "react";

import "./vaults.css";
import "../Header/header.css";
import "../Dashboard/dashboard.css";
import "../Stake/stake.css";

import twitter from "../../media/twitter.svg";
import discord from "../../media/discord.svg";
import github from "../../media/github.svg";

import eth from "../../media/eth.svg";
import usdc from "../../media/usdc.svg";
import arb from "../../media/arb.svg";
import bitcoin from "../../media/bitcoin.svg";

function vaults() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="title-one">
          <div className="title-container">
            <h1>Vault</h1>
          </div>
          <div className="paragraph-container">
            <p>
              Users receive fortTokens(ex. fortUSDC) as receipt tokens for their
              positions. fortTokens appreciate in value against the underlying
              assets at APY rate.
            </p>
          </div>
        </div>
        <div className="card-stake-holder">
          <div className="card-stake">
            <div className="card-stake-title">
              <img src={eth}></img>
              <h4>ETH</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$1,744.06</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>0.00000 ETH ($0.00000)</h4>
                </div>
                <div className="row-3">
                  <h3>APY </h3>
                  <h4>15.03%</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>0.00000 USDC ($0.00000)</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>0.00000 / 0.00000 USDC</h4>
                </div>
                <div className="row-3">
                  <h3>Deposit Fee</h3>
                  <h4>0.8%</h4>
                </div>
              </div>
              <div className="connect-stake">
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>

          <div className="card-stake">
            <div className="card-stake-title">
              <img src={usdc}></img>
              <h4>USDC</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$1.00</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>0.00000 ETH ($0.00000)</h4>
                </div>
                <div className="row-3">
                  <h3>APY </h3>
                  <h4>15.03%</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>0.00000 USDC ($0.00000)</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>0.00000 / 0.00000 USDC</h4>
                </div>
                <div className="row-3">
                  <h3>Deposit Fee</h3>
                  <h4>0.8%</h4>
                </div>
              </div>
              <div className="connect-stake">
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-stake-holder-bottom">
          <div className="card-stake-bottom">
            <div className="card-stake-title">
              <img src={arb}></img>
              <h4>ARB</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$1,25</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>0.00000 ETH ($0.00000)</h4>
                </div>
                <div className="row-3">
                  <h3>APY </h3>
                  <h4>45.03%</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>0.00000 ARB ($0.00000)</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>0.00000 / 0.00000 ARB</h4>
                </div>
                <div className="row-3">
                  <h3>Deposit Fee</h3>
                  <h4>0.8%</h4>
                </div>
              </div>
              <div className="connect-stake">
                <button>Connect Wallet</button>
              </div>
            </div>
          </div>
          <div className="card-stake-bottom">
            <div className="card-stake-title">
              <img src={bitcoin}></img>
              <h4>BTC</h4>
            </div>
            <div className="card-stake-content">
              <div className="wrap-row">
                <div className="row-3">
                  <h3>Price</h3>
                  <h4>$27,578.01</h4>
                </div>
                <div className="row-3">
                  <h3>Wallet</h3>
                  <h4>0.00000 ETH ($0.00000)</h4>
                </div>
                <div className="row-3">
                  <h3>APY </h3>
                  <h4>45.03%</h4>
                </div>
              </div>
              <div className="wrap-row">
                <div className="row-3">
                  <h3>User Staked</h3>
                  <h4>0.00000 BTC ($0.00000)</h4>
                </div>
              </div>
              <div className="wrap-row-2">
                <div className="row-3">
                  <h3>Total Saked in Pool</h3>
                  <h4>0.00000 / 0.00000 BTC</h4>
                </div>
                <div className="row-3">
                  <h3>Deposit Fee</h3>
                  <h4>0.8%</h4>
                </div>
              </div>
              <div className="connect-stake">
                <button>Connect Wallet</button>
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

export default vaults;
