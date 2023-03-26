import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header/header'
import Dashboard from './Components/Dashboard/dashboard'
import Stake from './Components/Stake/stake'
import Vaults from './Components/Vaults/vaults'
import Pad from './Components/Launchpad/launchpad'
import Presale from './Components/Presale/presale'
import Nav from './Components/Nav/Nav'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Nav />

      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/stake" element={<Stake />} />
        <Route exact path="/vaults" element={<Vaults />} />
        <Route exact path="/pad" element={<Pad />} />
        <Route exact path="/presale" element={<Presale />} />

      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
