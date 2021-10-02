import { makeStyles } from "@material-ui/core";

export const loginStyle = makeStyles((theme) => ({
    root: {
        width:"500px",
        padding: theme.spacing(2),
        border:"2px solid #100515",
        borderRadius:"10px",
        margin:"50px auto 15px auto",
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
    btn3:{
        display:"flex",
        justifyContent:"center",
        padding:"5px o 5px 0",
        '&:hover': {
            border: "2px solid white",
            borderColor: '#FFF',
        },
    },
    subtittle: {
        fontSize: '12px',
        color: '#747376',
        display: 'flex',
        justifyContent:"center",
        padding:"0 0 20px 0",

    },
    input: {
        display: "flex",
        width: '80%',
        height: '36px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16.59px',
        color: '#333333',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        background: '#F1F2F2',
        padding: '10px 15px',
        minWidth: '80%',
        marginBottom: '17px',
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8F53F7',
        }
    },
     label: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16.59px',
        color: '#808285',
        display: "flex",
        marginBottom: '10px',
        minHeight: '16px'
    },
   
}))

