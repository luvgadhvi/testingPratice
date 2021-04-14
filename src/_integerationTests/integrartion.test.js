import moxios from 'moxios';
import { testStore } from '../Utils';
import { fetchPosts } from '../actions';

describe('Fetch Post Actions', () => {


    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('Store is updated', () => {
        const expectedState = [{
            title: 'Example Title',
            desc: 'This is an example Title'
        },
        {
            title: 'Example Title',
            desc: 'This is an example Title'
        },
        {
            title: 'Example Title',
            desc: 'This is an example Title'
        }
        ]
        const store = testStore();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })
        return store.dispatch(fetchPosts()).then(() => {
            const newState = store.getState();
            expect(newState.postsReducer).toBe(expectedState)
        })
    })
})