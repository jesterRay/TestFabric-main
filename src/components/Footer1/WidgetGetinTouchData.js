import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { v4 as uuidv4 } from 'uuid';

const WidgetGetinTouchData = [
    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: '+1 (570) 603 0432',
        type:1
    },

    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email',
        text: 'info@testfabrics.com',
        type:2
    },

    {
        id: uuidv4(),
        icon: <BiMap />,
        heading: 'Location',
        text: '415 Delaware Avenue,West Pittston, PA 18643, USA',
        type:3
    },
];

export default WidgetGetinTouchData;
