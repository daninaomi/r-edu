import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router'
import { routerReducer, ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import redutor from './reducers'
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(redutor, composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(routerMiddleware(history))
)
)

const history = createHistory()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
