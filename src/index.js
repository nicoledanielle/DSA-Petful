import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DashboardApp />, document.getElementById('root'));
registerServiceWorker();
