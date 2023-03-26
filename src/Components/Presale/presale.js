import React, { useState, useEffect } from "react";

import "./presale.css";
import "../Header/header.css";
import "../Dashboard/dashboard.css";
import "../Stake/stake.css";
import contractABI from "./contractABI.json";
import Web3 from "web3";

import eth from "../../media/eth.svg";
import token from "../../media/token.svg";
import arrow from "../../media/arrow.svg";
import down from "../../media/down.svg";

function Presale() {
  const gradientStyle = {
    background: "linear-gradient(to bottom right, #FFFF33, #FFCC00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);
  const [balance, setBalance] = useState(0);
  const [stackValue, setStackValue] = useState("");

  const ETH_TO_STACK_RATIO = 35634.48;

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

  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    const formattedValue = parseFloat(value).toFixed(1);

    setBalance(formattedValue);
  };

  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0x0E4495af4BF833BEaa2450f6599CefBeD53F17D3";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");

    try {
      const result = await contract.methods.buyPresale().send({
        from: sender,
        value: value,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  useEffect(() => {
    handleMaxClick();
  }, []);

  return (
    <main>
      <div className="main-wrapper">
        <div className="title-presale">
          <h3>FORTRESS PRESALE</h3>
        </div>
        <div className="card-presale">
          <div className="card-presale-header">
            <div className="image-converter">
              <img src={eth}></img>
              <h2>ETH</h2>
              <img src={arrow}></img>
              <img src={token}></img>
              <h2 style={gradientStyle}>FORT</h2>
            </div>
            <div className="info-price">
              <h5>1 FORT = 0.05 USDC</h5>
            </div>
          </div>
          <div className="card-presale-content">
            <div className="timer">
                <p>Contribute in ETH</p>
              {/* <p>Time left:</p>
              <p>00:00:00</p> */}
            </div>

            <div className="input-buy">
              <input
                type={"number"}
                placeholder="0"
                value={amount}
                onChange={handleAmountChange}
              ></input>
              <p className="balance-user">Your contribution</p>

              <div className="eth-pointer">
                <img src={eth}></img>
                <h3>ETH</h3>
              </div>
            </div>
            <div className="arrow-down">
              <img src={down}></img>
            </div>
            <div className="input-buy">
              <input
                type={"number"}
                placeholder="0"
                value={stackValue}
                readOnly
              ></input>
              <p className="balance-user">Your allocation</p>

              <div className="eth-pointer">
                <img src={token}></img>
                <h3>FORT</h3>
              </div>
            </div>

            <div className="button-buy">
              {connected ? (
                <button onClick={handleUnlockWallet}>Contribute</button>
              ) : (
                <button onClick={connectMetaMask}>Unlock Wallet</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Presale;
