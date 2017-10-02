import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

const blah = <LocaleProvider locale={enUS}>
              <App />
            </LocaleProvider>;

ReactDOM.render(blah, document.getElementById('root'));
registerServiceWorker();
