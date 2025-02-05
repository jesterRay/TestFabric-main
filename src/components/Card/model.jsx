import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function DetailModel(props){
    // const { data, error, isLoading } = useApi('country_data', {country_id:parseInt(props?.countryid?.id)});
    // const [data,setData] = useState([])

// console.log("dataaaaa:",props?.data)
    return(
        <>
            <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // animation={true}
            fullscreen={'xxl-down'}
            style={{minHeight:"100%",padding:"5rem 1rem"}}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{color:"black"}}>
                   {props?.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row' style={{minHeight:"100%",padding:"2rem 1rem"}}>
                        <div className='center col-10' style={{color:"black"}}>
                            <h6>{props?.data}</h6>


                            {/* 
                            
                            <br/>
                            <h5>{data?.[0]?.agent__Name}</h5>
                            <br/>
                            <h6>{data?.[0]?.agent__Address && Parser(data?.[0]?.agent__Address)}</h6>
                            <br/>
                            <h6><b>Phone:</b> {data?.[0]?.agent__Phone}</h6>
                            <h6><b>Fax:</b> {data?.[0]?.agent__Fax}</h6>
                            <h6 style={{fontSize:"14px"}}><b>Email:</b> {data?.[0]?.agent__Phone}</h6> */}
                        </div>
                        <div className='col-2'>
                        <img   style={{marginRight:"5px"}} src={props?.thumbnail} />

                        </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}