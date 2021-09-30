import React,{useState} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from "@material-ui/core/DialogContent";
import Typography from '@material-ui/core/Typography';
import { loginStyle } from './loginStyle';
import logo from '../../img/logomovie.png';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import EmailIcon from '@material-ui/icons/Email';
import { useHistory } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {firebaseConfig} from "../../firebase/firebaseConfig";

export default function Login () {
    const classes = loginStyle();
    let history = useHistory();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        
    };
    const [values, setValues] = useState({
        email:'',
        password: '',
        
    });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const login = () => {
        console.log("1", firebaseConfig)
        const app = initializeApp(firebaseConfig);
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth,provider).then(result => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        })
      }
      
    
    return(
        <div>
        <Button onClick={handleClickOpen} className={classes.loginButton}>
          INICIAR SESIÓN
        </Button>
        <Dialog onClose={handleClose} open={open}>
          <DialogContent dividers>
            <div className={classes.menu}>
                <img src={logo} className={classes.logo}/>
            </div>
            <Typography
            variant="h2"
            component="h5"
            gutterBottom
            className={classes.loginTitle}
            style={{
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "23.7px",
              color: "black",
              marginBottom: "5px",
              textAlign:"center",
              padding:"20px 0 0 0",
            }}
          >
            Bienvenido a Movie
          </Typography>
          <Typography
              variant="h2"
              component="span"
              gutterBottom
              className={classes.subtittle}
            >
              ¡Por favor llena todos los espacios!
            </Typography>
          <div className={classes.containerForm}>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel>Correo </InputLabel>
          <OutlinedInput
            id={"email"}
            type={"text"}
            value={values.email}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                >
                  <EmailIcon/>
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
          <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        </div>
        <div className={classes.Btn2}>
        <Button onClick={handleClickOpen} className={classes.loginButton2} onClick={login}>
          INICIAR SESIÓN
        </Button>
        <Button onClick={()=> {history.push('/dulceria')}} className={classes.loginButton2}>
          INVITADO
        </Button>
        </div>
          </DialogContent>
      
        </Dialog>
      </div>
    )
} 