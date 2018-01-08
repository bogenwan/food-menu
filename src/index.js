import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
