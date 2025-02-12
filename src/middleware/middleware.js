import { useState, useEffect, useRef, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export function useApi(baseUrl, params) {
    const history = useHistory();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Memoize params object using stable references
    const memoizedParams = useMemo(() => params, [
        ...Object.keys(params || {}),
        ...Object.values(params || {})
    ]);
    
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        
        if (!baseUrl) return;

        const controller = new AbortController();
        setIsLoading(true);

        axios
            .get(`${process.env.REACT_APP_API_URL}${baseUrl}`, { 
                params: memoizedParams,
                signal: controller.signal 
            })
            .then(response => {
                if (isMounted.current) {
                    setData(response?.data?.data || null);
                }
            })
            .catch(error => {
                if (error.name === 'AbortError') return;
                
                if (isMounted.current) {
                    setError(error);
                    if (error.response?.status === 404) {
                        history.push("/");
                    }
                }
            })
            .finally(() => {
                if (isMounted.current) {
                    setIsLoading(false);
                }
            });

        return () => {
            controller.abort();
            isMounted.current = false;
        };
    }, [baseUrl, memoizedParams, history]);

    return { data, error, isLoading };
}