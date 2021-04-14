import { types } from './../../actions/types';

const postsReducer = (state = [], actions) => {
    switch (actions.type) {
        case types.GET_POST:
            return actions.payload;
        default:
            return state;
    }
}

export default postsReducer;