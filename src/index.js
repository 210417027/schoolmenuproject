import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './App.css';
import App_27 from './App_27';
import { AppProvider_27 } from './pages/order/Context_27';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_27>
      <App_27 />
    </AppProvider_27>
  </React.StrictMode>
);

