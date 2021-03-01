import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { playerPlay, playerStop } from "../../store/diforb/actions"

import "./diforb.scss"
import "../../assets/styles/Diforb_ui/style.css"

import Timeshift from "./Timeshift"
import VolumeLeft from "./VolumeLeft"
import VolumeRight from "./VolumeRight"
import Pitch from "./Pitch"
import ReverbLeft from "./ReverbLeft"

const className = {
    root: "player",
    wrapper: "player-holder",
    inner: "player-holder-inner",
    wave: "player-wave",
    waveHolder: "player-wave-holder",
    waveInner: "player-wave-inner",

    iconLogo: "icon-logo",
    iconPlay: "icon-play",
    iconPause: "icon-pause",

    sliderTop: "slider-top",
    sliderMiddle: "slider-middle",
    sliderBottom: "slider-bottom",
    sliderMiddleLeft: "slider-middle-left",
    sliderMiddleRight: "slider-middle-right",
    pitchWrappers: "pitch-wrappers",
    pitchLeft: "pitch-left",
    pitchRight: "pitch-right",

    buttonPlay: "button-play"

}
/**
 * 
 * @param {*} props 
 */
const Diforb = props => {
    console.log(props)

    const { playerPlay, playerStop } = props
    const { error, loading, playing } = props.Diforb

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

                    <div className = { className.sliderTop }>
                        <Timeshift />
                    </div>

                    <div className = { className.sliderMiddle }>
                        <div className = { className.sliderMiddleLeft }>
                            <VolumeLeft />
                        </div>
                        <div className = { className.sliderMiddleRight }>
                            <VolumeRight />
                        </div>
                    </div>
                    <div className = { className.pitchWrappers }>
                        <div className = { className.pitchLeft }>
                            <Pitch />
                        </div>
                        <div className = { className.pitchRight }>
                            <Pitch />
                        </div>
                    </div>

                    <div className = { className.sliderBottom }>
                        <div className = { className.sliderBottomLeft }>
                            <ReverbLeft />
                        </div>
                        <div className = { className.sliderBottomRight }></div>
                    </div>

                    <div 
                        className = { className.buttonPlay }
                        onClick = { playing ? playerStop : playerPlay }
                    >
                        { 
                            playing 
                                ? <i className = { className.iconPause } ></i> 
                                : <i className = { className.iconPlay }></i>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Diforb.propTypes = {
    name: PropTypes.string,
    Diforb: PropTypes.object,
    playerPlay: PropTypes.func,
    playerStop: PropTypes.func
}

const mapStateToProps = (state) => {
    return {
        Diforb: state.Diforb
    }
}

const mapDispatchToProps = { playerPlay, playerStop }

export default connect(mapStateToProps, mapDispatchToProps)(Diforb)