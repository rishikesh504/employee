import { TextField, Button,Card,Box } from '@mui/material';
import { useState } from 'react';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const Education = ({ user,onEducationDetailsChange, errors }) => {

  const [totalNumberOfEducationState, setTotalNumberOFEducationState] = useState([user.educationList.length]);
  const [educationListState,setEducationListState] = useState(user.educationList)
  const [valueFrom, setValueFrom] = useState(null);
  const [valueTill, setValueTill] = useState(null);


  const HandleMore = () => {
    var nullexp = educationListState.find((user) => user.college == ''|| user.percentage == '');      //checking if experiece fields are exist
    if (nullexp) {
      console.log("here2")
      alert("please fill all current education fields then add new one")
      return;
    }
    setTotalNumberOFEducationState(prevState => [...prevState, prevState.length + 1])
    const newList = [...educationListState];
    newList.push({college:'',percentage:'',year:''})
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




  return (
    <div>
    {educationListState.map((item, index) => (
         <Card key={index} sx={{ boxShadow: 2, backgroundColor: 'white', border: 1, borderColor: 'grey.400', borderRadius: '16px', my: 2 }}>
         <Box p={1}>
      <div key={index}>
        <span style={{display:'flex' ,justifyContent:"space-between",alignItems:"center"}}><h2>Education {index+1}</h2>   <DeleteIcon onClick={()=>handleDeleteEducation(index)} style={{color:'red',cursor:'pointer'}}/> </span>
        <TextField
          margin="dense"
          label="College NAME"
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


          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              label="FROM"
              name="dateofbirth"
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



        </div>
      </div>
      </Box>
      </Card>
    ))}
    <div style={{display:'flex',justifyContent:'center'}} >
        <AddCircleOutlineIcon style={{color:'blue',cursor:'pointer'}} onClick={HandleMore}/>    
        </div>
  </div>
  )
}

export default Education