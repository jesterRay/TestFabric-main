import React, { useState } from 'react';

function CommentInput({ type, placeholder }) {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div className="single-form-input">
            <input value={input} onChange={handleChange} type={type} placeholder={placeholder} />
        </div>
    );
}

export default CommentInput;
