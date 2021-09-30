import { makeStyles } from "@material-ui/core";

export const headerStyle = makeStyles((theme) => ({
    root: {
        background:"#100515",
        flexGrow: 1,
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
        flexGrow: 1,
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

