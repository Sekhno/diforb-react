import {
    PLAYER_PLAY,
    PLAYER_STOP
} from "./actionTypes"

const initialState = {
    error: "",
    loading: false,
    playing: false
}

const diforb = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_PLAY:
            state = {
                ...state,
                playing: true
            }
            break;
        case PLAYER_STOP:
            state = {
                ...state,
                playing: false
            }
            break
        default:
            state = { ...state }
            break
    }
    return state
}

export default diforb