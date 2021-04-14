import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './../reducers';
import { middleWare } from './../createStore';

export const findByTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}


export const checkProps = (component, expectedProps) => {
    const propsError = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsError;
}

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore);
    return createStoreWithMiddleWare(RootReducer, initialState);
}