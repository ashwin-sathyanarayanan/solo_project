import React, { useState } from "react";
import { navigate } from "@reach/router";

import _ from 'lodash';
import axios from "axios";

const Register = (props) => {
    const { userLoggedIn, setUserLoggedIn } = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = () =>{
        axios.post("http://localhost:8000/register", {
            firstName,
            lastName,
            email,
            address,
            city,
            state,
            password,
            confirmPassword
        },
        {
            // this will force the sending of the credentials / cookies so they can be updated
            // XMLHttpRequest from a different domain cannot set cookie values for their own domain 
            // unless withCredentials is set to true before making the request
            withCredentials: true,
        })
        .then(res => {
            // when we successfully created the account, reset state for registration form
            // We do this if we are NOT navigating automatically away from the page
            setUserCredentials({
                email: email,
                password: password
            })
            navigate("/login");
            loginUser();
        })
        .catch((err) => {
            console.log(err.response.data.errors);
        });
    }


const loginUser = () => {

    axios.post("http://localhost:8000/login", userCredentials,
        {
            withCredentials: true
        })
        .then((res) => {
            setUserLoggedIn(res.data.userLoggedIn)
            navigate("/");
        })
        .catch(err => {
            console.log(err.response);
        });
};

return (<>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
        <h1>Register</h1>
        <div className="position-absolute top-50 start-50 translate-middle" style={{ display: 'flex', justifyContent: "center", alignItems: "center", border: '3px solid black', height: '350px', width: "750px" }} >
            <form style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }} onSubmit={handleSubmit}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div>
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
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
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
                        <div>
                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="state">State:</label>
                            <input
                                type="text"
                                id="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <a href="/login" style={{marginRight:"10px"}}>Have an account? Log in</a>
                        <button type="submit">Create Account</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</>)
}

export default Register;