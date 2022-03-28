import { useEffect, useState } from "react";
import axios from "axios";
import Navigationbar from "./NavigationBar";
import { navigate } from "@reach/router";


const Account = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const id = "";


    useEffect(() => {
        axios
            .get(`http://localhost:8000/account`, {
                // send our cookie along with the axios request
                withCredentials: true
            })
            .then(response => {
                // setUserData(response.data.queriedUser)
                setFirstName(response.data.queriedUser.firstName)
                setLastName(response.data.queriedUser.lastName)
                setEmail(response.data.queriedUser.email)
                setAddress(response.data.queriedUser.address)
                setCity(response.data.queriedUser.city)
                setState(response.data.queriedUser.state)
                id= response.data.queriedUser._id
            })
            .catch((err) => console.log(err.response))
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:8000/update`, {
                firstName,
                lastName,
                email,
                address,
                city,
                state
            })
            .then((response) => {
                console.log(response);
                navigate("/account");
            })
            .catch((err) => console.log(err.response))
    }


    return (<div>
        <Navigationbar />
        <div style={{  backgroundColor: "#F7A388" }}>
            <div className="position-absolute top-50 start-50 translate-middle" style={{display: 'flex', justifyContent: "center", alignItems: "center", border: '1px white black', height: '300px', width: "650px", backgroundColor: "#FA7977"}} >
                <form style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} onSubmit={handleSubmit}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="firstName">First Name:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="lastName">Last Name:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="address">Address:</label>
                                <input
                                    type="text"
                                    id="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div style={{margin: "5px"}}>
                                <label htmlFor="state">State:</label>
                                <input
                                    type="text"
                                    id="state"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                        </div>
                            <div>
                        <button type="submit">Update User Info</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>)
}

export default Account;