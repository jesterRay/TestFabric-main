import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export async function getApi(baseUrl, params) {



        // console.log('Calling API:', baseUrl, params);
         axios
            .get(process.env.REACT_APP_API_URL + baseUrl, { params })
            .then(response => {
                return (response?.data?.data);
                // console.log('Calling Response Data:',baseUrl,"_____",response?.data?.data);
            })
           

}

