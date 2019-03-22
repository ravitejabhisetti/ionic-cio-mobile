import { LoginState } from './../models/index';
import { LoginActions } from '../actions';

const initialState: LoginState = {
    loaded: false,
    loading: false,
    token: ''
}

export function LoginReducers(state: LoginState = initialState, action: LoginActions.All) {
    switch (action.type) {
        case LoginActions.GET_TOKEN:
            return Object.assign({}, state, {
                loading: true
            })
        case LoginActions.GET_TOKEN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                loaded: true,
                token: action.payload
            })
        case LoginActions.GET_TOKEN_FAIL:
            return Object.assign({}, state, {
                loading: false,
                loaded: false,
                token: ''
            })
        default:
            return state;
    }
}