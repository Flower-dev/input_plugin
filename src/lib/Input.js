import { useState } from 'react';
import PropTypes from 'prop-types';
import './input.css';

// -----------------------------------

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    min: PropTypes.string
}

Input.defaultProps = {
    required: false,
    min: '0'
}

// ------------------------------------


export function Input({ type, name, placeholder, onChange, required, min }) {
    
    const [initialValue, setInitialValue] = useState('');

    return  (
        <input 
            className='inputForm' 
            type={type}
            name={name}
            required={required}
            placeholder={placeholder}
            min={min} 
            value={initialValue}   
            onChange={(e) => {
                setInitialValue(e.target.value)
                onChange(e.target.value)
            }} 
        />
    )
}