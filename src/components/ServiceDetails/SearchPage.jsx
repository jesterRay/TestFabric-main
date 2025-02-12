import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/';
import axios from 'axios';

import Footer3 from '../Footer3';
import Header3 from '../Header3';
import PageBanner from '../PageBanner';
import bannerBg from '../../assets/img/page-banner.jpg';
import { FaDraftingCompass } from 'react-icons/fa';
// import AllSearch from '../SearchService/allSearch';
import SearchResultCard from '../SearchService/SearchResultCard';
import AllSearchResult from '../SearchService/AllSearchResult';
import "../SearchService/SearchService.css";


const SearchObj = {
    1: {
        type: 1,
        url: 'search all other ',
    },
    2: {
        type: 2,
        url: 'search_products',
    },
    3: {
        type: 3,
        url: 'search_methods',
    },
    4: {
        type: 4,
        url: 'search_subcategory',
    },
    5: {
        type: 5,
        url: 'search_test_methods',
    },
}


// function to call get the products from api
async function  searchFunction(type, value) {
    let data = {};
  
    try {
        type = Number(type);
        if(type === 1){
            // get the products
            let products = await axios.get(`${process.env.REACT_APP_API_URL}${SearchObj[2].url}`, {
              params: { search: value },
            }).then((response) => response?.data?.data);
            // get the methods
            let test_standard = await axios.get(`${process.env.REACT_APP_API_URL}${SearchObj[3].url}`, {
                params: { search: value },
            }).then((response) => response?.data?.data);
            // get the subcategories
            let subcategory = await axios.get(`${process.env.REACT_APP_API_URL}${SearchObj[4].url}`, {
                params: { search: value },
            }).then((response) => response?.data?.data);
            let methods = await axios.get(`${process.env.REACT_APP_API_URL}${SearchObj[5].url}`, {
                params: { search: value },
            }).then((response) => response?.data?.data);

            // merge the data
            data = {products, test_standard, subcategory,methods};

        }
        else {
            data = await axios.get(`${process.env.REACT_APP_API_URL}${SearchObj[type].url}`, {
              params: { search: value },
            }).then((response) => response?.data?.data);
        }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    return data;
  }
  
// show the search result when user search for any product
const SearchPage = () => {
    
    const [results,setResults] =  useState(null);

    // getting value from url
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const search = JSON.parse(searchParams.get('search'));

    
    // useEffect to call the product api whenever search value from Url changes
    useEffect(() => {
        if (search.type && search.value) {
            const fetchData = async () => {
                const fetchedProducts = await searchFunction(search.type, search.value);
                setResults(fetchedProducts);
            };
            fetchData();
        }
    }, [search.type, search.value]);

    useEffect(()=>{
        console.log(results);
    },[results])


    return(
        <>
            <Header3/>
            <PageBanner bannerBg={bannerBg} currentPage="Search" heading="Testfabric Search" />

            <div className='container d-flex flex-nowrap flex-column justify-content-center align-items-start py-5' style={{minHeight:"50vh"}}>
                {
                    Number(search.type) === 1 ?
                        <AllSearchResult searchResults={results} search={search} />
                    : results && results.length > 0 ?
                        results.map((data, index) => (
                            <SearchResultCard
                                key={data.product__ID}
                                productId={data.product__ID}
                                thumbnail={data.product__ID}
                                defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                icon={<FaDraftingCompass />}
                                heading={data.product__Name}
                                text={data?.product__Description ? data.product__Description.slice(0, 95) + "..." : null}
                                subheading={data?.product__Number}
                                searchType={search.type}
                            /> 
                        ))
                    : <div>No data found</div>
                }
            </div>
 
            <Footer3/>
        </>
    );
}


export default SearchPage;