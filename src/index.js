import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <App>
            <Routes />
          </App>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
