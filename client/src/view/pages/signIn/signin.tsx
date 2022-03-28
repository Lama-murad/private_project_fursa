
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LoginIcon from '@mui/icons-material/Login';
import GoogleIcon from '@mui/icons-material/Google';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './signin.scss';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(255, 255, 255, 0.7)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


//import Admin from '../admin/admin';

const clientId = "Your-Client-Id";

function SignIn() {
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function hadleForgetPassword(ev: any) {
    console.log(email, '///')
    axios.patch('/user/update-user-password', { email: email, password: newPassword })
    console.log(newPassword)
  }

  async function handleSignIn(ev: any) {
    ev.preventDefault();
    const form = ev.target;
    // console.log({form})
    const email2 = form[0].value;
    await axios.post('/user/login', { email: form[0].value, password: form[2].value })
      .then(data => {
        console.log({ email2 })
        console.log(data);
        if (email2 === "Admin@gmail.com") {
          console.log("fat 3l if")
          navigate('/admincourses');
        }
        else {
          navigate('/homepage');
        }
      }).catch(err => {
        console.error(err);
      })

  }


  return (
    <div className='signin'>
      {/* <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwQXPGGUkeJfNF9_zBIWGlYeatiFav_Cemw&usqp=CAU" alt="" /> */}
      {/* <Typography component="h5" variant="h5">
        Sign in
      </Typography> */}
      <Avatar className='avatar'>
        <LockOutlinedIcon />
      </Avatar>
      <form className='loginform' onSubmit={handleSignIn}>
        <TextField
          className="textfield"
          autoComplete="given-name"
          name="Email"
          required
          fullWidth
          id="Email"
          label="Email"
          autoFocus
        />
        <TextField
          className="textfield"
          autoComplete="given-name"
          name="passowrd"
          required
          fullWidth
          id="passowrd"
          label="Password"
          autoFocus
          type="password"
        />

        {/* variant="outlined" */}
        <Button type='submit' className='loginbtn' size="small" startIcon={<LoginIcon />}> login </Button>

        <Button onClick={handleOpen} className='forgotbtn'>Forgot password?</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              enter new password
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <TextField required name="email" label="Email" variant="standard" onChange={(e: any) => setEmail(e.target.value)} />
                <TextField required name="password" label="Password" variant="standard" type="password" onChange={(e: any) => setNewPassword(e.target.value)} />
                <Button onClick={hadleForgetPassword}>confirm</Button>
              </div>
            </Typography>
          </Box>
        </Modal>

      </form>


      {/* //   onClick={handleSignIn} */}


    </div>

  );
}

export default SignIn;