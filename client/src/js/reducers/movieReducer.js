import { FAILED, GET_MOVIES } from "./../actions/types";
const intialState = {
    movies: [],
    errors: [],
};

const reducer = (state = intialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_MOVIES:
            return { ...state, movies: payload };
        case FAILED:
            return { ...state, errors: payload };
        default:
            return state;
    }
};
export default reducer;
