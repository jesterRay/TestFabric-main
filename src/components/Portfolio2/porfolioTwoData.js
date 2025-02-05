import { v4 as uuidv4 } from 'uuid';
import img1 from '../../assets/img/portfolio/cases1.jpg';
import img2 from '../../assets/img/portfolio/cases2.jpg';
import img3 from '../../assets/img/portfolio/cases3.jpg';
import img4 from '../../assets/img/portfolio/cases4.jpg';

const portfolioTwoData = [
    {
        id: uuidv4(),
        image: img1,
        name: 'Rosalina D.',
        heading: 'Custom Dying',
        cost: '',
    },

    {
        id: uuidv4(),
        image: img2,
        name: 'Rosalina D.',
        heading: 'CUTTING DIES',
        cost: '',
    },

    {
        id: uuidv4(),
        image: img3,
        name: 'Rosalina D.',
        heading: 'PAPER BACKING',
        cost: '',
    },

    {
        id: uuidv4(),
        image: img4,
        name: 'Rosalina D.',
        heading: 'SEWING',
        cost: '',
    },
];

export default portfolioTwoData;
