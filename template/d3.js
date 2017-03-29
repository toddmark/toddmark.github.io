import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import RootContainer from '../component/d3'


const render = (Component) => {
  ReactDOM.render((
    <AppContainer>
      <RootContainer />
    </AppContainer>
    ), document.getElementById('app')
  );
}

render(RootContainer);

// if (module.hot) {
//   module.hot.accept('../component/d3', () => {
//     render(RootContainer);
//   })
// }

