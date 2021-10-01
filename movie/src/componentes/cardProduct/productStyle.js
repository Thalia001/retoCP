import { makeStyles } from "@material-ui/core";

export const candyStyle = makeStyles((theme) => ({
    root: {
        display:"inline-block",
          width:'350px',
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
      textGenero:{
          fontSize:"20px",
          padding:"0 10px 0 10px",
      },
     

}))
