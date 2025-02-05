import React from 'react';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,
    },
    {
        title: 'Discover us',
        path: '/',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Heritage',
                path: '/heritage',
                // cName: 'sub-nav',
            },
            {
                title: 'Team',
                path: '/team',
                // cName: 'sub-nav',
            },

        ],
    },
    {
        title: 'Products',
        path: '/',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Browse By Product Category',
                path: '/product-by-category',
                // cName: 'sub-nav',
            },
            {
                title: 'Browse By Standard test Method',
                path: '/product-by-standards',
                // cName: 'sub-nav',
            },
            {
                title: 'Browse By Interest Group',
                path: '/product-by-category',
            },
            // {
            //     title: 'DOWNLOADS',
            //     path: '/downloads',
            // },
        ],
    },
    {
        title: 'Support',
        path: '/',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'REQUEST CERTIFICATE OF CONFORMITY',
                path: '/request-certifiate',
                // cName: 'sub-nav',
            },
            {
                title: 'REQUEST MATERIAL SAFETY DATA SHEET(MSDS)',
                path: '/msds-request',
                // cName: 'sub-nav',
            },
            {
                title: 'TRACK YOUR ORDER',
                path: '/track-order',
            },
            {
                title: 'DOWNLOADS',
                path: '/downloads',
            },
        ],
    },

    {
        title: 'Services',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'CUSTOM DYEING',
                path: '/services/CUSTOM_DYEING',
                // cName: 'sub-nav',
            },
            {
                title: 'CUSTOM PADDING',
                path: '/services/CUSTOM_PADDING',
                // cName: 'sub-nav',
            },
            {
                title: 'CUSTOM SOILING',
                path: '/services/CUSTOM_SOILING',
            },
            {
                title: 'CUTTING & SLITTING',
                path: '/services/CUTTING_&_SLITTING',
            },
            {
                title: 'CUTTING DIES',
                path: '/services/CUTTING_DIES',
                // cName: 'sub-nav',
            },
            {
                title: 'GROUNDS FOR DIGITAL PRINTING',
                path: '/services/GROUNDS_FOR_DIGITAL_PRINTING',
                // cName: 'sub-nav',
            },
            {
                title: 'PAPER BACKING',
                path: '/services/PAPER_BACKING',
            },
            {
                title: 'SEWING',
                path: '/services/SEWING',
            },
            {
                title: 'SKEIN REELING',
                path: '/services/SKEIN_REELING',
                // cName: 'sub-nav',
            },
            {
                title: 'SPECIMEN PREPARATION',
                path: '/services/SPECIMEN_PREPARATION',
                // cName: 'sub-nav',
            },
            {
                title: 'TEST METHOD DEVELOPMENT',
                path: '/services/TEST_METHOD_DEVELOPMENT',
            },
            {
                title: 'TEXTILE TESTING SERVICES',
                path: '/services/TEXTILE_TESTING_SERVICES',
            },
        ],
    },

    // {
    //     title: 'News',
    //     path: '/news',
    // },

    // {
    //     title: 'Contact',
    //     path: '/contact',
    // },
];

export default menuData;
