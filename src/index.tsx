import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/app.global.scss';
import styles from './styles/app.module.scss';
import { PsyWalletProvider } from './components/WalletProvider';
import { Routes } from './Routes';
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode >
    <RecoilRoot>
    <PsyWalletProvider>
      <div className={styles.app}>
        <Routes />
      </div>
    </PsyWalletProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
