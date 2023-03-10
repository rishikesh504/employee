import { TextField, Button,Card,Box } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';

const Education = ({ user,onEducationDetailsChange, errors }) => {

  const [totalNumberOfEducationState, setTotalNumberOFEducationState] = useState([user.educationList.length]);
  const [educationListState,setEducationListState] = useState(user.educationList)
  const [valueFrom, setValueFrom] = useState(null);
  const [valueTill, setValueTill] = useState(null);


  const HandleMore = () => {
    var nullexp = educationListState.find((user) => user.college == ''|| user.percentage == '');      //checking if experiece fields are exist
    if (nullexp) {

      alert("please fill all current education fields then add new one")
      return;
    }
    setTotalNumberOFEducationState(prevState => [...prevState, prevState.length + 1])
    const newList = [...educationListState];
    newList.push({college:'',percentage:'',from:'',till:''})
    setEducationListState(newList)
  }

  const handleEducationChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationListState];
    list[index][name] = value;
    setEducationListState(list);

    onEducationDetailsChange({
      ...user,
      educationList:[...educationListState]
    });
  };

  const handleDeleteEducation = (index) => {
    
    setTotalNumberOFEducationState(prevState => {
      const newState = [...prevState];
      newState.splice(index, 1);
      return newState;
    });
  
    setEducationListState(prevState => {
      const newList = [...prevState];
      newList.splice(index, 1);
      onEducationDetailsChange({
        ...user,
        educationList: [...newList],
      });
      return newList;
    });
    



  };

  const handleFromDateChange = (index, date) => {
    const list = [...educationListState];
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    list[index] = { ...list[index], from: formattedDate };
    setEducationListState(list);
  
    onEducationDetailsChange({
      ...user,
      experienceList: [...list]
    });
  };

  const handleTillDateChange = (index, date) => {
    const list = [...educationListState];
    const formattedDate = new Date(date).toLocaleDateString('en-GB');
    list[index] = { ...list[index], till: formattedDate };
    setEducationListState(list);
  
    onEducationDetailsChange({
      ...user,
      educationList: [...list]
    });
  };


  




  return (
    <div>
    {educationListState.map((item, index) => (
            <Card key={index} sx={{ boxShadow: 1, backgroundColor: 'white', border: 1, borderColor: 'grey.400', borderRadius: '16px', my: 2 }}>
         <Box p={2.5}>
      <div key={index}>
      <span style={{display:'flex' ,justifyContent:"space-between",alignItems:"center" }}><h2> {item.role || `Education${index+1}`} </h2> 
          <DeleteIcon onClick={()=>handleDeleteEducation(index)} style={{color:'red',cursor:'pointer'}}/>
         </span>
        <TextField
          margin="dense"
          label="COLLEGE/INSTITTUTE"
          type="text"
          id={`${index}`}
          name="college"
          value={item.college}
          fullWidth
          onChange={(e) => handleEducationChange(e, index)}
        />
        <TextField

          margin="dense"
          label="PERCENTAGE"
          type="text"
          name="percentage"
          id={`${index}`}
          fullWidth
          value={item.percentage}
          onChange={(e) => handleEducationChange(e, index)}
        />

        <div style={{display:'flex',justifyContent:'space-between'}}>


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
      </div>
      </Box>
      </Card>
    ))}
    {errors && errors.education && <p style={{color:'red'}}>{errors.education}</p> }
    <div style={{display:'flex',justifyContent:'center'}} >
        <AddCircleOutlineIcon style={{color:'blue',cursor:'pointer'}} onClick={HandleMore}/>    
        </div>
  </div>
  )
}

export default Education