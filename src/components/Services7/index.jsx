import React,{useEffect,useState,useContext} from 'react';
import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import axios from 'axios';

import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

import thumb1 from '../../assets/img/service8.jpg';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';


function Services7() {
    const {values} = useContext(UserContext)

    const { data, error, isLoading } = useApi('event_data');

    // const [produts,setProducts] = useState(null)
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"testfabrics_products_by_subcategory",{params:{catID:"205"}})
    //     .then(res=>{console.log(res);setProducts(res?.data)})
    // },[])
    return (
        <section className="our-service-wrapper section-padding mtm-30">
            <div className="container">
                <div className="row">
                    {data?.length==0&&<h4>No Events Found</h4>}
                    {data?.map((data, index) => (
                        <ServicesTwoCard
                            key={data.events__ID}
                            productId={data.events__ID}
                            thumbnail={data.events__ID}
                            // icon={<FaDraftingCompass />}
                            evenUrl={data?.events__Url}
                            heading={`${index + 1}.${data?.events__Name}`}
                            text={data?.events__Description}
                            subheading={data?.events__Abbriviation}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services7;
