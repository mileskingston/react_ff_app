import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { loadState, saveState } from '../utils/localStorage';

const initState = {
  teams: []
};
const persistedState = loadState();
const currentState = persistedState || initState;

const store = createStore(
  reducer,
  currentState,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
