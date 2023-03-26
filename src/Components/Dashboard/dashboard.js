import React from "react";
import "./dashboard.css";
import "../Header/header.css";

import arb from "../../media/arb.svg";
import token from "../../media/token.svg";
import eth from "../../media/eth.svg";
import usdc from "../../media/usdc.svg";
import twitter from "../../media/twitter.svg";
import discord from "../../media/discord.svg";
import github from "../../media/github.svg";
function Dashboard() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="title-one">
          <div className="title-container">
            <h1>Stats</h1>
            <img src={arb}></img>
          </div>
        </div>

        <div className="card-holder">
          <div className="card">
            <div className="card-title">
              <h3>Overview</h3>
            </div>
            <div className="card-content">
              <div className="row-1">
                <h3>Total Value Locked</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>Total GLP Managed</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>Total Revenue Collected </h3>
                <h4>$-</h4>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">
              <h3>Asset stats</h3>
            </div>
            <div className="card-content">
              <div className="row-1">
                <h3>Total In Vaults</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>Vaults' underlying GLP</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>GLP in Reserve</h3>
                <h4>$-</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="title-one">
          <div className="title-container">
            <h1>Tokens</h1>
            <img src={arb}></img>
          </div>
          <div className="paragraph-container">
            <p>Platform and Fortress index tokens.</p>
          </div>
        </div>
        <div className="card-long-holder">
          <div className="card-long">
            <div className="card-title">
                <img src={token}></img>
              <h4>FORT</h4>
            </div>
            <div className="card-content">
              <div className="row-2">
                <h3>Price</h3>
                <h4>$-</h4>
              </div>
              <div className="row-2">
                <h3>Total Staked</h3>
                <h4>$-</h4>
              </div>
              <div className="row-2">
                <h3>Circulating Supply</h3>
                <h4>$-</h4>
              </div>
              <div className="row-2">
                <h3>Total Supply</h3>
                <h4>$-</h4>
              </div>
              <div className="row-2">
                <h3>Circulating Market Cap</h3>
                <h4>$-</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="button-area">
            <button>Buy-Uniswap</button>
            <button>Chart</button>
        </div>
        <div className="card-holder">
          <div className="card-short">
            <div className="card-title">
                <img src={usdc}></img>
              <h3>USDC</h3>
            </div>
            <div className="card-content">
              <div className="row-1">
                <h3>Price</h3>
                <h4>$1.00</h4>
              </div>
              <div className="row-1">
                <h3>Pool</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>Weight </h3>
                <h4>%</h4>
              </div>
            </div>
          </div>

          <div className="card-short">
            <div className="card-title">
                <img src={eth}></img>
                <h3>ETH</h3>
            </div>
            <div className="card-content">
            <div className="row-1">
                <h3>Price</h3>
                <h4>$1,743.27</h4>
              </div>
              <div className="row-1">
                <h3>Pool</h3>
                <h4>$-</h4>
              </div>
              <div className="row-1">
                <h3>Weight </h3>
                <h4>%</h4>
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

export default Dashboard;
