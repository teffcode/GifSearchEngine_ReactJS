import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import App from './containers/App';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
