import React,{useEffect,useState,useContext} from 'react';
import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import axios from 'axios';

import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

import thumb1 from '../../assets/img/service8.jpg';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';


function Services9() {
    const {values} = useContext(UserContext)

    const { data, error, isLoading } = useApi('news_data');

    // const [produts,setProducts] = useState(null)
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"testfabrics_products_by_subcategory",{params:{catID:"205"}})
    //     .then(res=>{console.log(res);setProducts(res?.data)})
    // },[])
    return (
        <section className="our-service-wrapper section-padding mtm-30">
            <div className="container">
                <div className="row">
                    {data?.length==0&&<h4>No News Found</h4>}
                    {data?.map((data, index) => (
                        <ServicesTwoCard
                            key={data.news__ID}
                            productId={data.news__ID}
                            thumbnail={data.news__ID}
                            // icon={<FaDraftingCompass />}
                            newsDate={data?.news__Date}
                            evenUrl={data?.events__Url}
                            heading={`${index + 1}.${data?.news__Title}`}
                            text={data?.news__Long_Description}
                            subheading={data?.news__Short_Description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services9;
