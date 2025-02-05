import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../../middleware/middleware';

function WidServices() {
    const { data, error, isLoading } = useApi('servecies_data', {});

    return (
        <div className="single-footer-wid">
            <div className="wid-title">
                <h4>Services</h4>
            </div>
            <ul>
                {data?.slice(0,5).map((item,index)=>{
                    return(
                        <li key={item?.associations_and_partners__ID}>
                            <Link to={{pathname:"/project-details",state: { item:item?.associations_and_partners__Description,heading:item?.associations_and_partners__Name,category:item?.cat_name }}}>{item?.associations_and_partners__Name}</Link>
                        </li>
                    )
                })}

            </ul>
        </div>
    );
}

export default WidServices;
