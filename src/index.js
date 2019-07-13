import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from "./redux/reduxStore"
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
