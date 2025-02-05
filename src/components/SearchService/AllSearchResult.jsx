import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaDraftingCompass } from "react-icons/fa";
import SearchResultCard from "./SearchResultCard"; // Adjust import as needed

const AllSearchResult = ({ searchResults }) => {
    const [visibility, setVisibility] = useState({
        products: true,
        testStandards: true,
        subcategory: true,
        methods: true,
    });

    if (!searchResults) return null;

    const { products,
        test_standard: testStandards,
        subcategory,
        methods } = searchResults;

    const toggleVisibility = (section) =>
        setVisibility((prev) => ({ ...prev, [section]: !prev[section] }));

    const renderSection = (sectionName, data, searchType, label) => {
        if (!data?.length) return null;

        return (
            <>
                <h3
                    onClick={() => toggleVisibility(sectionName)}
                    className="mt-5 search-result-dropdown"
                >
                    {visibility[sectionName] ? <FaChevronDown /> : <FaChevronUp />} {label}
                </h3>
                {visibility[sectionName] &&
                    data.map((item, index) => (
                        <SearchResultCard
                            key={`${item.product__ID}-${index}`}
                            productId={item.product__ID}
                            thumbnail={item.product__ID}
                            defaultImg={`${process.env.REACT_APP_IMAGE_URL}images/product_testfabrics.jpg`}
                            icon={<FaDraftingCompass />}
                            heading={item.product__Name}
                            text={data?.product__Description ? data.product__Description.slice(0, 95) + "..." : null}
                            subheading={item.product__Number}
                            searchType={searchType}
                        />
                    ))}
            </>
        );
    };

    const isEmpty =
        !products?.length && !testStandards?.length && !subcategory?.length && !methods?.length;

    return (
        <>
            {isEmpty ? (
                <h3>No Results Found</h3>
            ) : (
                <>
                    {renderSection("products", products, 2, "Products")}
                    {renderSection("testStandards", testStandards, 3, "Test Standards")}
                    {renderSection("subcategory", subcategory, 4, "Sub-Category")}
                    {renderSection("methods", methods, 5, "Methods")}
                </>
            )}
        </>
    );
};

export default AllSearchResult;
