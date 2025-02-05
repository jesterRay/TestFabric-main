import { v4 as uuidv4 } from 'uuid';
import icon1 from '../../assets/img/icon/factory.png';

const videoFeaturedData = [
    {
        id: uuidv4(),
        icon: icon1,
        heading: 'Custom Dyeing',
        text: 'Maintains an internal laboratory for quality control testing of the raw materials it uses in production',
    },

    {
        id: uuidv4(),
        icon: icon1,
        heading: 'Custom Soiling',
        text: 'Custom application of appropriate soil media is available. Please contact us for more information.',
    },

    {
        id: uuidv4(),
        icon: icon1,
        heading: 'Cutting Dies',
        text: 'ollowing dies are available for fabric and related material cutting.',
    },

    {
        id: uuidv4(),
        icon: icon1,
        heading: 'Skein Reeling',
        text: 'Yarns from our inventory can be made into 18" diameter dye skeins',
    },
];

export default videoFeaturedData;
