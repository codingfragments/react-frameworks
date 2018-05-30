import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// Styles
import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';
import './styles/style.css';











ReactDOM.render(
  <App name="ksj"/>
  ,
  document.body as HTMLElement
);
registerServiceWorker();
