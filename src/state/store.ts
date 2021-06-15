import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './reducers/RootReducer';

export const store = createStore(
  RootReducer,
  compose(
	// dev tools with thunk for axios
    composeWithDevTools(applyMiddleware(thunk))
  )
);

// export type of our store which is type of RootReducer
export type RootStore = ReturnType<typeof RootReducer>
