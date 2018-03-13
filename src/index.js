import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const store = createStore(reducer);

const app = <Provider store={store}>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();