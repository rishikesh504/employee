import React, { useState } from "react"
import StepperForm from "../stepper/stepperMain"
import { useDispatch ,useSelector} from "react-redux"
import { addUser } from "../../actions/actions"
import { Button } from "@mui/material"
import { motion } from "framer-motion"

const AddUser1 = () => {

const users = useSelector(state=>state.users)
const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
  const [user, setUser] = useState(
    {
      id: maxId+1,
      personalDetails: {
        name: '',
        email: '',
        gender: '',
        phone: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        dateofbirth: ''
      },
      bankDetails: {
        pan: '',
        aadhaar: '',
        bankname: '',
        bankaccountnumber: '',
        ifsc: ''
      },
      experienceList: [{ company: '', role: '', year: '',from:'',till:'' }],
    
      educationList: [{ college: '', percentage: '', year: '', till:'' }],
  

    }

  );


  

const [openModel, setOpenModel] = useState(false);
  const HandleOpen = () => {
    setOpenModel(!openModel)

  }


  const dispatch = useDispatch()


  const handleSubmit = (user) => {
   dispatch(addUser(user))
    setOpenModel(!openModel)
   
    setUser({
      id: maxId+2,
      personalDetails: {
        name: '',
        email: '',
        gender: '',
        phone: '',
        address1: '',
        address2: '',
        country: '',
        state: '',
        city: '',
        pincode: '',
        dateofbirth: ''
      },
      bankDetails: {
        pan: '',
        aadhaar: '',
        bankname: '',
        bankaccountnumber: '',
        ifsc: ''
      },
      experienceList: [{ company: '', role: '', from: '',till :''}],
    
      educationList: [{ college: '', percentage: '', from: '',till:'' }],
  

    }

  )

  }


  return (
    <motion.div animate={{ x: 0 }} initial={{ x: 100 }} transition={{ duration: 1.2 }} style={{ marginBottom: '10px' }}>
      <Button variant="contained" color="primary" onClick={HandleOpen} > ADD USER</Button>
      {openModel && <StepperForm user={user}
        setUser={setUser} handleSubmit={handleSubmit} openModel={openModel} setOpenModel={setOpenModel} />}
    </motion.div>
  )

}


export default AddUser1