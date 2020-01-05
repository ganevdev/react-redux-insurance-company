import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import MainContainer from './containers/MainContainer';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MainContainer />
      </div>
    </Provider>
  );
};

export default App;
