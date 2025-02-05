import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/blog/b1.jpg';
import thumb2 from '../../assets/img/blog/b2.jpg';
import thumb3 from '../../assets/img/blog/b3.jpg';

const blogOneData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        date: '20',
        month: 'Jun',
        category: 'Industrial',
        author: 'Miranda H.',
        title: 'The dramatically visualize on customer directed',
        link: '/news-details',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        date: '20',
        month: 'Jun',
        category: 'Industrial',
        author: 'Miranda H.',
        title: 'The dramatically visualize on customer directed',
        link: '/news-details',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        date: '20',
        month: 'Jun',
        category: 'Industrial',
        author: 'Miranda H.',
        title: 'The dramatically visualize on customer directed',
        link: '/news-details',
    },
];

export default blogOneData;
