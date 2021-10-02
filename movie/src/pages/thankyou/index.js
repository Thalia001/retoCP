import React from "react";
import {thankYouStyle} from "./style";
import Typography from '@material-ui/core/Typography';
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function ThankYou (props) {
    const classes = thankYouStyle();
    const history = useHistory();
    return(
        <>
            <div className={classes.root}>
            <Typography
            variant="h2"
            component="h5"
            gutterBottom
            className={classes.Title}
            style={{
              fontSize: "35px",
              fontWeight: 900,
              lineHeight: "23.7px",
              color: "black",
              marginBottom: "15px",
              textAlign:"center",
              padding:"20px 0 0 0",
            }}
          >
            ¡Gracias por tu compra 😁!
          </Typography>
          <Typography
              variant="h2"
              component="span"
              gutterBottom
              className={classes.subtittle}
            >
              Te invitamos a que sigas disfrutando de nuestros productos.
            </Typography>
            <div className={classes.btn}>
                <Button onClick={()=> {history.push('/')}} className={classes.btn1}>
                    VOLVER A COMPRAR
                </Button>
            </div>

            </div>
        </>
    )
} 