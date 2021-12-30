import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import roomAndChannel from './Components/modules/roomAndChannel';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(roomAndChannel, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
