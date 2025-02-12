import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProductSlider.css";
import { concatUrlPath } from "../../helpers/concatUrlPath";
const ProductSlider = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}best_seller_products`);
        if (response.data.success && Array.isArray(response.data.data)) {
          setProductData(response.data.data.flat());
          console.log(productData);
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    fetchProducts();
  }, []);


  return (
    <div className="product-slider-container">
      <div className="marquee-container">
        {[...productData, ...productData].map((product, index) => 
            {
              let url = concatUrlPath('product-details',product.product__Name,product.product__ID);
              return (
                <div key={`${product.product__ID}-${index}`} className="product-card">
              <div className="card-thumb">
                <img
                  src={`https://testfabrics.com/product_images/${product.product_image}`}
                  onError={(e) => (e.target.src = "/default.jpg")} // Fallback image
                  alt={product.product__Name || "Product"}
                />
              </div>
              <div className="content">
                <h3>{product.product__Name || "Product Name"}</h3>
                <Link  to={url} className="read-btn">
                  View Details <BsArrowRight />
                </Link>
              </div>
            </div>
              );
            }
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
