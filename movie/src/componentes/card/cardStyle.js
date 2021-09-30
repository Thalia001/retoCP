import { makeStyles } from "@material-ui/core";

export const cardStyle = makeStyles((theme) => ({
    root: {
      display:"inline-block",
        width:'400px',
        padding:"20px",
        margin:"20px",
        border:"2px solid black",
        boxShadow: "10px 10px #8F53F7",
    },
    content: {
        display:"flex",
        justifyContent:"space-around",
    },
    cover: {
        width: 151,
    },
    container:{
      display:"inline",
      margin:"10px",
    },
   

}))
