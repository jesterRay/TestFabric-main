import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'info@testfabrics.com',
        // text: 'Send mail asap anytime',
        // item1: 'info@testfabrics.com',
        hrefTag:"mailto:info@testfabrics.com"
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: '+1 (570) 603 0432',
        hrefTag:"tel: 15706030432"
        // text: 'call us asap anytime',
        // item1: '+1 (570) 603 0432',
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Testfabrics Inc 415 Delaware Ave, West Pittston, PA 18643, United States',
        item1: '',
        hrefTag:"https://maps.app.goo.gl/qpsox4wJ4an7FZuZ8"
    },
];

export default contactData;
