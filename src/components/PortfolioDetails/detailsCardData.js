import { v4 as uuidv4 } from 'uuid';
import icon1 from '../../assets/img/icon/process-icon.png';

const detailsCardData = [
    {
        id: uuidv4(),
        icon: icon1,
        num: '01',
        heading: 'Satisfying a Need',
        text: 'We are committed to understanding and responding to the unique requirements of each of our clients.',
    },

    {
        id: uuidv4(),
        icon: icon1,
        num: '02',
        heading: 'Special Attention',
        text: 'We are committed to providing our clients with the highest quality products and services, supported by our team of experienced and knowledgeable staff.',
    },

    {
        id: uuidv4(),
        icon: icon1,
        num: '03',
        heading: ' Customer Input',
        text: 'We are always looking for ways to improve our products and services, and we welcome your feedback.',
    },

    {
        id: uuidv4(),
        icon: icon1,
        num: '04',
        heading: 'Working Together',
        text: 'Testfabrics is your partner in textile testing. We are committed to working with you to achieve your goals and objectives.',
    },
];

export default detailsCardData;
