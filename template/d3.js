import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from '../router/d3.js'

const render = (Component) => {
  ReactDOM.render((
    <AppContainer>
      <Component />
    </AppContainer>
    ), document.getElementById('app')
  );
}

render(RootContainer);

module.hot.accept('../router/d3.js', () => {
  render(RootContainer);
})
