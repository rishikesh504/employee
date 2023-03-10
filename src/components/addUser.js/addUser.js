import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../actions/actions";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Typography from '@mui/material/Typography';
import "./addUser.css"
import PersonalDetails from "./personal";


const AddUser = () => {
  const [openModel, setOpenModel] = useState(false);
  const [valueFrom, setValueFrom] = useState(null);
  const [valueTill, setValueTill] = useState(null);
  const [totalNumberOfExperience, setTotalNumberOFExperience] = useState([1]);
  const [totalNumberOfEducation, setTotalNumberOFEducation] = useState([1]);
  const [experienceList,setExperienceList] = useState([{company:'',role:'',year:''}])

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile,setMobile] = useState('')
  const [address1, setAddress1] = useState('');
  const [addeess2, setAddress2] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [pan, setPan] = useState('');
  const [aadhaar,setAadhaar] = useState('');
  const [bankName,setBankName] =useState()
  const [bankAccount, setBankAccount] = useState('')
  const [ifsc,setIfsc] = useState('')
  const [allowNext,setAllowNext]= useState(false)
  const [errorMsg,setErrorMsg] = useState(false)
  const [error,setError] = useState(false)
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [nameError, setNameError] = useState(false);


  const dispatch = useDispatch()

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeAllowNext = () => {
    setAllowNext(true);
  };
 
  

  

 



  const HandleOpen = () => {
    setOpenModel(!openModel)
  }
  const handleClose = () => {
    setOpenModel(false)
  }
  const HandleMore = () => {
    
    var nullexp = experienceList.find((user) => user.company == ''|| user.role == '');      //checking if experiece fields are exist
    if (nullexp) {
     
      alert("please fill all current experience fields then add new one")
      return;
    }
    setTotalNumberOFExperience(prevState => [...prevState, prevState.length + 1])
    const newList = [...experienceList];
    newList.push({company:'',role:'',year:''})
    setExperienceList(newList)
  }



  //   const handleNoOfExperiencesChange = (e) => {
  //   const value = parseInt(e.target.value);
  //   setTotalNumberOFExperience(value);
  //   const newList = [];
  //   for (let i = 0; i < value; i++) {
  //     if (experienceList[i]) {
  //       newList.push(experienceList[i]);
  //     } else {
  //       newList.push({ institute: '', degree: '', year: '' });
  //     }
  //   }
  //   setExperienceList(newList);
  // };

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceList];
    list[index][name] = value;
    setExperienceList(list);
  };

  const handleDeleteExperience = (index) => {
    const list = [...experienceList];
    list.splice(index, 1);
    setTotalNumberOFExperience(prevState => {
      const newState = [...prevState]
      newState.splice(index,1)
      return newState
    })
    setExperienceList(list);
  };

  const HandleReduce = (indexToremove) => {

    // setTotalNumberOFExperience(prevState => prevState.filter((item, index) => index !== indexToremove))
    setTotalNumberOFExperience(prevState => {
      const newState = [...prevState]
      newState.splice(indexToremove,1)
      return newState
    })
  }
 


  const HandleMoreEducation = () => {
    setTotalNumberOFEducation(prevState => [...prevState, prevState.length + 1])
  }

  const handleSave = () => {
    const user = {
      name: name,
      email: email,
      mobile: mobile,
      address1:address1,
      address2:addeess2,
      country:country,
      state:state,
      pincode:pincode,
      pan:pan,
      Aadhaar:aadhaar,
      bankName:bankName,
      bankAccount:bankAccount,
      ifsc:ifsc,
      experienceList:experienceList,
      totalexperienceList:totalNumberOfExperience
    };
    dispatch(addUser(user));
    setOpenModel(false)
  };




  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    // let newSkipped = skipped;
    // if (isStepSkipped(activeStep)) {
    //   newSkipped = new Set(newSkipped.values());
    //   newSkipped.delete(activeStep);
    // }
    if (name.length !== 0) {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
    else {
      setNameError(true)
      setNameErrorMsg("Please enter name")
      setError(true)
      setErrorMsg(`please complete current field`)
    }
    
    // setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    // if (!isStepOptional(activeStep)) {
    
    //   throw new Error("You can't skip a step that isn't optional.");
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };






  const steps = ['Personal Details', 'Bank Details', 'Experience', 'Education'];


  return (
    <div className="buttonContainer">
      <Button variant="contained" color="primary" onClick={HandleOpen} > ADD USER</Button>
      <Dialog open={openModel} onClose={handleClose} fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                // if (isStepOptional(index)) {
                //   labelProps.optional = (
                //     <Typography variant="caption">Optional</Typography>
                //   );
                // }
                if (isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step key={index} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography >
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep == 0 && 
                <PersonalDetails onChangeName={onChangeName} name={name} handleNext={handleNext} nameError={nameError} nameErrorMsg={nameErrorMsg}/>
                // <div>
                //   <TextField
                //     margin="dense"
                //     label="Name"
                //     type="text"
                //     value={name}
                //     fullWidth
                //     onChange={(event) => setName(event.target.value)}
                //   />
                //   <TextField
                //     margin="dense"
                //     label="Email"
                //     type="text"
                //     fullWidth
                //     value={email}
                //     onChange={(event) => setEmail(event.target.value)}
                //   />
                //   <TextField
                //     autoFocus
                //     margin="dense"
                //     label="Phone"
                //     type="text"
                //     fullWidth
                //     value={mobile}
                //     onChange={(event) => setMobile(event.target.value)}
                //   />
                //   <TextField
                //     autoFocus
                //     margin="dense"
                //     label="State"
                //     type="text"
                //     value={state}
                //     fullWidth
                //     onChange={(event) => setState(event.target.value)}
                //   />
                //   <span style={{ display: "flex", justifyContent: "space-between" }}>
                //     <TextField
                //       autoFocus
                //       margin="dense"
                //       label="Address 1"
                //       type="text"
                //       value={address1}
                //     onChange={(event) => setAddress1(event.target.value)}
                //     />
                //     <TextField
                //       autoFocus
                //       margin="dense"
                //       label="Address 2"
                //       type="text"
                //       value={addeess2}
                //     onChange={(event) => setAddress2(event.target.value)}
                //     />


                //   </span>

                //   <span style={{ display: "flex", justifyContent: "space-between" }}>
                //     <TextField
                //       autoFocus
                //       margin="dense"
                //       label="Country"
                //       type="text"
                //       value={country}
                //     onChange={(event) => setCountry(event.target.value)}
                //     />
                //     <TextField
                //       autoFocus
                //       margin="dense"
                //       label="Pincode"
                //       type="text"
                //       value={pincode}
                //       onChange={(event) => setPincode(event.target.value)}
                //     />


                //   </span>


                // </div>
                }

                {activeStep == 1 && <div>
                  <TextField
                    margin="dense"
                    label="PAN"
                    type="text"
                    fullWidth
                    value={pan}
                    onChange={(event) => setPan(event.target.value)}
                    />
                  <TextField
                
                    margin="dense"
                    label="Aadhaar No"
                    type="text"
                    fullWidth
                    value={aadhaar}
                    onChange={(event) => setAadhaar(event.target.value)}

                  />
                     <TextField
  
                    margin="dense"
                    label="Bank Name"
                    type="text"
                    fullWidth
                    value={bankName}
                    onChange={(event) => setBankName(event.target.value)}
                  />
                  <TextField
                 
                    margin="dense"
                    label="Bank Account No"
                    type="text"
                    fullWidth
                    value={bankAccount}
                    onChange={(event) => setBankAccount(event.target.value)}
                  />
                  <TextField
                    margin="dense"
                    label="IFSC"
                    type="text"
                    fullWidth
                    value={ifsc}
                    onChange={(event) => setIfsc(event.target.value)}
                  />
                </div>}
                {activeStep == 2 && <div>
                  {experienceList.map((item, index) => (
                    <div key={index}>
                      <span style={{display:'flex' ,justifyContent:"space-between",alignItems:"center"}}><h2>Experience {index+1}</h2> <Button style={{maxWidth: '40px', maxHeight: '30px'}} variant="contained" color="primary" onClick={()=>handleDeleteExperience(index)} > Remove</Button>  </span>
                      <TextField
                        margin="dense"
                        label="COMPANY NAME"
                        type="text"
                        id={`${index}`}
                        name="company"
                        value={item.company}
                        fullWidth
                        onChange={(e) => handleExperienceChange(e, index)}
                      />
                      <TextField

                        margin="dense"
                        label="ROLE"
                        type="text"
                        name="role"
                        id={`${index}`}
                        fullWidth
                        value={item.role}
                        onChange={(e) => handleExperienceChange(e, index)}
                      />

                      <span>


                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            label="FROM"
                            value={valueFrom}
                            onChange={(newValue) => {
                              setValueFrom(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            label="TILL"
                            value={valueTill}
                            onChange={(newValue) => {
                              setValueTill(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>



                      </span>
                    </div>
                  ))}
                  <Button fullWidth variant="contained" color="primary" onClick={HandleMore} > Add More Experience</Button>
                </div>}

                {activeStep == 3 && <div>
                  {totalNumberOfEducation.map((item, index) => (
                    <div key={index}>
                      <TextField
                        margin="dense"
                        label="INSTITUTE NAME"
                        type="text"
                        fullWidth
                      // onChange={(event) => setName(event.target.value)}
                      />
                      <TextField

                        margin="dense"
                        label="STREAM"
                        type="text"
                        fullWidth
                      // onChange={(event) => setName(event.target.value)}
                      />

                      <span>


                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            label="FROM"
                            value={valueFrom}
                            onChange={(newValue) => {
                              setValueFrom(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterMoment}>
                          <DatePicker
                            label="TILL"
                            value={valueTill}
                            onChange={(newValue) => {
                              setValueTill(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>



                      </span>
                    </div>
                  ))}

                  <Button fullWidth variant="contained" color="primary" onClick={HandleMoreEducation} > Add More Educaion</Button>
                </div>}
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {/* {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} >
                      Skip
                    </Button>
                  )} */}

                  <Button onClick={activeStep === steps.length - 1 ? handleSave : handleNext} >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    
                  </Button>
                  
                </Box>
                {error ? errorMsg : ''}
              </React.Fragment>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}


export default AddUser