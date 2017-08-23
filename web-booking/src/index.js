import React from 'react';
import ReactDOM from 'react-dom';
import './styles/react-toolbox/theme.css';
import './index.css';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './styles/react-toolbox/theme.js'
import 'material-design-icons/iconfont/material-icons.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
