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
      boxButton: {
        display: "flex",
        justifyContent: "space-between",
      },
      addToCartButton: {
        width: "80%",
        height: "52px",
        fontSize: "14px",
        fontWeight: 400,
        borderRadius: "8px",
        boxShadow: "none",
        textTransform: "uppercase",
        "&:hover": {
          boxShadow: "none",
          background: "#B39FDA",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
        },
      },
      addToCartColor: {
        color: "#FFF",
        background: " #8f53f7",
      },
      buttonIcons: {
        height: "22px",
        width: "22px",
        marginRight: "15px",
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
      textBox:{
        textTransform:"uppercase",
      }

}))
