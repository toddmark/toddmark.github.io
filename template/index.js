import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, browserHistory } from 'react-router';

// import routes from '../router/index.js';

const render = () => {
  const routes = require('../router/index.js').default
  ReactDOM.render((
    <AppContainer>
      <Router history={browserHistory} routes={routes} />
    </AppContainer>
    ), document.getElementById('app')
  );
}

render();

if (module.hot) {
  module.hot.accept('../router/index.js', () => {
    render();
  })
}

