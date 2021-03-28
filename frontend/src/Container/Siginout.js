import React, { useState } from 'react'
import {Tabs,Tab,Paper,Box,Typography} from '@material-ui/core';
import Login from '../Component/Login';
import Signup from '../Component/Signup';

const Signinout = (props) => {
  const [value,setValue]=useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const paperStyle = {
      width:340,
      margin:"20px auto"
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return(
    <Paper style={paperStyle}>
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="SIGN IN" />
      <Tab label="SIGN UP" />
    </Tabs>
    <TabPanel value={value} index={0}>
        <Login handleChange={handleChange}></Login>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup></Signup>
      </TabPanel>
  </Paper>
   )

 }

export default Signinout;