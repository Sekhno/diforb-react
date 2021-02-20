import React, { useState, useEffect, useCallback, createRef } from 'react'

const className = {
    root: 'styled-input',
    input: 'styled-input__input',
    placeholder: 'styled-input__placeholder',
    placeholderText: 'styled-input__placeholder-text',
    circle: 'styled-input__circle',
    letter: 'letter'
}

/**
 * React component
 * @param {object} props
 * @param {string} props.name 
 * @param {string} props.placeholder
 * @param {string} props.type
 * @param {function} props.change
 */
function InputField(props) {
    const inputRef = createRef()
    const [value , setValue] = useState('')
    const handleFocus = useCallback(event => {
        const parent = event.target.parentNode
        parent.classList.add('filled');
        placeholderAnimationIn(parent, true);
    })
    const handleBlur = useCallback(event => {
        const parent = event.target.parentNode;
        if(event.target.value.length) return;
        parent.classList.remove('filled');
        placeholderAnimationIn(parent, false);
    })

    let 
    placeholder = props.placeholder,
    placeholders = [];
    for(let w of placeholder){
        if(!placeholder) placeholder = '&nbsp;';
        placeholders.push(w)
    }
    

    useEffect(() => {
        inputRef.current.addEventListener('focus', handleFocus)
    }, [ handleFocus ])

    useEffect(() => {
        inputRef.current.addEventListener('blur', handleBlur)
    }, [ handleBlur ])

    
    const handleChange = (event) => {
        const name = props.name
        const value = event.target.value
        setValue(event.target.value)
        props.change({
            [name]: value
        })
    } 

    return (
        <div className = { className.root }>
            <input
                ref = { inputRef } 
                type = { props.type } 
                className = { className.input } 
                name = { props.name } 
                value = { value }
                onChange = { handleChange }
            />
            <div className = { className.placeholder }>
                <span className = { className.placeholderText }>
                    { placeholders.map((v, i) => <span key = { i } className = { className.letter }>{ v }</span>) }
                </span>
            </div>
            <div className = { className.circle }></div>
        </div>
    )
}

/**
 * 
 * @param {*} parent 
 * @param {*} action 
 */
function placeholderAnimationIn(parent, action){
    let act = (action)? 'add' : 'remove';
    let letters = parent.querySelectorAll('.letter');
    letters = [].slice.call(letters, 0);
    if(!action) letters = letters.reverse();
    letters.forEach(function(el, i){
        setTimeout(function(){
            let contains = parent.classList.contains('filled');
            if( (action && !contains) || (!action && contains)) return;
            el.classList[act]('active');
        }, (50*i));
    });
}

export default InputField