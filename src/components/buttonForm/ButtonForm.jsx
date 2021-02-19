import React from 'react'



/**
 * 
 * @param {object} props 
 * @param {string} props.title 
 */
function ButtonForm (props) {
    return (
        <button type = "button" className="styled-button">
            <span className="styled-button__real-text-holder">
                <span className="styled-button__real-text">{ props.title }</span>
                <span className="styled-button__moving-block face">
                    <span className="styled-button__text-holder">
                        <span className="styled-button__text">{ props.title }</span>
                    </span>
                </span>
                <span className="styled-button__moving-block back">
                    <span className="styled-button__text-holder">
                        <span className="styled-button__text">{ props.title }</span>
                    </span>
                </span>
            </span>
        </button>
    )
}

export default ButtonForm