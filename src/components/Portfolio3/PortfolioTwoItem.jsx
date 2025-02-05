import React, { useContext, useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import axios from 'axios';
// import img1 from "./img1.jpg"
// import img2 from "./img (2).jpeg"

// import img3 from "./img (3).jpeg"
// import img4 from "./img (4).jpeg"


function PortfolioTwoItem({ name, cost, heading, img, link, categoryId, url, imageUrl }) {
    const history = useHistory();

    const [data, setData] = useState([]);
    useEffect(() => {
        console.log("imageUrl : ",name)
        axios
            .get(process.env.REACT_APP_API_URL + 'subcategories_by_card', { params: { catID: categoryId } })
            .then(response => {
                setData(response?.data?.data);
            })
            .catch(error => {

            });
    },[])

    const { setValues } = useContext(UserContext)
    const defaultImg = process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg';

    function handleClick(catHeading, sudCat) {
        setValues((pre) => ({ ...pre, categoryId: categoryId }))
        // console.log("catHeading.......... : ", catHeading)

        const urlHeading = catHeading?.replaceAll(" ", "-")?.replaceAll("/", "") + "-" + (sudCat);;
        history.push(`/product/${urlHeading}`)

    }

    function onError(e) {
        e.target.src = defaultImg
    }
    function suCrypt(id) {
        return btoa(btoa(id));
    }

    return (
        <div className="single-project-item constructions medical" >

            <div
                className="project-thumb-2  service-bg bg-cover"

                style={{ background: "white", outline: "1px #f2f2f2 solid", borderRadius: "12px" }}

            >
                <h6 style={{ padding: "0.2rem",height:"80px",display:"flex",alignItems: name.length<41?"center":"start", justifyContent:"center" }}>{name}</h6>
                <div style={{ display: "flex",justifyContent:"space-around" }}>
                    <div>
                    {data?.slice(0,2)?.map?.((item,index)=>(
                        <div className='' style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center",cursor:"pointer" }} onClick={() => handleClick(item?.subcategory__Name, item?.subcategory__ID)} >
                            <img className='portfolio-2-img' 
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + item?.subcategory__image}
                             onError={(e) => onError(e)} 
                             />
                        </div>


                    ))}
                    </div>
                    <div>
                    {data?.slice(2,4)?.map?.((item,index)=>(
                        <div className='' style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center",cursor:"pointer" }} onClick={() => handleClick(item?.subcategory__Name, item?.subcategory__ID)} >
                            <img className='portfolio-2-img' 
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + item?.subcategory__image}
                             onError={(e) => onError(e)} 
                             />
                        </div>


                    ))}
                    </div>
                    {/* <div >
                        <div className='' style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center",cursor:"pointer" }} onClick={() => handleClick(data?.[0]?.subcategory__Name, data?.[0]?.subcategory__ID)} >
                            <img className='portfolio-2-img' 
                            
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + data?.[0]?.subcategory__image}
                             onError={(e) => onError(e)} 
                             />
                        </div>
                        <div style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center",cursor:"pointer" }} onClick={() => handleClick(data?.[1]?.subcategory__Name, data?.[1]?.subcategory__ID)}>
                            <img className='portfolio-2-img' 
                            
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + data?.[1]?.subcategory__image}

                             onError={(e) => onError(e)} 
                             />
                        </div>
                    </div> */}

                    {/* <div>
                        <div style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center",cursor:"pointer" }} onClick={() => handleClick(data?.[2]?.subcategory__Name, data?.[2]?.subcategory__ID)}>
                            <img className='portfolio-2-img' 
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + suCrypt(data?.[2]?.subcategory__ID) + '.jpg'} 

                            onError={(e) => onError(e)} />
                            <div>{data?.[2]?.subcategory__Name.split(' ').slice(0, 1).join('+')}</div>
                        </div>
                        <div style={{ height: "50%", width: "100%", padding: "0.2rem", textAlign: "center" ,cursor:"pointer"}} onClick={() => handleClick(data?.[3]?.subcategory__Name, data?.[3]?.subcategory__ID)}>
                            <img className='portfolio-2-img' 
                            src={process.env.REACT_APP_IMAGE_URL + 'subcat_images/' + data?.[3]?.subcategory__image} 

                            onError={(e) => onError(e)} />
                        </div>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default PortfolioTwoItem;
