import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {disabledReactDevTools} from '@fvilers/disable-react-devtools';
import './style/_main.scss';

if (process.env.NODE_ENV === 'production') disabledReactDevTools();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
