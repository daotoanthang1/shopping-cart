import * as types from "./../Constants/ActionTypes"
import * as Message from './../Constants/Message';
const InitialState = Message.MSG_WELCOME;
const message = (state = InitialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default:
            return state
    }
}

export default message;