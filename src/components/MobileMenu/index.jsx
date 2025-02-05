/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuContent from './MenuContent';
import menuData from './menuData';
import SubMenu from './SubMenu';
import playstore from '../../assets/img/playStore.png';
import logoTf from '../../assets/img/logo-tf.png';
import appleStore from '../../assets/img/appleStore.png'
const NavIcon = styled(Link)`
    font-size: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;

const SidebarNav = styled.nav`
    background-color: black;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = ({aboutData,serviceData}) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <>
                <NavIcon className="d-lg-none" to="#" style={{ justifyContent: 'flex-end' }}>
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                style={{
                                    color: 'white',
                                    fontSize: '18px',
                                    justifyContent: 'flex-start',
                                }}
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {menuData.map((item, index) => (
                            <SubMenu key={index} item={item} aboutData={aboutData} serviceData={serviceData} />
                        ))}
                        <MenuContent />
                        <div className=' ' style={{ zIndex: "7", display:"flex", justifyContent:"center" }}>
                        <div className='row'>
                            <div className='' style={{display:"flex",flexDirection:"row"}}>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <a href='https://play.google.com/store/apps/details?id=com.tech.testfabrics.test_fabrics' target='_blank'>
                                    <img style={{ borderRadius: "15%" }} src={playstore} width={"100px"} height={"35px"} />
                                </a>
                                </div>
                                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <a href='https://apps.apple.com/us/app/testfabrics-product-validation/id1660715463' target='_blank'>
                                    <img style={{ borderRadius: "15%" }} src={appleStore} width={"100px"} height={"55px"} />
                                </a>
                                </div>
                               
                            </div>

                        </div>


                    </div>
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;
