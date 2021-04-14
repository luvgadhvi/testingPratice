import React from 'react';
import { shallow } from 'enzyme';
import { types } from './../../actions/types';
import postsReducer from './reducer';

describe('Post Reducer', () => {

    it('Should Return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([])
    })

    it('Should Return New State If return state', () => {
        const posts = [{ title: 'Test1' }, { title: 'Test2' }, { title: 'Test3' }];
        const newState = postsReducer(undefined, {
            type: types.GET_POST,
            payload: posts
        });
        expect(newState).toEqual(posts)
    })
})

