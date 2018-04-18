import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from './states/index'


import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById('root')

);
registerServiceWorker();
