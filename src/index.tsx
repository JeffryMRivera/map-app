/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoidmFyZ3V4IiwiYSI6ImNreHJwcDN5ZDUxazMycHFxbHgzNTNqa2wifQ.NXyWFkrz_jNLucXxrNBIjQ';

if (!navigator.geolocation) {
  let message = "Tu navegador no tiene opción de geolocalización"
  alert(message);
  throw new Error(message);
}


ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);