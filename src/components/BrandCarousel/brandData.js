import { v4 as uuidv4 } from 'uuid';
import logo1 from '../../assets/img/brand/1.png';
import logo2 from '../../assets/img/brand/2.png';
import logo3 from '../../assets/img/brand/3.png';
import logo4 from '../../assets/img/brand/4.png';

const brandData = [
    {
        id: uuidv4(),
        brandLogo: logo1,
    },

    {
        id: uuidv4(),
        brandLogo: logo2,
    },

    {
        id: uuidv4(),
        brandLogo: logo3,
    },

    {
        id: uuidv4(),
        brandLogo: logo4,
    },
];

export default brandData;
