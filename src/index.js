import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { AuthProvider } from './utils/AuthProvider';
import './style/_main.scss';

if (process.env.NODE_ENV === 'production') disableReactDevTools();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
