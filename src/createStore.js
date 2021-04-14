import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers'

export const middleWare = [ReduxThunk];

export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore);
export const store = createStoreWithMiddleWare(RootReducer)
