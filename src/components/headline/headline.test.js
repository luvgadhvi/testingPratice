import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttribute, checkProps } from './../../Utils'

const setUp = (props) => {
    const component = shallow(<Headline {...props} />);
    return component;
}

describe('HeadLine Component', () => {

    describe('Check Prop Types', () => {
        it('Should Not Throw Warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc',
                tempArr: [{
                    fName: 'Test',
                    lName: 'Testing',
                    email: 'joebloggs@gmail.com',
                    age: 24,
                    onlineStatus: false
                }]
            };

            const propErr = checkProps(Headline, expectedProps)
            expect(propErr).toBeUndefined();
        })



    })

    describe('Have Props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            }
            wrapper = setUp(props);
        })
        it('Should Render Without Error', () => {
            const component = findByTestAttribute(wrapper, "HeadlineComponent");
            expect(component.length).toBe(1)
        })
        it('Should Render H1', () => {
            const h1 = findByTestAttribute(wrapper, "header");
            expect(h1.length).toBe(1)
        })
        it('Should Render P', () => {
            const p = findByTestAttribute(wrapper, "desc");
            expect(p.length).toBe(1)
        })


    })
    describe('Have No Props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })
        it('Should Not Render', () => {
            const component = findByTestAttribute(wrapper, "HeadlineComponent");
            expect(component.length).toBe(0)
        })
    })


})

