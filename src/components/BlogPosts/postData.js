import { v4 as uuidv4 } from 'uuid';
import author1 from '../../assets/img/blog/author_img.jpg';
import img1 from '../../assets/img/blog/p1.jpg';
import img2 from '../../assets/img/blog/p2.jpg';
import img3 from '../../assets/img/blog/p3.jpg';

const postData = [
    {
        id: uuidv4(),
        featuredImg: img1,
        category: 'Business',
        heading: 'Dharma Home Suites at Novia offers fully plain furnished apartments to fit',
        views: '232',
        comments: '35',
        meta: '24th March 2021',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        author: 'Hetmayar',
        authorImg: author1,
        postLink: '/news-details',
    },

    {
        id: uuidv4(),
        featuredImg: img2,
        category: 'Education',
        heading: 'Back to the future: Quality education through.',
        views: '232',
        comments: '35',
        meta: '24th March 2021',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        author: 'Hetmayar',
        authorImg: author1,
        postLink: '/news-details',
    },

    {
        id: uuidv4(),
        featuredImg: img3,
        category: 'Charity',
        heading: 'Take Care Of The Elderly Without Home.',
        views: '232',
        comments: '35',
        meta: '24th March 2021',
        post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidid unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh enderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        author: 'Hetmayar',
        authorImg: author1,
        postLink: '/news-details',
    },
];

export default postData;
