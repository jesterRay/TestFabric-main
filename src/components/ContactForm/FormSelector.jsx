/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useApi } from '../../middleware/middleware';

const FormSelector = ({ labelFor, label, placeholder, id, type, setCity, cityId }) => {
    const { data, error, isLoading } = useApi('get-contries', {});

    const onChangeHandler = (e) => {
        setCity(e.target.value);
    };

    const styles = `
        .form-group {
            width: 48%;
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
        }

        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 10px;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            {/* <div className="col-sm-6 col-12" style={{marginRight:"0",paddingRight:0}} > */}
                <div className="form-group" >
                    <label htmlFor={labelFor}>{label}</label>
                    <select
                        value={cityId}
                        onChange={onChangeHandler}
                        type={type}
                        id={id}
                        placeholder={placeholder}
                    >
                        <option value="" selected >Select Your Country</option>
                        {data?.map((item) => (
                            <option key={item.country__Name} value={item.country__Name}>
                                {item.country__Name}
                            </option>
                        ))}
                    </select>
                </div>
            {/* </div> */}
        </>
    );
};

export default FormSelector;
