import { useState, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export function useApi(baseUrl, params) {
    const history = useHistory()
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useLayoutEffect(() => {
        setIsLoading(true);

        // console.log('Calling API:', baseUrl, params);
        axios
            .get(process.env.REACT_APP_API_URL + baseUrl, { params })
            .then(response => {
                setData(response?.data?.data);
                setIsLoading(false);
                // console.log('Calling Response Data:',baseUrl,"_____",response?.data?.data);
            })
            .catch(error => {
                setError(error);
                // console.log('Calling Response Error:',baseUrl,"_____", error);
                setIsLoading(false);
                // history.push('/')
            });
            return(()=>{
                setData(null)
                setError(null)
                setIsLoading(false)
            })
    }, []);

    return { data, error, isLoading };
}

