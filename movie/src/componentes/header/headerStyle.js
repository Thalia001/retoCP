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
    }
   
}))

