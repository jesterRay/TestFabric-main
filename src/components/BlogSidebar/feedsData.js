import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/blog/pp1.jpg';
import thumb2 from '../../assets/img/blog/pp2.jpg';
import thumb3 from '../../assets/img/blog/pp3.jpg';
import thumb4 from '../../assets/img/blog/pp4.jpg';

const feedsData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        heading: 'Lorem ipsum dolor sit cing elit, sed do.',
        meta: '24th March 2019',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        heading: 'Lorem ipsum dolor sit cing elit, sed do.',
        meta: '24th March 2019',
    },

    {
        id: uuidv4(),
        thumbnail: thumb3,
        heading: 'Lorem ipsum dolor sit cing elit, sed do.',
        meta: '24th March 2019',
    },

    {
        id: uuidv4(),
        thumbnail: thumb4,
        heading: 'Lorem ipsum dolor sit cing elit, sed do.',
        meta: '24th March 2019',
    },
];

export default feedsData;
