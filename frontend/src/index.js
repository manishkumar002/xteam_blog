import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container-fluid'>
      <div className='row top1'>
        <div className='col-sm-4'>Xteam</div>
        <div className='col-sm-4'>manish.kumar@xtem.com</div>
        <div className='col-sm-4'>+91 6307899113,9519348772</div>
      </div>
    </div>
    <App />
  </React.StrictMode>
);


