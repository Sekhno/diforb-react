import React from 'react'
import './form.less'
import InputField from '../InputField/InputField'
import ButtonForm from '../buttonForm/ButtonForm'

/**
 * React component
 * 
 * @param {object} props
 * @param {string} props.title  
 */

function Form(props) {
    setTimeout(function(){
        document.body.classList.add('on-start');
    }, 100);
    
    setTimeout(function(){
        document.body.classList.add('document-loaded');
    }, 1800);

    return (
        <main>
            <form className = "form">
                <div className = "form__cover"></div>
                <div className="form__loader">
                    <div className="spinner active">
                        <svg className="spinner__circular" viewBox="25 25 50 50">
                            <circle 
                                className="spinner__path" 
                                cx="50" cy="50" r="20" 
                                fill="none" 
                                strokeWidth="4" 
                                strokeMiterlimit="10">
                            </circle>
                        </svg>
                    </div>
                </div>
                <div className="form__content">
                    <h1>{ props.title }</h1>

                    <InputField 
                        name = "nickname"
                        placeholder = "Username"
                        type = "text"
                    />

                    <InputField 
                        name = "password"
                        placeholder = "Password"
                        type = "password"
                    />
                    
                    <ButtonForm title = "Submit"/>
                    
                </div>
            </form>
        </main>
    )
}

export default Form