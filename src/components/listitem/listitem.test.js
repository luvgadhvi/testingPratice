import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './index';
import { findByTestAttribute, checkProps } from './../../Utils';

describe('ListItem Component', () => {

    describe('Checking Prop Types', () => {
        it('Should Not Throw Warning', () => {
            const expectedProps = {
                title: 'Example List item Test',
                desc: 'This is list item'
            }
            const propsError = checkProps(ListItem, expectedProps)
            expect(propsError).toBeUndefined()
        })
    })

    describe('Renders', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example List item Test',
                desc: 'This is list item'
            };
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should Render Without Error', () => {
            const listItemComponent = findByTestAttribute(wrapper, "listItemComponent");
            expect(listItemComponent.length).toBe(1)
        })
        it('Should Render Title', () => {
            const component = findByTestAttribute(wrapper, "componentTitle");
            expect(component.length).toBe(1)
        })

        it('Should Render Desc', () => {
            const component = findByTestAttribute(wrapper, "componentDesc");
            expect(component.length).toBe(1)
        })

    })
    describe('Should Not Render', () => {
        let wrapper;
        beforeEach(() => {
            const expectedProps = {
                desc: 'This is list item'
            }
            wrapper = shallow(<ListItem {...expectedProps} />);
        });
        it('Component is Not Render Props', () => {
            const listItemComponent = findByTestAttribute(wrapper, "listItemComponent");
            expect(listItemComponent.length).toBe(0)
        })
    })


})