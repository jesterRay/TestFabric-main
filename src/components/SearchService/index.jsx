import React,{useEffect,useState,useContext} from 'react';
import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import axios from 'axios';

import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

import thumb1 from '../../assets/img/service8.jpg';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import SearchWidget from '../BlogSidebar/SearchWidget';
import EventsModel from './model';


function SearchService() {
    const {values} = useContext(UserContext)
    const [search,setSearch] = useState('')
    const [searchType,setSearchType] = useState(1)
    const [data, setData] = useState([]);
    const [model,setModel] = useState({show:false,data:[]});

    // const [produts,setProducts] = useState(null)
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"testfabrics_products_by_subcategory",{params:{catID:"205"}})
    //     .then(res=>{console.log(res);setProducts(res?.data)})
    // },[])
    function searchFunction(e){
        // alert(search)
        // alert(searchType)
        if(searchType==1){
            axios.get(process.env.REACT_APP_API_URL +'search_products', {
                params: {
                    search: search,
                },} )
              .then((response) => {setModel({show:true,data:response?.data?.data});});
        }
        else if(searchType==2){
            axios.get(process.env.REACT_APP_API_URL +'search_products', {
                params: {
                    search: search,
                },} )
              .then((response) => {setModel({show:true,data:response?.data?.data});});
        }
        else if(searchType==3){
            axios.get(process.env.REACT_APP_API_URL +'search_methods', {
                params: {
                    search: search,
                },} )
              .then((response) => {setModel({show:true,data:response?.data?.data});});
        }
          
    }
    return (
        <section className="" >
            <div className="">
                <div className="row" >
                    <SearchWidget search={search} setSearch={setSearch} searchFunction={searchFunction} setSearchType={setSearchType}/>
                    <EventsModel 
                        show={model.show}
                        onHide={() => setModel((pre)=>({...pre,show:false}))}
                        data={model?.data}
                        title={searchType==2?"Products:":searchType==3? "Test Method:":"Products:"}
                        searchType={searchType}
                        search={search}
                        // thumbnail={imageUrl}
                    />
                    {/* <div style={{marginTop:"1rem"}}>
                        {data?.length==0?<h4>No Products Found</h4>:<h4>Products:</h4>}
                    </div>
                    {data?.slice(0,6)?.map((data,index) => (
                        <ServicesTwoCard
                            key={data.product__ID}
                            productId={data.product__ID}
                            thumbnail={data.product__ID}
                            defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                            icon={<FaDraftingCompass />}
                            heading={data.product__Name}
                            text={data?.product__Description?.slice(0, 95)+"..."}
                            subheading={data?.product__Number}
                        />
                                    
                    ))} */}
                </div>
            </div>
        </section>
    );
}

export default SearchService;
