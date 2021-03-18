import * as types from '../types/demo'
// khởi tạo một init state
const initialState = {
    requesting: false,
    success: false,
    message: null,
    data: null
}

// bắt từng action type
function exampleReducers(state = initialState, payload) {
    switch (payload.type) {
        case types.FETCH_POST_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case types.FETCH_POST_SUCCESS:
            return {
                ...state,
                requesting: false,
                success: true,
                data: payload.data
            };
        case types.FETCH_POST_ERROR:
            return {
                ...state,
                requesting: false,
                message: payload.message
            };

        default:
            return state;
    }
}

export default exampleReducers;