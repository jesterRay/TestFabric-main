import React, { useContext, useEffect, useState } from "react";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/img/gallery/5.jpg";
import img2 from "../../assets/img/gallery/6.jpg";
import { UserContext } from "../../App";
import { useApi } from "../../middleware/middleware";
import { BsArrowRight } from "react-icons/bs";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { extractIdFromUrlPath } from "../../helpers/concatUrlPath";
import { Helmet } from "react-helmet";
function DetailsContent() {
  // {data,min}
  const { values } = useContext(UserContext);
  const location = useLocation();
  const history = useHistory();

  // get product id from url
  const [productId,setProductId] = useState(
    extractIdFromUrlPath(location.pathname || '')
  );
  useEffect(()=>{
    setProductId(
      extractIdFromUrlPath(location.pathname || '')
    );
  },[location.pathname])

  

  const { data, error, isLoading } = useApi("testfabrics_product_detail", {
    Product_id: productId,
  });

  console.log("data is:", data);

  const [quantityData, setQuantityData] = React.useState(null);
  const [availableData, setAvailableData] = React.useState([]);

  useEffect(() => {
    let isMounted = true;
    if (data && isMounted && quantityData === null) {
      axios
        .get(process.env.REACT_APP_API_URL + "products_min_quantity", {
          params: {
            ProductId: parseInt(data?.[0]?.product__MOQ),
          },
        })
        .then((response) => {
          setQuantityData(response.data);
        });

      axios
        .get(process.env.REACT_APP_API_URL + "products_available", {
          params: {
            ProductId: parseInt(data?.[0]?.product__Available),
          },
        })
        .then((response) => {
          setAvailableData(response.data?.data);
        });
      // useApi('products_available', {ProductId: parseInt(data?.[0]?.product__Available)})
      //   .then((response) => setAvailableData(response.data));
    }
    return () => {
      isMounted = false;
    }
  },[data]);

  const formattedData = data?.[0]?.product__Description
    ?.split("\n")
    .map((line) => (
      <p key={line} style={{ margin: "0" }}>
        {line || "N/A"}
      </p>
    ));
    const meta_description = data?.[0]?.product__Description.length > 160 ?
                              data?.[0]?.product__Description.slice(0,157) + '...' : data?.[0]?.product__Description;

  return (
    <>
      <Helmet>
        <title>{`Testfabrics.com: ${data?.[0]?.product__Name ?? 'Product'}`}</title>
        <meta name="description" content={meta_description} />
      </Helmet>
      <h2>{data?.[0]?.product__Name}</h2>
      <hr />

      <h4 style={{ left: "4px", textAlign: "left" }}>
        Item Number : {data?.[0]?.product__Number}
      </h4>

      {/* <p> */}
      {/* <h5 style={{ margin: "10px 0" }}>Item History:</h5> */}
      <h6 style={{ fontWeight: "normal", lineHeight: "1" }}>
        {formattedData || "N/A"}
      </h6>

      {/* <h2>Important</h2> */}
      {availableData?.[0]?.Available__Status === "Show" && (
        <h6 style={{ fontWeight: "normal" }}>
          <b>Available In : </b>
          {availableData?.[0]?.Available__Name}
        </h6>
      )}
      {quantityData?.data?.[0]?.Min__Status === "Show" && (
        <h6 style={{ fontWeight: "normal" }}>
          <b>Minimum Order Quantity : </b>
          {quantityData?.data?.[0]?.Min__Name}
        </h6>
      )}

      <div>
            {/* Approximate Weight */}
            {(data?.[0].product__Weight_gm_m2 !== 0 || data?.[0].product__Weight_Oz_yd2 !== 0) && (
                <h6 style={{ fontWeight: "normal" }}>
                    <b>Approx Weight:</b> {data?.[0].product__Weight_gm_m2} grams/meter<sup>2</sup> (
                    {data?.[0].product__Weight_Oz_yd2} ounces/yard<sup>2</sup>)
                </h6>
            )}

            {/* Approximate Width */}
            {(data?.[0].product__Width_Inches !== 0 || data?.[0].product__Width_Cm !== 0) && (
                <h6 style={{ fontWeight: "normal" }}>
                    <b>Approx Width:</b> {data?.[0].product__Width_Inches} inches ({data?.[0].product__Width_Cm} cm)
                </h6>
            )}
        </div>

      {/* 1 Piece <br></br>
            2. Crockmeter Machine Replacement Round Clip - 1 Piece <br></br>3. Crockmeter Machine Replacement Emery Paper - 4 Piece
            </h6> */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        {/* <Link
          to={{
            pathname: "/request-quote",
            state: {
              categoryName: data?.[0]?.category__Name, // Pass category name
              subcategoryName: data?.[0]?.subcategory__Name, // Pass subcategory name
              productName: data?.[0]?.product__Name, // Pass product name
            },
          }}
          className="theme-btn"
        >
          Request a Quote/More Information
          <BsArrowRight style={{ marginLeft: "8px" }} />
        </Link> */}

        <Link   to={{
            pathname: "/buy-form",
            state: {
              categoryName: data?.[0]?.category__Name, // Pass category name
              subcategoryName: data?.[0]?.subcategory__Name, // Pass subcategory name
              productName: data?.[0]?.product__Name, // Pass product name
            },
          }}
          className="theme-btn">
        Buy Now
        </Link>

        {/* <Link to="/business-inquiry" className="theme-btn" style={{}}>
          Business Inquiry Form
          <BsArrowRight style={{ marginLeft: "8px" }} />

        </Link> */}
      </div>
    </>
  );
}

export default DetailsContent;

{
  /* <h6>
    A. AATCC CVC 25
    Testfabrics Crockmeter Verification Cloth
    2" X 6" (Pinked ^^^^ Edges) - 25 Pieces
    With Data Sheet and Instructions
    </h6>
    <h6 style={{fontWeight:"bold"}}>
    B. Replacment parts:
    </h6>
    <h6>1. Crockmeter Machine Replacement Finger (Tip) - 1 Piece</h6>
    <h6>2. Crockmeter Machine Replacement Round Clip - 1 Piece</h6>
    <h6>3. Crockmeter Machine Replacement Emery Paper - 4 Piece</h6>
    
    {/* </p> */
}

{
  /* <h2>Quality Construction</h2>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ipsa!
        Repellendus at accusantium dolore rerum exercitationem iusto error? Odio deleniti in
        iste tenetur placeat excepturi eum officia ratione, vel aperiam?
    </p>
    <SRLWrapper>
        <div className="row">
            <div className="col-md-6 col-12">
                <a href={img1} className="popup-gallery">
                    <img src={img1} alt="" />
                </a>
            </div>
            <div className="col-md-6 col-12">
                <a href={img2} className="popup-gallery">
                    <img src={img2} alt="" />
                </a>
            </div>
        </div>
    </SRLWrapper> */
}
