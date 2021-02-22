import React from "react"
import PropTypes from "prop-types"
import "./diforb.scss"
import "../../assets/styles/Diforb_ui/style.css"
import Timeshift from "./Timeshift"

const className = {
    root: "player",
    wrapper: "player-holder",
    inner: "player-holder-inner",
    wave: "player-wave",
    waveHolder: "player-wave-holder",
    waveInner: "player-wave-inner",

    iconLogo: "icon-logo",

    sliderTop: "slider-top"
}
/**
 * 
 * @param {*} props 
 */
const Diforb = props => {
    return (
        <div className = { className.root }>
            <div className = { className.wrapper }>
                <div className = { className.inner }>
                    <div  className = { className.wave }>
                        <div className = { className.waveHolder }>
                            <div className =  { className.waveInner }>
                                <i className = { className.iconLogo }></i>
                                <h1>{ props.name }</h1>
                            </div>
                        </div>
                    </div>

                    <div  className = "slider-top">
                        <Timeshift />
                    </div>
                </div>
            </div>
        </div>
    )
}

Diforb.propTypes = {
    name: PropTypes.string
}

export default Diforb