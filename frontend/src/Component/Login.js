import React from 'react'
import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Link, Button, Typography } from '@material-ui/core';
import HttpsOutlinedIcon from '@material-ui/icons/HttpsOutlined';
import {Formik , Field , Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const Login = ({handleChange}) => {
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "20px auto", fontSize: '25px'  }
    const avatarStyle = { backgroundColor: '#A06EC4', margin: "10px" }
    const headerStyle = { margin: "5px" }
    const chckboxstyle = { marginLeft: "-156px" }
    const linkstyle = { marginLeft: "-20px" }
    const btnstyle = { margin: "8px 0" }
    const initialValues={
        Email : '',
        password : '' ,
        remember : 'false'
    }
    const validationSchema = Yup.object().shape({
        Email:Yup.string().email("Enter valid email"),
        password:Yup.string().min(8,"password minimum length should be 8"),

    })
    const onSubmit=(values,props)=>{
        console.log(values);
        setTimeout(()=>{
            props.resetForm()
            props.setSubmitting(false)

        },2000)
        axios.post('http://localhost:2000/user/signin',values)
        .then(()=>console.log('User login successfully'))
        .catch(err => console.error(err.response));

    }

    return (
        <Grid >
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}><HttpsOutlinedIcon></HttpsOutlinedIcon></Avatar>
                    <h2 style={headerStyle}>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues}  validationSchema={validationSchema} onSubmit={onSubmit}>{(props)=>(<Form>
                <Field as={TextField} name="Email" label='Email' type="email" placeholder='Enter Email'  helperText={<ErrorMessage name="Email"/>} fullWidth required />
                <Field  as={TextField}  name="password" label='password' type="password" placeholder='Enter password' helperText={<ErrorMessage name="password"/>}  fullWidth required />
                <FormControlLabel style={chckboxstyle} control={<Checkbox name="checkedB"
                    color="primary" />} label="Remember me" />
                <Button type="submit" variant="contained"  color="primary" disabled={props.isSubmitting} fullWidth style={btnstyle}>Sign in</Button>
                <Typography>
                    <Link href="#" style={chckboxstyle} >Forgot Password</Link>
                </Typography>
                <Typography style={linkstyle}> Do you have an account?
    <Link href="#"  onClick={()=>handleChange("event",1)}>Sign Up here</Link>
                </Typography>
                </Form>)}</Formik>

            </Paper>

        </Grid>
    )

}

export default Login;