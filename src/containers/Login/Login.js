
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const isLoggedin= useSelector((state)=>state.isLoggedin);

const dispatch=useDispatch();
//login ////////
let nav = useNavigate();
const [formState, setformState] = useState({email:"",password:""});
//console.log(formState);

const gotoHome=()=>{
  if(formState.email=="test@gmail.com" && formState.password=="123"){
    localStorage.setItem('isLoggedin' , true)
 dispatch({
  type:'SET_LOGIN'
}

)

  nav("/");
  }else{
    alert("Invalid login");
  }
}
const changeHandler=(event)=>{
  console.log(formState);
  setformState({...formState,[event.target.name]:event.target.value});
}




  return (
isLoggedin ? (<Navigate to ="/" />) : ( 
    
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formState.email}
           onChange= {changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formState.password}
            onChange= {changeHandler}
          />
       
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={gotoHome}
          >
            Sign In
          </Button>
      
        </form>
      </div>
      <Box mt={8}>
    
      </Box>
    </Container>
    )
  );
  
}
