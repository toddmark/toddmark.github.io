import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import RootContainer from '../router/index.js';

const render = (Component) => {
  ReactDOM.render((
    <AppContainer>
      <Component />
    </AppContainer>
    ), document.getElementById('app')
  );
}

render(RootContainer);

module.hot.accept('../router/index.js', () => {
  render(RootContainer);
})

