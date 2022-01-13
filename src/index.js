import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 
import { Provider } from 'react-redux'
import configStore from '../src/components/store/storeConfig' 
 
ReactDOM.render(
 
  <Provider store={configStore()}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);
 
reportWebVitals();