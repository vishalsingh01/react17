import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './components/Context';

import Sample from './components/Sample';

ReactDOM.render(
  <React.StrictMode>
    {/* <ProductProvider>
      <App />
    </ProductProvider> */}
    <Sample />
  </React.StrictMode>,
  document.getElementById('root')
);

 
reportWebVitals();
