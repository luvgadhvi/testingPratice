import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttribute, testStore } from './Utils';

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    return wrapper;
}

describe('App Compoonet', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            postsReducer: [{
                title: "Title 1",
                desc: "This is Title 1"
            },
            {
                title: "Title 2",
                desc: "This is Title 2"
            },
            {
                title: "Title 3",
                desc: "This is Title 3"
            }
            ]
        }
        wrapper = setUp(initialState)
    })

    it('Should Render Without Error', () => {
        const App = findByTestAttribute(wrapper, 'appComponent');
        expect(App.length).toBe(1);
    })

    it("exampleMethod_updatesState should Update state as expected", () => {
        const classInstance = wrapper.instance();
        classInstance.exampleMethod_updatesState();
        const newState = classInstance.state.hideBtn;
        expect(newState).toBe(true);
    })

    it("exampleMethod_returnsAValue should Update state as expected", () => {
        const classInstance = wrapper.instance();
        const value = classInstance.exampleMethod_returnsAValue(5);
        expect(value).toBe(6);
    })
})
