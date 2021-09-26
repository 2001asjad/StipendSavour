import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import './index.css';
import {Provider} from './context/context';


ReactDOM.render(
    <SpeechProvider appId="67293fff-dd8a-4ad5-99ec-557c2da03b59" language="en-US">
        <Provider>
        <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root'));