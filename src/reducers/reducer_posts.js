import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_POSTS:
            return { all: action.payload.data, ...state }
        default:
            return state;
    }
}
