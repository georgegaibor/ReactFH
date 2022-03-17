import React from 'react';
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';


const rootDiv = document.querySelector('#root');


//ReactDOM.render(<PrimeraApp saludo = 'Hola'/>,rootDiv)
ReactDOM.render(<CounterApp  valor = {0}/>,rootDiv)
