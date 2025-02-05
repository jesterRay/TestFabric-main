import { useApi } from "../../middleware/middleware";
import Parser from 'html-react-parser';

import { useState } from "react";


export default function PagesDataDb({pageId}){


    const { data, error, isLoading } = useApi('pages_data', {page_id:pageId});
 
    return(
        <div className="container">
            <br/>
            {data && Parser(data?.[0]?.page_long_content)}


        </div>
    )
}