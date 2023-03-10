import PersonalStepper from "./personalStepper";
import BankDetails from "./bankdetails";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';
import { validateUser } from "../../utils/functions";
import Experience from "./experience";
import Education from "./education";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SaveIcon from '@mui/icons-material/Save';
import Endpage from "./endpage";


const StepperForm = ({ handleSubmit,openModel,setOpenModel,user,setUser,editingState }) => {
    
    const [activeStep, setActiveStep] = useState(0);
    const [errors, setErrors] = useState({});
  

    const steps = ['Personal Details', 'Bank Details', 'Experience', 'Education'];

   
      const handleClose = () => {
        setOpenModel(false)
      }

      const handleUserDetailsChange = (updatedUser) => {
        setUser(updatedUser);
      };

    const handleNext = () => {
      const validationErrors = validateUser(user, activeStep);

      if (Object.keys(validationErrors).length === 0) {
        setErrors({});
        if (activeStep === 0) {
          setActiveStep(1);
        } else if (activeStep === 1) {
          setActiveStep(2)
        }
        else if (activeStep === 2) {
          setActiveStep(3)
        }
        else if (activeStep === 3) {
          setActiveStep(4)
        }
        else {
            handleSubmit(user);
        }
      } else {
        setErrors(validationErrors);
      }
    };
  
    const handleBack = () => {
      setActiveStep(prevActiveStep=>prevActiveStep-1);
    };
  
    return (
      <div>
        <Dialog open={openModel} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editingState ? "Edit User" :"Add User" }</DialogTitle>
        <DialogContent>
         <Box sx={{ width: '100%' }}>
     
         <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                return (
                  <Step key={index} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {/* <AnimatePresence wait>
            <motion.div key={activeStep} initial={{ x:100 }} animate={{ x: 0 }} exit={{ x:-100 }} transition={{duration:0.5}}> */}
        {activeStep === 0 && (
          <PersonalStepper   user={user}
          onPersonalDetailsChange={handleUserDetailsChange} errors={errors} />
        )}

        {activeStep === 1 && (
          <BankDetails user={user} onBankDetailsChange={handleUserDetailsChange} errors={errors} />
        )}
          {activeStep === 2 && (
          <Experience user={user} onExperienceDetailsChange={handleUserDetailsChange} errors={errors} />
        )}
        {activeStep === 3 && (
          <Education user={user} onEducationDetailsChange={handleUserDetailsChange} errors={errors} />
        )}
         {activeStep === 4 && (
          <Endpage />
        )}
        {/* </motion.div>
        </AnimatePresence> */}
        
              
        </Box>
     
      
        </DialogContent>
        <Box p={2} sx={{ display: 'flex', flexDirection: 'row', backgroundColor:'transparent',justifyContent:'space-between' }}>
                  <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosNewIcon/>}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                   
                  >
                    Back
                  </Button>

                {editingState && <Button
                    variant="outlined"
                    startIcon={<SaveIcon/>}   
                onClick={(e)=>handleSubmit(user)} 
                  >Update</Button>}
                
                  <Button endIcon={<NavigateNextIcon/>} variant="contained" onClick={handleNext} >
                  {activeStep === 4? "Save" : "Next"}
                  </Button>
                </Box>
      </Dialog>
      </div>
     
    );
  };
  
  export default StepperForm