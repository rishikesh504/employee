import React, { useState } from "react"
import StepperForm from "./stepper/stepperMain"
import { useDispatch } from "react-redux"
import { updateUser } from "../actions/actions"
import { Button, Modal } from "@mui/material"
import { motion } from "framer-motion"
import { styled } from '@mui/material/styles';
import { useSelector } from "react-redux"
import EditIcon from '@mui/icons-material/Edit';

const  Edituser1 = ({editUser,handleEditUser,editingState,handleEditingState}) => {
  const [user, setUser] = useState(
    {
      id: editUser.id||'',
      personalDetails: {
        name: editUser.personalDetails.name || '',
        email: editUser.personalDetails.email || '',
        gender: editUser.personalDetails.gender || '',
        phone: editUser.personalDetails.phone ||'',
        address1:editUser.personalDetails.address1 || '',
        address2:editUser.personalDetails.address2 ||'',
        country: editUser.personalDetails.country ||'',
        state: editUser.personalDetails.state|| '',
        city: editUser.personalDetails.city||'',
        pincode:editUser.personalDetails.pincode|| '',
        dateofbirth:editUser.personalDetails.dateofbirth|| ''
      },
      bankDetails: {
        pan: editUser.bankDetails.pan || '',
        aadhaar:editUser.bankDetails.aadhaar || '',
        bankname:editUser.bankDetails.bankname || '',
        bankaccountnumber:editUser.bankDetails.bankaccountnumber|| '',
        ifsc:editUser.bankDetails.ifsc|| ''
      },
      experienceList: editUser.experienceList,
      totalNoofExp: editUser.experienceList.length,
      educationList:editUser.educationList,
      totalNoofEdu: editUser.educationList.length

    }

  );
  const StyledButton = styled(motion(Button))({
  
  });

  

const [openModel, setOpenModel] = useState(false);

  const HandleOpen = () => {
    handleEditUser()
    handleEditingState()
    setOpenModel(!openModel)
  }


  const dispatch = useDispatch()


  const handleSubmit = (user) => {
    dispatch(updateUser(user))
    handleEditingState()
    setOpenModel(!openModel)
  }


  return (
    <motion.div style={{marginRight:'10px'}}>
      <StyledButton startIcon={<EditIcon/>} whileHover={{scale:1.1}} variant='contained' color="primary" onClick={HandleOpen} > Edit</StyledButton>
      {openModel && <StepperForm user={user}
        setUser={setUser} handleSubmit={handleSubmit} openModel={openModel} setOpenModel={setOpenModel} editingState={editingState}/>}
    </motion.div>
  )

}


export default Edituser1