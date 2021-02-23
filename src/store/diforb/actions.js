import {
    PLAYER_PLAY,
    PLAYER_STOP
} from "./actionTypes"

export const playerPlay = state => {
    return {
        type: PLAYER_PLAY,
        payload: { state }
    }
}

export const playerStop = state => {
    return {
        type: PLAYER_STOP,
        payload: { state }
    }
}