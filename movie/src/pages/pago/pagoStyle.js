import { makeStyles } from "@material-ui/core";

export const paymentStyle = makeStyles((theme) => ({
    root: {
        width:"500px",
        padding: theme.spacing(2),
        border:"2px solid #100515",
        borderRadius:"10px",
        margin:"50px auto 15px auto",
    },
    subtittle: {
        fontSize: '12px',
        color: '#747376',
        display: 'flex',
        justifyContent:"center",
        padding:"0 0 20px 0",
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
    input: {
        display: "flex",
        // width: '100%',
        height: '36px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16.59px',
        color: '#333333',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        background: '#F1F2F2',
        padding: '10px 15px',
        minWidth: '90%',
        marginBottom: '17px',
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8f53f7',
        }
    },
    options:{
        width:"100%",
        display:"flex",
        padding:"0 0 20px 0",
    },
    options2:{
        display:"flex",
        justifyContent:"space-around",
    },
    input2:{
        width:"30%",
        background: '#F1F2F2',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        fontSize:"15px",
        padding:"12px",
        margin:"0 10px 0 10px",
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8f53f7',
        },
    },
    input3:{
        display: "flex",
        // width: '100%',
        height: '36px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16.59px',
        color: '#333333',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        background: '#F1F2F2',
        padding: '10px 15px',
        minWidth: '20%',
        marginBottom: '17px',
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8f53f7',
        }
    },
    input4:{
        width:"45%",
        background: '#F1F2F2',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        fontSize:"15px",
        padding:"12px",
        margin:"0 10px 0 10px",
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8f53f7',
        },
    },
    input5:{
        display: "flex",
        height: '36px',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '16.59px',
        color: '#333333',
        borderRadius: '4px',
        border: '1px solid #E0E0E0',
        background: '#F1F2F2',
        padding: '10px 15px',
        minWidth: '30%',
        marginBottom: '17px',
        '&:focus': {
            borderRadius: 4,
            outlineColor: '#8f53f7',
        },
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
    btn:{
        display:"flex",
        justifyContent:"center",
        padding:"20px",
    },
    total:{
        display:"flex",
        justifyContent:"center",
        
    }
    
})
)