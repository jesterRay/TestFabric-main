import { FaDraftingCompass, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

const approchData = [
    {
        id: uuidv4(),
        thumb: thumb1,
        icon: <FaDraftingCompass />,
        heading: 'Mission Statement',
        text: "The conviction behind Testfabrics, Inc. is to provide consistent, high-quality test materials and services while catering to the specialized needs of the textile market and industries across the UK and worldwide. Since our establishment in 1930, Testfabrics, Inc. has built a diverse portfolio of delivering outstanding materials for dye and auxiliary chemical testing, facilitating chemists, manufacturers, and suppliers to reach the heights of success within the textile industry. Driven by our commitment to client satisfaction, we deliver excellence through innovative, reliable, and custom solutions that meet our clients’ needs. We pledge to position Testfabrics, Inc. as the leading provider of textile materials in the region and across Europe.",
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: <FaPencilRuler />,
        heading: 'Vision Statement',
        text: "Testfabrics, Inc. envisions becoming a leading provider of essential textile testing materials and services, empowering our clients to reach the pinnacle of success in their fields. We aim to expand our reach by attracting a diverse range of clients across industries such as chemistry, arts and forensics. We are excited to collaborate and innovate unparalleled solutions for various industries. Our vision is to inspire, equip our partners, acting as a catalyst for their growth through relentless excellence and commitment while also driving our own exponential growth.",
        btnText: 'Read More',
        pageLink: '/project-details',
    },

    // {
    //     id: uuidv4(),
    //     thumb: thumb3,
    //     icon: <FaHardHat />,
    //     heading: 'Our Approch',
    //     text: 'We have attracted various other client groups all needing attention paid to their special textile needs.  include the manufacturers and consumers of surfactants and synthetic detergents, consumer products producers, textile industry consumers etc',
    //     btnText: 'Read More',
    //     pageLink: '/project-details',
    // },
];

export default approchData;
