import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CreateClaimFormContainer from './containers/CreateClaimFormContainer';
import CreatePolicyFormContainer from './containers/CreatePolicyFormContainer';
import DeletePolicyFormContainer from './containers/DeletePolicyFormContainer';
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
        <CreatePolicyFormContainer />
        <DeletePolicyFormContainer />
        <CreateClaimFormContainer />
      </div>
    </Provider>
  );
};

export default App;
