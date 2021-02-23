import { combineReducers } from "redux"

import Login from "./auth/login/reducer"
import Diforb from "./diforb/reducer"

const rootReducer = combineReducers({
    Login,
    Diforb
})

export default rootReducer