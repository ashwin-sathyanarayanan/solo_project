import axios from "axios";
import { useEffect, useState } from "react";
import Navigationbar from "./NavigationBar";

import {Card, Button} from "react-bootstrap";


const DisplayOne = (props) => {
    const { userLoggedIn, setUserLoggedIn, id } = props;
    const [itemData, setItemData] = useState({})
    useEffect(() => {
        axios
            .get(`http://localhost:8000/${ id }`, {
                // send our cookie along with the axios request
                withCredentials: true
            })
            .then((response) => {
                console.log(response.data.queriedItem);
                setItemData(response.data.queriedItem);
            })
            .catch((err) => console.log(err.response))
    }, [])

    return(<>
    <Navigationbar
        userLoggedIn={userLoggedIn}
        setUserLoggedIn={setUserLoggedIn}
    />    
    <div>
        <div className="position-relative" style={{ height: "600px"}}>
            <div className="position-absolute top-50 start-50 translate-middle" style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
                <Card className="text-center" style={{ minWidth: '18rem', display:"flex"}}>
                    <Card.Body style={{ className: "d-flex justify-content-center"}}>
                        <Card.Img variant="top" src={itemData.imageURL} style={{                            width: "300px",
                            height: "300px",
                            border: "solid grey 1px"
                        }}/>
                        <Card.Title className="text-center">{itemData.name}</Card.Title>
                        <Card.Subtitle className="text-center">Price: {itemData.price}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
</>)
}

export default DisplayOne;