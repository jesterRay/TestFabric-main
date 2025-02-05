import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/service8.jpg';
import thumb2 from '../../assets/img/service8.jpg';
import thumb3 from '../../assets/img/service3.jpg';
import thumb4 from '../../assets/img/service4.jpg';
import thumb5 from '../../assets/img/service9.jpg';
import thumb6 from '../../assets/img/service6.jpg';

const servicesTwoData = [
    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaDraftingCompass />,
        index: '01',
        heading: 'AATCC CVK',
        subheading: "0103001",
        text: 'AATCC Crockmeter Verification Kit Each box contains: A. AATCC CVC 25 Testfabrics Crockmeter Ve...',
    },

    {
        id: uuidv4(),
        thumbnail: thumb2,
        icon: <FaRegBuilding />,
        index: '02',
        heading: 'CROCK BLOCK',
        subheading: "0103002",
        text: 'Crock Block with rectangular rubbing surface 19.0 × 25.4 mm (0.75 X 1.00 inch) for AATCC Test Meth...',
    },

    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaTruckMoving />,
        index: '03',
        subheading: "0103003",
        heading: 'CROCK CLIP',
        text: 'AATCC Standard Crockmeter Machine Stainless steel Clip',
    },

    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaRegBuilding />,
        index: '04',
        heading: 'CROCK EMERY PAPER 180',
        subheading: "0103006",
        text: 'Emery Paper, Grade 180, 9" x 11" (229 x 279 mm) Sheets',
    },

    {
        id: uuidv4(),
        thumbnail: thumb5,
        icon: <FaCity />,
        index: '05',
        heading: 'CROCK EMERY PAPER 320A',
        subheading: "0103004",
        text: 'Emery Paper Grit 320A for Crockmeter Machine 9"x11"/229x279 mm Sheets',
    },

    {
        id: uuidv4(),
        thumbnail: thumb1,
        icon: <FaHardHat />,
        index: '06',
        heading: 'CROCK FINGER TIP',
        subheading: "0103005",
        text: 'AATCC Standard Crockmeter Machine 16 ± 0.3 mm (0.625 ± 0.01 in.) diameter Finger Tip.',
    },
];

export default servicesTwoData;
