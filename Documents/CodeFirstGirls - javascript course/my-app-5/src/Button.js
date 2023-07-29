import React from 'react';
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({message = "Click Me"}) => {
    return (
        <button className="Button">{message}</button>
    )
}
    
Button.propTypes = {
    message: PropTypes.string
} 

export default Button