import React, { useState, useEffect } from 'react';

const InputLogger = () => {
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(`Input value changed: ${inputValue}`);
    }, [inputValue]); // This will trigger the effect anytime inputValue changes

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Type something..." 
            />
        </div>
    );
};

export default InputLogger;