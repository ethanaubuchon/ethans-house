import createHistory from 'history/createBrowserHistory'
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
  push
} from 'react-router-redux';
import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import reducers from 'reducers';
import Page from 'layout/page';

const history = createHistory();
const store = createStore(
  combineReducers({reducers, routerReducer}),
  applyMiddleware(routerMiddleware(history))
);

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Page />
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
