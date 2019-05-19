import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';

// firebase firestore imports
import firebase from './fbConfig'
import { ReactReduxFirebaseProvider, ReactReduxFirebaseConsumer } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

const store = createStore(
  rootReducer,
)

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const rrfProps = {
  firebase: firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
<Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <ReactReduxFirebaseConsumer>
      {context => <App firebase={context} />}
    </ReactReduxFirebaseConsumer>
  </ReactReduxFirebaseProvider>
</Provider>,
document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
