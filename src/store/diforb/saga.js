import { call, put, takeEvery, takeLatest } from "redux-saga/effects"

import { PLAYER_PLAY, PLAYER_STOP } from "./actionTypes"
import { playerPlay, playerStop } from "./actions"

function playerPlayed(){
    try {
        console.log(arguments)
        
    } catch (error) {
        console.log(error)
    }
}

function playerStoped(){
    try {
        console.log(arguments)
        
    } catch (error) {
        console.log(error)
    }
}

function* diforbSaga() {
    yield takeEvery(PLAYER_PLAY, playerPlayed)
    yield takeEvery(PLAYER_STOP, playerStoped)
}

export default diforbSaga