import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CreatePolicyForm from './containers/CreatePolicyForm';
import MainInfoContainer from './containers/MainInfoContainer';
import reducers from './reducers';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Insurance Company</h1>
        <MainInfoContainer />
        <CreatePolicyForm />
      </div>
    </Provider>
  );
};

export default App;
