import { BsAward, BsTrophy } from 'react-icons/bs';
import { FaDollarSign, FaRegBuilding, FaToolbox, FaWordpress } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const timeLineData = [
    {
        id: uuidv4(),
        year: 1935,
        icon: <BsAward />,
        heading: 'Starting Our Journey',
        text: 'Testfabrics was founded by Werner Klaas in 1930s to provide the textile industry with high-quality fabrics and custom solutions.',
        transform: '',
    },

    {
        id: uuidv4(),
        year: 1965,
        icon: <BsTrophy />,
        heading: 'Expands Operations with Acquisition of Elkay',
        text: 'Testfabrics acquired Elkay Weaving Co., the sole producer of special multifiber fabrics for over 15 years. This acquisition gave Testfabrics increased control over the production of its core products and expanded its inventory to meet the needs of a wider range of clients.',
        transform: 'transform-bottom',
    },

    {
        id: uuidv4(),
        year: 1989,
        icon: <FaToolbox />,
        heading: 'recognized as "reference standard test materials" by ISO',
        text: 'ISO Technical Committee TC 38, SC1, recognized two of Testfabrics’ long-standing multifiber adjacent fabrics, as well as several of their single fiber adjacent fabrics and their AATCC crockmeter cloth as ‘reference standard test materials’ for worldwide textile industry procedures governing textile production.',
        transform: '',
    },

    // {
    //     id: uuidv4(),
    //     year: 2008,
    //     icon: <FaWordpress />,
    //     heading: 'Started WordPress Solution Service',
    //     text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    //     transform: 'transform-bottom',
    // },

    // {
    //     id: uuidv4(),
    //     year: 2010,
    //     icon: <BsTrophy />,
    //     heading: 'Best IT Compnay of 2010',
    //     text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    //     transform: '',
    // },

    // {
    //     id: uuidv4(),
    //     year: 2015,
    //     icon: <FaRegBuilding />,
    //     heading: 'Starting Our Conystruction Journey',
    //     text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    //     transform: 'transform-bottom',
    // },

    // {
    //     id: uuidv4(),
    //     year: 2020,
    //     icon: <FaDollarSign />,
    //     heading: 'Our industry business started',
    //     text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
    //     transform: '',
    // },
];

export default timeLineData;
