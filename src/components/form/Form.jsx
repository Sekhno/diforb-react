import React, { useState } from 'react'
import './form.less'
import InputField from '../InputField/InputField'
import ButtonForm from '../buttonForm/ButtonForm'
import { getFirebaseBackend  } from '@/helpers/firebase_helper'

/**
 * className space
 */
const className = {
    root: 'form',
    cover: 'form__cover',
    loader: 'form__loader',
    content: 'form__content'
}


/**
 * React component
 * 
 * @param {*} props
 * @param {string} props.title  
 */
function Form(props) {
    const initValue = {
        username: null,
        password: null
    } 

    setTimeout(function(){
        document.body.classList.add('on-start');
    }, 100);
    
    setTimeout(function(){
        document.body.classList.add('document-loaded');
    }, 1800);

    const submit = () => {
        const { username, password } = initValue
        const firebase = getFirebaseBackend();
        firebase.loginUser(username, password)
    }

    const handleChange = (event) => {
        Object.assign(initValue, event)
    }

    return (
        <main>
            <form className = { className.root }>
                <div className = { className.cover }></div>
                <div className = { className.loader }>
                    <div className = 'spinner active'>
                        <svg className = 'spinner__circular' viewBox='25 25 50 50'>
                            <circle 
                                className = 'spinner__path' 
                                cx = '50' cy = '50' r = '20' 
                                fill = 'none' 
                                strokeWidth = '4' 
                                strokeMiterlimit = '10'>
                            </circle>
                        </svg>
                    </div>
                </div>
                <div className = { className.content }>
                    <h1>{ props.title }</h1>

                    <InputField 
                        name = 'username'
                        placeholder = 'Username'
                        type = 'text'
                        change = { handleChange }
                    />

                    <InputField 
                        name = 'password'
                        placeholder = 'Password'
                        type = 'password'
                        change = { handleChange }
                    />
                    
                    <ButtonForm 
                        title = 'Submit'
                        submit = { submit }
                    />
                    
                </div>
            </form>
        </main>
    )
}

export default Form