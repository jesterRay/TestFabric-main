import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/home3/service1.jpg';
import thumb2 from '../../assets/img/home3/service2.jpg';
import thumb3 from '../../assets/img/home3/service3.jpg';

const servicesThreeData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '01',
        heading: 'Custom Dyeing',
        text: 'Testfabrics maintains an internal lab for quality control, inventory evaluation, customer service, and problem solving.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        index: '02',
        heading: 'Our Visions',
        text: 'Testfabrics is in the textile business for you. We value your input and look forward to working with you.',
    },
    {
        id: uuidv4(),
        thumbnail: thumb1,
        index: '03',
        heading: 'Custom Soiling',
        text: 'Custom application of appropriate soil media is available. Please contact us for more information.',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        index: '04',
        heading: 'Our History',
        text: 'In 1930s, Werner Klaas, a Swiss silk textile technologist, founded Testfabrics in the US. He sold silk piece goods to textile mills, dyers, printers, and their suppliers. He was resourceful and soon clients began to rely on him to solve their textile sourcing problems.',
    },
];

export default servicesThreeData;
