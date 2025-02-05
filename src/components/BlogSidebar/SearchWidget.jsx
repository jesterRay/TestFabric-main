
import { update } from 'plotly.js';
import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory,useLocation } from 'react-router-dom';
    



function SearchWidget(props) {
    // STATES
    // const [search, setSearch] = useState('');
    // HANDLER
    const [search,setSearch] = useState({
        type: 1,
        value: ''
    });

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const searchOptions = ['All','Product','Test Standard',"Category","Method"];
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchValue = JSON.parse(searchParams.get('search'));

    useEffect(() => {
        if(searchValue && searchValue.value !== ''){    
           setSearch(searchValue);
        }
    },[]);

    const searchHandler = (e) => {
        const {name,value} = e.target;
        setSearch( prev => ({...prev, [name]: value}));
    };

    const handleSearchOption = (value) => {
        setSearch( prev => ({...prev, type: value}));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        history.push(`/search-page?search=${encodeURIComponent(JSON.stringify(search))}`);
    };
    

    return (
        <div className="single-sidebar-widget">
            {/* <div className="wid-title">
                <h3>Search By Name Or Category</h3>
            </div> */}
            <div className="search_widget">
                <form onSubmit={submitHandler} style={{display:"flex"}}>
                    <div className='search-dropdown' onChange={searchHandler} onClick={() => setToggleDropdown(prev => !prev)} name='type' value={search.type}>
                        <div className='search-dropdown-value' 
                            >
                                {
                                    searchOptions[search.type - 1]
                                }
                        </div>
                        <div className='search-dropdown-item-container' style={{display: toggleDropdown ? 'block' : 'none'}}>
                            <ul>
                                <li className='search-dropdown-item' 
                                    onClick={() => handleSearchOption(1)} 
                                >All</li>
                                {/* <option value={2}>category</option> */}
                                <li className='search-dropdown-item' onClick={() => handleSearchOption(2)}>Product</li>
                                <li className='search-dropdown-item' onClick={() => handleSearchOption(3)}>Test Standard</li>
                                <li className='search-dropdown-item' onClick={() => handleSearchOption(4)}>Category</li>
                                <li className='search-dropdown-item' onClick={() => handleSearchOption(5)}>Methods</li>
                            {/* <option value={4}>Interest Group</option> */}
                            </ul>
                        </div>
                    </div>
                    <input
                        className='search-field'
                        value={search.value}
                        onChange={searchHandler}
                        name='value'
                        type="text"
                        placeholder="Search Testfabrics Products and Global Test Methods Example Aatcc crock"
                    />
                    <button  type="submit">
                        <FaSearch />
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SearchWidget;

// {/* <select className='search-dropdown' onChange={searchHandler} name='type' value={search.type}>
//     <option className='search-dropdown-item' value={1}>All</option>
//     {/* <option value={2}>category</option> */}
//     <option className='search-dropdown-item' value={2}>Product</option>
//     <option className='search-dropdown-item' value={3}>Test Standard</option>
//     {/* <option value={4}>Interest Group</option> */}
// </select> */}
