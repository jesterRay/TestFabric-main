import React, { useContext, useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import axios from 'axios';

function PortfolioTwoItem({ name, cost, heading, img, link, categoryId, url, categoryName }) {
    const history = useHistory();

    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URL + 'products_by_subcategory', { params: { catID: categoryId } })
            .then(response => {
                setData(response?.data?.data);
            })
            .catch(error => {

            });
    },[])

    const { setValues } = useContext(UserContext)
    const defaultImg = process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg';

    function handleClick(catHeading, sudCat) {
        // setValues((pre) => ({ ...pre, categoryId: categoryId }))
        // console.log("catHeading.......... : ", catHeading)

        const urlHeading = categoryName?.replaceAll(" ", "-")?.replaceAll("/", "") + "-" + (categoryId);
        history.push(`/product-details/${urlHeading}`)

    }

    function onError(e) {
        e.target.src = defaultImg
    }
    function suCrypt(id) {
        return btoa(btoa(id));
    }

    return (
        // <SwiperSlide>
            <div className=" single-project-item constructions medical" style={{cursor:"pointer",height:"100%"}} >
                <div
                    className=" service-bg bg-cover py-2"
                    style={{ background: "white", outline: "1px #f2f2f2 solid",borderRadius:"12px" }}

                >
                    {/* <h4 style={{ padding: "0.5rem" }}>{name} </h4> */}
                    <h6 style={{ paddingLeft: "0.5rem" }}>{name}-{categoryName}</h6>
                    <div style={{ display: "flex" }}>
                        <div className='' style={{ height: "50%", width: "100%", padding: "1rem", textAlign: "center" }} onClick={() => handleClick()} >
                            <img style={{ height: "100%", width: "100%" }} src={img} onError={(e) => onError(e)} />
                            {/* {data?.[0]?.subcategory__Name.split(' ').slice(0, 1).join('+')} */}

                        </div>
                    </div>
                </div>
            </div>
        // </SwiperSlide>
        // </Link>
    );
}

export default PortfolioTwoItem;
