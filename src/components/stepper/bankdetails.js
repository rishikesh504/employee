import { TextField, Button } from '@mui/material';
import { useState } from 'react';

const BankDetails = ({ user, onBankDetailsChange, errors }) => {

  const [bankDetailsState, setBankDetails] = useState(user.bankDetails);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBankDetails((prevBankDetailsState) => ({
      ...prevBankDetailsState,
      [name]: value
    }));
    onBankDetailsChange({
      ...user,
      bankDetails: {
        ...bankDetailsState,
        [name]: value
      }
    });
  };




  return (
    <div>
      <TextField
        margin="dense"
        label="Pan"
        type="text"
        value={bankDetailsState.pan}
        name="pan"
        error={errors.pan} helperText={errors.pan}
        onChange={handleChange}
        fullWidth


      />

      <TextField
        margin="dense"
        label="Aadhaar"
        type="text"
        value={bankDetailsState.aadhaar}
        name="aadhaar"
        error={errors.aadhaar} helperText={errors.aadhaar}
        onChange={handleChange}
        fullWidth

      />
      <TextField
        margin="dense"
        label="Bank Name"
        type="text"
        value={bankDetailsState.bankname}
        name="bankname"
        error={errors.bankname} helperText={errors.bankname}
        onChange={handleChange}
        fullWidth

      />
      <TextField
        margin="dense"
        label="Account No"
        type="text"
        value={bankDetailsState.bankaccountnumber}
        name="bankaccountnumber"
        error={errors.bankaccountnumber} helperText={errors.bankaccountnumber}
        onChange={handleChange}
        fullWidth

      />
      <TextField
        margin="dense"
        label="Ifsc"
        type="text"
        value={bankDetailsState.ifsc}
        name="ifsc"
        error={errors.ifsc} helperText={errors.ifsc}
        onChange={handleChange}
        fullWidth

      />

    </div>
  );
};


export default BankDetails