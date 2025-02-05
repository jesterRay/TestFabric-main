//import { useState, useEffect } from 'react';
//import { useHistory } from 'react-router-dom';
//import axios from 'axios';
//import React from 'react';

//export function PostApi(baseUrl, data) {
//    // const [response, setresponse] = useState(null);
//    // const [error, setError] = useState(null);
//    // const [isLoading, setIsLoading] = useState(false);

//    // useEffect(() => {
//    //     setIsLoading(true);

//        // console.log('Calling API:', baseUrl, data);
//        var querystring = require('querystring');

//        axios.post(process.env.REACT_APP_API_URL+ baseUrl, querystring.stringify(
//          data
//        )
//      )
//          .then((response) => {
//            // console.log(response);
//            return "200"
//          })
//          .catch(error => {
//            // setresponse(400)
//            // console.log(error);
//            return "400";
//          });
//          return "200"
//    // }, []);

//    // return { response, error, isLoading };
//}

import axios from 'axios';
import querystring from 'querystring';

export async function PostApi(baseUrl, data) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_URL}${baseUrl}`,
            querystring.stringify(data)
        );
        return response.status;
    } catch (error) {
        console.error(error);
        return 400; // Use the numeric status code directly
    }
}
