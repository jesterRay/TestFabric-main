import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/blog/b1.jpg';
import thumb2 from '../../assets/img/blog/b2.jpg';
import thumb3 from '../../assets/img/blog/b3.jpg';

const blogTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        meta: '24th Aug 2021',
        author: 'Salman Ahmed',
        title: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque',
        link: '/news-details',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        meta: '24th Aug 2021',
        author: 'Salman Ahmed',
        title: 'Should one hire a professional cleaning company the newest technology',
        link: '/news-details',
    },
    {
        id: uuidv4(),
        thumbnail: thumb3,
        meta: '24th Aug 2021',
        author: 'Salman Ahmed',
        title: 'She World Most professional Inspiring Interior Design Of 2010, 2020',
        link: '/news-details',
    },
];

export default blogTwoData;
