import { 
    PLAYER_PLAY,
    PLAYER_STOP,
    PLAYER_CHANGE_VOLUME_LEFT,
    PLAYER_CHANGE_VOLUME_RIGHT,
    PLAYER_CHANGE_TIMESHIFT,
    PLAYER_CHANGE_REVERB_VOLUME_LEFT,
    PLAYER_CHANGE_REVERB_VOLUME_RIGHT,
    PLAYER_CHANGE_REVERB_MODE_LEFT,
    PLAYER_CHANGE_REVERB_MODE_RIGHT,
    PLAYER_DOWNLOAD_SOUND 
} from "./actionTypes"

export const playerPlay = () => {
    return {
        type: PLAYER_PLAY,
        payload: { playing: true }
    }
}

export const playerStop = () => {
    return {
        type: PLAYER_STOP,
        payload: { playing: false }
    }
}

export const playerChangeVolumeLeft = (volume) => {
    return {
        type: PLAYER_CHANGE_VOLUME_LEFT,
        payload: { value: volume }
    }
}

export const playerChangeVolumeRight = (volume) => {
    return {
        type: PLAYER_CHANGE_VOLUME_RIGHT,
        payload: { value: volume }
    }
}

export const playerChangeTimeshift = (timeshift) => {
    return {
        type: PLAYER_CHANGE_TIMESHIFT,
        payload: { value: timeshift}
    }
}

export const playerChangeReverbVolumeLeft = (volume) => {
    return {
        type: PLAYER_CHANGE_REVERB_VOLUME_LEFT,
        payload: { value: volume }
    }
}

export const playerChangeReverbVolumeRight = (volume) => {
    return {
        type: PLAYER_CHANGE_REVERB_VOLUME_RIGHT,
        payload: { value: volume }
    }
}

export const playerChangeReverbModeLeft = (volume) => {
    return {
        type: PLAYER_CHANGE_REVERB_MODE_LEFT,
        payload: { value: volume }
    }
}

export const playerChangeReverbModeRight = (volume) => {
    return {
        type: PLAYER_CHANGE_REVERB_MODE_RIGHT,
        payload: { value: volume }
    }
}

export const playerDownloadSound = () => {
    return {
        type: PLAYER_DOWNLOAD_SOUND,
        payload: { downloading: true }
    }
}