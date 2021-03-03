import PropTypes from "prop-types"
import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import { userRoutes, authRoutes } from "./routes/allRoutes"
import Authmiddleware from "./routes/middleware/Authmiddleware"
import { initFirebaseBackend } from "@/helpers/firebase_helper"

import VerticalLayout from "./components/VerticalLayout/"
import NonAuthLayout from "./components/NonAuthLayout"

import { sound } from "./services/audio"

import Diforb from "./components/Diforb/Diforb"


const firebaseConfig = {
	apiKey: "AIzaSyAISYi8vsy_vevtSubMdg1mpD9NXDkb6bE",
	authDomain: "diforb-3f984.firebaseapp.com",
	databaseURL: "https://diforb-3f984.firebaseio.com",
	projectId: "diforb-3f984",
	storageBucket: "diforb-3f984.appspot.com",
	messagingSenderId: "990232084653",
	appId: "1:990232084653:web:1c660e027f12719967c624"
}

const style = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

// init firebase backend
initFirebaseBackend(firebaseConfig)

const App = props => {
    // function getLayout() {
    //     let layoutCls = VerticalLayout
        
    //     return layoutCls
    // }
    
    // const Layout = getLayout()
    return (
        <React.Fragment>
            <div style = { style }>
                <Diforb name = "interface"/>
            </div>

            
            {/* <Router>
                <Switch>
                    {authRoutes.map((route, idx) => (
                        <Authmiddleware
                            path = { route.path }
                            layout = { NonAuthLayout }
                            component = { route.component }
                            key = { idx }
                            isAuthProtected = { false }
                        />
                    ))}

                    {userRoutes.map((route, idx) => (
                        <Authmiddleware
                            path={route.path}
                            layout={Layout}
                            component={route.component}
                            key={idx}
                            isAuthProtected={true}
                            exact
                        />
                    ))}
                </Switch>
            </Router> */}
        </React.Fragment>
    )
}

App.propTypes = {
    layout: PropTypes.any
}

const mapStateToProps = state => {
    return {
      layout: state.Layout,
    }
}

export default connect(mapStateToProps, null)(App)

