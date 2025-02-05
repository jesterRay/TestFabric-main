/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const FormInput = ({ labelFor, label, placeholder, id, type,styleClass }) => {
    // STATES
    const [input, setInput] = useState('');

    // HANDLER
    const onChangeHandler = (e) => {
        setInput(e.target.value);
    };

    // CSS styles as template literal
    const styles = `
        .form-group {
            width: 48%; 
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
        }
        .form-control,
        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="number"],
        .form-group input[type="radio"] {
            width: 100%;
            padding: 10px ;
            border: 1px solid #ccc !important;
            border-radius: 10px;
        }

       
    `;

    return (
        <>
            <style>{styles}</style>
            <div className="form-group">
                <label htmlFor={labelFor}>{label}</label>
                <input
                    value={input}
                    onChange={onChangeHandler}
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    className="form-control" // Apply the form-control class for consistent styling
                    // style={{padding:"20px"}}
                />
            </div>
        </>
    );
};

export default FormInput;
