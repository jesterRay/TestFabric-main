import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../../assets/img/home1/eng.jpg';
import Bg3 from '../../assets/img/home1/eng2.jpg';
import Bg4 from '../../assets/img/home1/gas.jpg';
import Bg2 from '../../assets/img/home1/power.jpg';
import Icon1 from '../../assets/img/icon/s1.png';
import Icon2 from '../../assets/img/icon/s2.png';
import Icon3 from '../../assets/img/icon/s3.png';
import Icon4 from '../../assets/img/icon/s4.png';

const servicesOneData = [
    {
        id: uuidv4(),
        bgImg: Bg1,
        index: '01',
        icon: Icon1,
        heading: 'Replacement Parts for Crockmeter Machine',
        btnText: 'See Products',
    },

    {
        id: uuidv4(),
        bgImg: Bg2,
        icon: Icon2,
        index: '02',
        heading: 'Testfabrics "Custom size Crock Pieces"',
        btnText: 'See Products',
    },

    {
        id: uuidv4(),
        bgImg: Bg3,
        icon: Icon3,
        index: '03',
        heading: 'ISO Crockmeter Test Rubbing Cloth & Squares (Cotton Lawn)',
        btnText: 'See Products',
    },

    {
        id: uuidv4(),
        bgImg: Bg4,
        icon: Icon4,
        index: '04',
        heading: 'AATCC Crockmeter Test Cloth, Squares, Verification Cloth, Green Felt & Black Crock',
        btnText: 'See Products',
    },
];

export default servicesOneData;
