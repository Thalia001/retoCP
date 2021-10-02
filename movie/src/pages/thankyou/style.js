import { makeStyles } from "@material-ui/core";

export const thankYouStyle = makeStyles((theme) => ({
    root: {
        width:"90%",
        padding: theme.spacing(2),
        borderRadius:"10px",
        margin:"50px auto 15px auto",
    },
    subtittle: {
        fontSize: '20px',
        color: '#747376',
        display: 'flex',
        justifyContent:"center",
        padding:"20px 0 20px 0",
    },
    btn1:{
        width:"15%",
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
    btn:{
        display:"flex",
        justifyContent:"center",
    }
   
}))

