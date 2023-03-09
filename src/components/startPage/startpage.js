import React from 'react';
import { Typography, Button } from '@mui/material';
import { ReactComponent as Logo } from '../.././logo.svg';
import './startpage.css';
import AddUser1 from '../addUser.js/adduser1';

function Page() {
  return (
    <div className="main">
      {/* <Logo className="logo" /> */}
      <Typography variant="h4" component="h1" className="heading">
        Welcome 
      </Typography>
      <AddUser1/>
    </div>
  );
}

export default Page;