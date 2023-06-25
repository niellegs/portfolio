import React from 'react';
import ReactDOM from 'react-dom/client';
import Intro from './intro-app';
import Banner from './banner-app';
import reportWebVitals from "./reportWebVitals";

const bannerElement = document.getElementById("banner");
const banner = ReactDOM.createRoot(bannerElement);

banner.render(
  <React.StrictMode>
    <Banner />
  </React.StrictMode>
);

reportWebVitals();

const introElement = document.getElementById("intro");
const intro = ReactDOM.createRoot(introElement);

intro.render(
  <React.StrictMode>
    <Intro />
  </React.StrictMode>
);

reportWebVitals();