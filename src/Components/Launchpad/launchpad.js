import React from "react";

import "./launchpad.css";
import "../Header/header.css";
import "../Dashboard/dashboard.css";
import "../Stake/stake.css";

function launchpad() {
  return (
    <main>
      <div className="main-wrapper">
        <div className="title-one">
          <div className="title-container">
            <h1>Vault</h1>
          </div>
          <div className="paragraph-container">
            <p>Onboarding new protocols to FORTRESS ecosystem and Arbitrum</p>
          </div>
        </div>

        <div className="coming-soon">
            <h3>Coming Soon</h3>
        </div>
      </div>
    </main>
  );
}

export default launchpad;
