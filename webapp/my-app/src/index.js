import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './states/index';
import ApplicateRoutes from './routes/index'

import 'font-awesome/css/font-awesome.css';
//export const history = BrowserRouter();
ReactDOM.render(
    <ApplicateRoutes/>,
    document.getElementById('root')
);
registerServiceWorker();
