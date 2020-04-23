import { CHANGE_NAME } from './action'

const initialState = {
    nickName: 'Guest'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                nickName: action.payload.nickName
            }
        default:
            return state
    }
}