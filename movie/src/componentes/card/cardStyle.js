import { makeStyles } from "@material-ui/core";

export const cardStyle = makeStyles((theme) => ({
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
      padding:"0 10px 0 10px",
    },
  //  pago:{
  //     background: "rgba(128, 130, 133, 0.25)",
  //     height: "36px",
  //     width: "10%",
  //     minWidth: "212px",
  //     borderRadius: "50px",
  //     marginTop: "14px",
  //     marginBottom: "21px",
  //     alignItems: "center",
  //     display: "flex",
  //     flexDirection: "row",
  //     flexWrap: "nowrap",
  //     justifyContent: "space-around",
  //  },
  //  cantidad:{
  //   display: "inline-flex",
  //   height: "36px",
  //   width: "36px",
  //   "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
  //     {
  //       display: "none",
  //     },
  //  },
  //  icon:{
  //   height: "24px",
  //   width: "24px",
  //   borderRadius: "50px",
  //   background: "#53CD94",
  //   color: "#FFF",
  //   margin: "6px",
  //   cursor: "pointer",
  //  }

}))
