import './App.css';
import UserList from './components/userList/userList';
import { motion } from 'framer-motion';
import { FC } from 'react'
import Page from './components/startPage/startpage';
import { useSelector } from 'react-redux';


const App = () => { 
  const noofUsers = useSelector(state=>state.users.length)


  return (
   
    <div className="App">
      <motion.div className="TopContainer" initial={{y:-250}} animate={{y:0}} transition={{delay:0.2,type:'spring',stiffness:150}} >
       {/* <div className='logocontainer'><img className='logo' src="https://media.licdn.com/dms/image/C510BAQGen-rekm73Wg/company-logo_200_200/0/1522159879995?e=2147483647&v=beta&t=Zlk0wFylHG8WWYYD8PdNAto6dtFWDgvBuH7PZws3ZtM"/></div> */}
     <div style={{height:'50%',display:'flex',justifyContent:'center',flexDirection:'column',marginTop:'10px'}}>
     <h1 className="heading">Employee Management </h1>
     </div>
     </motion.div>
     {/* <AddUser/> */}
    {noofUsers == 0 ? <Page/> :<UserList/>}
    {/* <UserList/> */}
    </div>

  );
}

export default App;
