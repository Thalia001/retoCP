import { makeStyles } from "@material-ui/core";

export const headerStyle = makeStyles((theme) => ({
    root: {
        background:"#100515",
    },
    menu: {
        display:"flex",
        justifyContent:"center",
        marginRight: theme.spacing(2),
    },
    logo:{
        display:"flex",
        justifyContent:"center",
        width:"150px",
        padding:"20px"
    },
    title: {
        cursor:"pointer",
        textDecoration: "none",
        fontSize:"20px",
        color:"white",
        fontFamily: "'Ubuntu', sans-serif",
    },
    menuItem:{
        background:"#100515",
    },
    items:{
        display:"flex",
        justifyContent:"space-around",
        paddingLeft: "70px",
        paddingRight: "70px",
    },
    btnLogin:{
        cursor:"pointer",
        textDecoration: "none",
        fontSize:"20px",
        color:"white",
        fontFamily: "'Ubuntu', sans-serif",
    },
    menu3:{
        display:"flex",
        justifyContent:"center",
        padding:"10px",
    },
    iconCart:{
        width:"35px",
        height:"35px",
        color:"white",
    },
    itemTOtal:{
        color: "white",
        position:"relative",
        top:"-1em",
        right:"1.5rem",
        width:"1.5rem",
        height:"1.5rem",
        border:"1px solid red",
        borderRadius:"50%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        padding:"0rem",
        fontSize:"1.3rem",
        fontWeight: "500",
        background:"red",
    }
   
}))

