import { TextField, Button, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const PersonalStepper = ({ user, onPersonalDetailsChange, errors }) => {
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

  const handleDateChange = (date) => {
    setPersonalDetails((personalDetailsState) => ({
      ...personalDetailsState,
      "dateofbirth": new Date(date).toLocaleDateString('en-GB')
    }))
    onPersonalDetailsChange({
      ...user,
      personalDetails: {
        ...personalDetailsState,
        "dateofbirth": new Date(date).toLocaleDateString('en-GB')
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
        required
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
        required
      />
      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:'10px' }}>
        <div style={{ width: '48%'}}>
          <Select
            margin="dense"
            label="Gender"
            value={personalDetailsState.gender}
            placeholder="please Select Gender"
            name="gender"
            onChange={(e) => handleChange(e)}
            required
            fullWidth
            error={errors.gender}

          >
            <MenuItem value={"male"}>Male</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
        </div>

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
        <div style={{ width: '48%' }}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              margin="dense"
              label="Date Of Birth"
           
              value={personalDetailsState.dateofbirth}
              onChange={handleDateChange}
              maxDate={new Date()}
              format="DD-MM-YYYY"
              renderInput={(params) => <TextField fullWidth {...params} name="datofbirth" error={errors.dateofbirth}
                helperText={errors.dateofbirth && errors.dateofbirth} />}

            />
          </LocalizationProvider>
        </div>
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

        
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
      </div> */}

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '48%'}}>
        <TextField
          margin="dense"
          label="City"
          type="text"
          value={personalDetailsState.city}
          error={errors.city}
          helperText={errors.city && errors.city}
          name="city"
          onChange={(e) => handleChange(e)}
          fullWidth
          required
        />
        </div>
        <div style={{ width: '48%'}}>
        <TextField
          margin="dense"
          label="State"
          type="text"
          error={errors.state}
          helperText={errors.state && errors.state}
          value={personalDetailsState.state}
          name="state"
          onChange={(e) => handleChange(e)}
          required
          fullWidth
        />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '48%'}}>
        <TextField
          margin="dense"
          label="Country"
          type="text"
          error={errors.country}
          helperText={errors.country && errors.country}
          value={personalDetailsState.country}
          name="country"
          onChange={(e) => handleChange(e)}
          required
          fullWidth
        />
        </div>
        <div style={{ width: '48%'}}>
        <TextField
          margin="dense"
          label="Pincode"
          type="text"
          error={errors.pincode}
          helperText={errors.pincode && errors.pincode}
          value={personalDetailsState.pincode}
          name="pincode"
          onChange={(e) => handleChange(e)}
          required
          fullWidth
        />
        </div>
      
      </div>
      <TextField
        margin="dense"
        label="Full Address"
        type="text"
        error={errors.address1}
        helperText={errors.address1 && errors.address1}
        value={personalDetailsState.address1}
        name="address1"
        onChange={(e) => handleChange(e)}
        required
        rows={2}
        multiline
        fullWidth
      />
    </div>
  );
};

export default PersonalStepper;
