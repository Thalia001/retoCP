import { makeStyles } from "@material-ui/core";

export const loginStyle = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    menu:{
        display:"flex",
        justifyContent:"center",
        background:"#100515",
    },
    loginButton:{
        background:"#8F53F7",
        fontSize:"16px",
        color:"white",
        fontFamily: "'Ubuntu', sans-serif",
        '&:hover': {
            border: "2px solid white",
            borderColor: '#FFF',
            background: "#A494BF"
        },
    },
    logo:{
        display:"flex",
        width:"150px",
        padding:"20px"
    },
    margin: {
        width:"400px",
        display:"flex",
        margin: theme.spacing(1),
    },
    containerForm:{
        display:"grid",
        justifyContent:"center",
 
    },
    Btn2:{
        padding:"20px",
        display:"flex",
        justifyContent: "space-around",
    },
    loginButton2:{
        width:"150px",
        background:"#8F53F7",
        fontSize:"16px",
        color:"white",
        fontFamily: "'Ubuntu', sans-serif",
        '&:hover': {
            border: "2px solid white",
            borderColor: '#FFF',
            background: "#A494BF"
        },

    },
    subtittle: {
        fontSize: '12px',
        color: '#747376',
        display: 'flex',
        justifyContent:"center",
        padding:"0 0 20px 0",

    }
   
}))

