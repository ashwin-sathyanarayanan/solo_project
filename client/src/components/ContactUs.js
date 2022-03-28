import axios from "axios";
import Navigationbar from "./NavigationBar";
import "../App.css"

import {Card} from "react-bootstrap";

const ContactUs = () => {

    return (<>
    <Navigationbar />
    <div className="position-relative" style={{ height: "680px", backgroundColor: "#F7A388"}}>
        <div className="position-absolute top-50 start-50 translate-middle" style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
            <Card style={{ minWidth: '18rem', display:"flex", }}>
                <Card.Body style={{ className: "d-flex justify-content-center" , backgroundColor: "#FA7977"}}>
                    <Card.Title className="text-center">Contact Me:</Card.Title>
                    <Card.Subtitle className="text-center">Email: email@email.com</Card.Subtitle>
                    <span> <a href="#" style={{ color: "black" }}>Facebook</a> | </span>  
                    <span><Card.Link href="#" style={{ color: "black" }}>Instagram</Card.Link> | </span>
                    <span><Card.Link href="#" style={{ color: "black" }}>Twitter</Card.Link> | </span>
                    <span><Card.Link href="#" style={{ color: "black" }}>Tik Tok</Card.Link></span>
                </Card.Body>
            </Card>
        </div>
    </div>
    </>)
}

export default ContactUs;