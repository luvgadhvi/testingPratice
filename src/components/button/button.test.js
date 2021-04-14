import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from './index';
import { findByTestAttribute, checkProps } from './../../Utils';

describe('SharedButton Component', () => {

    describe('Checking Prop Types', () => {
        it('Should Not Throw Warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Test',
                emitEvent: () => { }
            }
            const propsError = checkProps(SharedButton, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Renders', () => {
        let wrapper;
        let mockFunction;
        beforeEach(() => {
            mockFunction = jest.fn();
            const props = {
                buttonText: 'Example Button Test',
                emitEvent: mockFunction
            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it("Should Render a button", () => {
            const button = findByTestAttribute(wrapper, "buttonComponent");
            expect(button.length).toBe(1)
        })
        it("Should emit Callback on Click Event", () => {
            const button = findByTestAttribute(wrapper, "buttonComponent");
            button.simulate('click');
            const callback =  mockFunction.mock.calls.length;
            expect(callback).toBe(1);
        })
      

    })


})