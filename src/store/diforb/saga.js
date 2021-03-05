import { takeEvery } from 'redux-saga/effects'
import { 
    PLAYER_PLAY, 
    PLAYER_STOP
} from './actionTypes'


function playerPlayed({ payload })
{
    try {
        console.log(payload)
        
    } catch (error) {
        console.log(error)
    }
}

function playerStoped({ payload })
{
    try {
        console.log(payload)
        
    } catch (error) {
        console.log(error)
    }
}

function* diforbSaga()
{
    yield takeEvery(PLAYER_PLAY, playerPlayed)
    yield takeEvery(PLAYER_STOP, playerStoped)
    
}

export default diforbSaga