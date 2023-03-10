import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const PersonalStepper = ({ user, onPersonalDetailsChange,errors }) => {
  const [personalDetailsState, setPersonalDetails] = useState(user.personalDetails);
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPersonalDetails((prevPersonalDetailsState) => ({
      ...prevPersonalDetailsState,
      [name]: value
    }));
    onPersonalDetailsChange({
      ...user,
      personalDetails: {
        ...personalDetailsState,
        [name]: value
      }
    });
  };

  const handleDateChange =(date) => {
    setPersonalDetails((personalDetailsState)=>({
      ...personalDetailsState,
      "dateofbirth":new Date(date).toLocaleDateString('en-GB')
    }))
    onPersonalDetailsChange({
      ...user,
      personalDetails: {
        ...personalDetailsState,
        "dateofbirth":new Date(date).toLocaleDateString('en-GB')
      }
    });
  }

  return (
    <div>
      <TextField
        margin="dense"
        label="Name"
        type="text"
        value={personalDetailsState.name}
        name="name"
        error={errors.name}
        helperText={errors.name && errors.name}
        fullWidth
        onChange={(e) => handleChange(e)}
        required
      />
      <TextField
        margin="dense"
        label="Email"
        type="text"
        value={personalDetailsState.email}
        name="email"
        error={errors.email}
        helperText={errors.email && errors.email}
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <TextField
        margin="dense"
        label="Phone"
        type="text"
        value={personalDetailsState.phone}
        error={errors.phone}
        helperText={errors.phone && errors.phone}
        name="phone"
        onChange={(e) => handleChange(e)}
        fullWidth
      />
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField
        margin="dense"
        label="gender"
        type="text"
        error={errors.gender}
        helperText={errors.gender && errors.gender}
        value={personalDetailsState.gender}
        name="gender"
        onChange={(e) => handleChange(e)}

      />

{/* <TextField
        margin="dense"
        label="dateofbirth"
        type="text"
        placeholder='DD/MM/YYYY'
        error={errors.dateofbirth}
        helperText={errors.dateofbirth && errors.dateofbirth}
        value={personalDetailsState.dateofbirth}
        name="dateofbirth"
        onChange={(e) => handleChange(e)}

      /> */}
      <div style={{width:'42%',marginTop:'10px'}}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              margin="dense"
              h
              label="Date Of Birth"
              value={personalDetailsState.dateofbirth}
              onChange={handleDateChange}
              maxDate={new Date()}
              format="DD-MM-YYYY"
              renderInput={(params) => <TextField {...params} name ="datofbirth" />}
              // error={errors.dateofbirth}
              // helperText={errors.dateofbirth && errors.dateofbirth}
            />
          </LocalizationProvider>
          </div>
      </div>
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField
        margin="dense"
        label="Address1"
        type="text"
        error={errors.address1}
        helperText={errors.address1 && errors.address1}
        value={personalDetailsState.address1}
        name="address1"
        onChange={(e) => handleChange(e)}

      />
         <TextField
        margin="dense"
        label="Address2"
        type="text"
        error={errors.address2}
        helperText={errors.address2 && errors.address2}
        value={personalDetailsState.address2}
        name="address2"
        onChange={(e) => handleChange(e)}

      />
      </div>

      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField
        margin="dense"
        label="City"
        type="text"
        value={personalDetailsState.city}
        error={errors.city}
        helperText={errors.city && errors.city}
        name="city"
        onChange={(e) => handleChange(e)}

      />
         <TextField
        margin="dense"
        label="State"
        type="text"
        error={errors.state}
        helperText={errors.state && errors.state}
        value={personalDetailsState.state}
        name="state"
        onChange={(e) => handleChange(e)}

      />
      </div>   
      <div style={{display:'flex',justifyContent:'space-between'}}>
      <TextField
        margin="dense"
        label="Country"
        type="text"
        error={errors.country}
        helperText={errors.country && errors.country}
        value={personalDetailsState.country}
        name="country"
        onChange={(e) => handleChange(e)}

      />
         <TextField
        margin="dense"
        label="Pincode"
        type="text"
        error={errors.pincode}
        helperText={errors.pincode && errors.pincode}
        value={personalDetailsState.pincode}
        name="pincode"
        onChange={(e) => handleChange(e)}

      />
      </div>
    </div>
  );
};

export default PersonalStepper;
