import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCategory({ link, category,data=null }) {
    return (
        <>
            <li style={{backgroundColor:"transparent"}}>
               { 
                data?
                <Link  
                    to={{
                    pathname: link,
                    state: {
                    data: {data},
                    name:category
                    },
                    }} >{category}</Link>
                        :
                    <Link to={link}>{category}</Link>
                }

            </li>
        </>
    );
}

export default ServiceCategory;
