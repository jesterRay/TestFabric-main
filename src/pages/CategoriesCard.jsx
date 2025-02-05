import React from 'react';
import AutoMarquee from '../components/CategoriesCard';
import { useApi } from '../middleware/middleware';

function CategoriesCards (props) {
    const { data } = useApi(props?.apiName, {});

    return (
        <div>
            <AutoMarquee data={data} />
        </div>
    );
}

export default CategoriesCards ;
