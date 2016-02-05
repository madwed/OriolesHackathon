import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import Root from './containers/root'
import configureStore from './store/configure-store'

const __DEBUG__ = process.env.NODE_ENV != 'production'

const target  = document.getElementById('root')
const history = createBrowserHistory()
const store   = configureStore({}, __DEBUG__)

syncReduxAndRouter(history, store)

const node = (
  <Root
    history={history}
    store={store}
    debug={__DEBUG__}
  />
);

ReactDOM.render(node, target);

if (process.env.NODE_ENV === 'production') {
  Raven.config('https://82092c123a564dc08f5ede92d4f3c0b0@app.getsentry.com/62290').install();
}
