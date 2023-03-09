import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const PersonalDetails = ({name,onChangeName,nameError,nameErrorMsg}) => {
    console.log(nameError,nameErrorMsg)
    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('')
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [emailError, setEmailError] = useState(false);
    // const [nameError, setNameError] = useState(false);
    const [mobileError, setmobileError] = useState(false);
    const [address1Error, setAddress1Error] = useState(false);
    const [pincodeError, setPincodeError] = useState(false);
    const [stateError, setStateError] = useState(false);
    const [address2Error, setAddressError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [emailErrorMsg, setEmailErrorMsg] = useState('');
    // const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [mobileErrorMsg, setMobileErrorMsg] = useState('');
    const [address1ErrorMsg, setAddressErrorMsg] = useState('');
    const [address2ErrorMsg, setAddress2ErrorMsg] = useState('');
    const [countryErrorMsg, setCountryErrorMsg] = useState('');
    const [stateErrorMsg, setStateErrorMsg] = useState('');
    const [pincodeErrorMsg, setPincodeErrorMsg] = useState('');




    

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };
    const handleChange = (e) => {
        onChangeName(e.target.value)
    };


    return (
        <form>
            <div>
                <TextField
                    margin="dense"
                    label="Name"
                    type="text"
                    value={name}
                    error={nameError} helperText={nameError && nameErrorMsg}
                    fullWidth
                    onChange={handleChange}
                    required
                />
                <TextField
                    margin="dense"
                    label="Email"
                    type="text"
                    fullWidth
                    value={email}
                    error={emailError} helperText={emailError && emailErrorMsg}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="Phone"
                    type="text"
                    fullWidth
                    error={mobileError} helperText={mobileError && mobileErrorMsg}
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                />
                <TextField
                    autoFocus
                    margin="dense"
                    label="State"
                    type="text"
                    error={stateError} helperText={stateError && stateErrorMsg}
                    value={state}
                    fullWidth
                    onChange={(event) => setState(event.target.value)}
                />
                <span style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Address 1"
                        type="text"
                        value={address1}
                        error={address1Error} helperText={address1Error && address1ErrorMsg}
                        onChange={(event) => setAddress1(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Address 2"
                        type="text"
                        value={address2}
                        error={address2Error} helperText={address2Error && address2ErrorMsg}
                        onChange={(event) => setAddress2(event.target.value)}
                    />


                </span>

                <span style={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Country"
                        type="text"
                        value={country}
                        error={countryError} helperText={countryError && countryErrorMsg}
                        onChange={(event) => setCountry(event.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Pincode"
                        type="text"
                        value={pincode}
                        error={pincodeError} helperText={pincodeError && pincodeErrorMsg}
                        onChange={(event) => setPincode(event.target.value)}
                    />


                </span>
            </div>

            {/* <button type="submit">Submit</button> */}
        </form>
    );
}

export default PersonalDetails;