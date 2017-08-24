import 'material-design-icons/iconfont/material-icons.css';
import './styles/react-toolbox/theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from './styles/react-toolbox/theme.js'
import registerServiceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
