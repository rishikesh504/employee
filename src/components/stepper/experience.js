import { TextField, Button,Card,Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { motion } from 'framer-motion';
import moment from 'moment';
import { maxHeight } from '@mui/system';


const Experience = ({ user,onExperienceDetailsChange, errors }) => {

  const [totalNumberOfExperienceState, setTotalNumberOFExperienceState] = useState([user.experienceList.length]);
  const [experienceListState,setExperienceListState] = useState(user.experienceList)





  const HandleMore = () => {
 
    var nullexp = experienceListState.find((user) => user.company == ''|| user.role == '');      //checking if experiece fields are exist
    if (nullexp) {

      alert("please fill all current experience fields then add new one")
      return;
    }
    setTotalNumberOFExperienceState(prevState => [...prevState, prevState.length + 1])
    const newList = [...experienceListState];
    newList.push({company:'',role:'',from:'',till:''})
    setExperienceListState(newList)
  }

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...experienceListState];
    list[index] = { ...list[index], [name]: value };
    setExperienceListState(list);
  
    onExperienceDetailsChange({
      ...user,
      experienceList: [...list]
    });
  };


  const handleDeleteExperience = (index) => {
   

    
    setTotalNumberOFExperienceState(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  
    setExperienceListState(prevState => {
      const newList = [...prevState];
      newList.splice(index, 1);
      onExperienceDetailsChange({
        ...user,
        experienceList: [...newList],
      });


      return newList;
    });
   
   
  };


  const handleFromDateChange = (index, date) => {
    const list = [...experienceListState];
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    list[index] = { ...list[index], from: formattedDate };
    setExperienceListState(list);
  
    onExperienceDetailsChange({
      ...user,
      experienceList: [...list]
    });
  };

  const handleTillDateChange = (index, date) => {
    const list = [...experienceListState];
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    list[index] = { ...list[index], till: formattedDate };
    setExperienceListState(list);
  
    onExperienceDetailsChange({
      ...user,
      experienceList: [...list]
    });
  };




  return (
    <div>
    {experienceListState.length > 0 ? experienceListState.map((item, index) => (
         <Card key={index} sx={{ boxShadow: 2, backgroundColor: 'white', border: 1, borderColor: 'grey.400', borderRadius: '16px', my: 2 }}>
         <Box p={2.5}>
      <div key={index}>
        <span style={{display:'flex' ,justifyContent:"space-between",alignItems:"center" }}><h2> {item.role || `Experience${index+1}`} </h2> 
          <DeleteIcon onClick={()=>handleDeleteExperience(index)} style={{color:'red',cursor:'pointer'}}/>
     
         </span>
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

        <div style={{display:'flex', marginBottom:'10px',marginTop:'5px', justifyContent:'space-between'}}>

          <div style={{width:'46%'}}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="FROM"
              maxDate={new Date()}
              value={new Date(item.from).toLocaleDateString('en-US')}
              inputFormat="DD-MM-YYYY"
              onChange={(date) => handleFromDateChange(index,date)}
              renderInput={(params) => <TextField {...params} name="from" error={false} />}
            />
          </LocalizationProvider>
          </div>
          <div style={{width:'46%'}}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="TILL"
              value={new Date(item.till).toLocaleDateString('en-US')}
              inputFormat="DD-MM-YYYY"
              minDate={moment(new Date(item.from).toLocaleDateString('en-US')).toDate()}
              maxDate={new Date()}
              onChange={(date) => handleTillDateChange(index,date)}
              renderInput={(params) => <TextField {...params} name="till" error={false}/>}
            />
          </LocalizationProvider>
          </div>


        </div>
    
      </div>
      </Box>
      </Card>
    )) : 
    <Card sx={{ boxShadow: 2, backgroundColor: 'white', border: 1, borderColor: 'grey.400', borderRadius: '16px', my: 2 }}>
    <img style={{objectFit:'contain',maxHeight:'400px',width:'100%'}} src="https://cdn6.aptoide.com/imgs/9/e/a/9ead0af21d71e98d61270009d3cbdcf3_icon.png" alt="thank you"/>
   </Card> } 
             {errors && errors.experience && <p style={{color:'red'}}>{errors.experience}</p> }
    <div style={{display:'flex',justifyContent:'center'}} >
        <AddCircleOutlineIcon style={{color:'blue',cursor:'pointer',height:'35px' }} onClick={HandleMore}/>    
        </div>
  </div>
  )
}

export default Experience