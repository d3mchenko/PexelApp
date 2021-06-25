import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// @ts-ignore
const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
// @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined;

const composeArray: Function[] = [applyMiddleware(thunk), devtoolsExtension as Function].filter(
  Boolean
);

const store = createStore(rootReducer, compose(...composeArray));


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
