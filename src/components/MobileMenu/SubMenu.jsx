/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;

    &:hover {
        background: #ffc107;
        color: white;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #ffc107;
        cursor: pointer;
        color: white;
    }
`;

const SubMenu = ({ item,aboutData,serviceData }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((data, index) => (
                    <DropdownLink to={data.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{data.title}</SidebarLabel>
                    </DropdownLink>
                ))}
                {/* <SidebarLink to='/' onClick={false && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>Home</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink> */}
            {/* {subnav &&
                item.subNav.map((data, index) => (
                    <DropdownLink to={data.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{data.title}</SidebarLabel>
                    </DropdownLink>
                ))} */}
        </>
    );
};

export default SubMenu;
