import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import Create from './components/create';

ReactDOM.render(
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/create' component={Create} />
      </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
