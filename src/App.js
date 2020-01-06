import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CreateClaimForm from './components/CreateClaimForm';
import CreatePolicyForm from './components/CreatePolicyForm';
import DeletePolicyForm from './components/DeletePolicyForm';
import MainInfo from './components/MainInfo';
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
        <div
          style={{
            width: '100%',
            maxWidth: '720px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          <CreatePolicyForm />
          <DeletePolicyForm />
          <CreateClaimForm />
        </div>
        <MainInfo />
      </div>
    </Provider>
  );
};

export default App;
