import React from "react";
import "./header.css";
import logo from "../../media/logo.svg";
import connect from "../../media/connect.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Web3 from "web3";

function Header() {
  const [connected, setConnected] = useState(false);
  const [userAddress, setUserAddress] = useState(null);
  const [buttonText, setButtonText] = useState('Connect Wallet');


  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  async function connectWallet() {
    try {
      const web3 = new Web3(window.ethereum);

      // Get the user's accounts
      const accounts = await web3.eth.requestAccounts();

      // Check if the user is on the Arbitrum chain
      const chainId = await web3.eth.getChainId();
      if (chainId !== 42161) {
        setButtonText('Wrong Network');
        return;
      }

      // Update state with the user's address
      setUserAddress(accounts[0]);
      setButtonText(shortAddress(accounts[0]));
    } catch (error) {
      console.error(error);
    }
  }


  const shortAddress = (address) => {
    return address ? address.slice(0, 6) + "..." + address.slice(-5) : "";
  };

  return (
    <header>
      <div className="header-wrap">
        <div className="header-wrap-logo">
          <img src={logo}></img>
        </div>

        <ul className="list-tabs">
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/presale">Presale</Link>
          </li>
          <li>
            <Link to="/stake">Stake</Link>
          </li>
          <li>
            <Link to="/pad">Launchpad</Link>
          </li>
          <li>
            <Link to="/vaults">Vaults</Link>
          </li>
        </ul>

        <div className="connect-btn">
          <button onClick={() => window.ethereum && connectWallet()}>
            <img src={connect}></img>
            <p>{userAddress ? shortAddress(userAddress) : buttonText}</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
