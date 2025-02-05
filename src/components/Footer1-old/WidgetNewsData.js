import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/blog/b1.jpg';
import thumb2 from '../../assets/img/blog/b2.jpg';
import thumb3 from '../../assets/img/blog/b3.jpg';

const WidgetNewsData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        meta: '24th November 2020',
        heading: 'The Most Successful Engineering Contractor',
        link: '/news-details',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        meta: '24th November 2020',
        heading: 'The Most Successful Engineering Contractor',
        link: '/news-details',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        meta: '24th November 2020',
        heading: 'The Most Successful Engineering Contractor',
        link: '/news-details',
    },
];

export default WidgetNewsData;
