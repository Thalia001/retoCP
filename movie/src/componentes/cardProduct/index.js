import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import {candyStyle} from './productStyle';
import { useHistory } from "react-router-dom";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import {InputBase} from "@material-ui/core";
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function CardsProducts(props) {
    const classes = candyStyle();
    const history = useHistory();
    const handleProduct = () => {
        history.push("/", {
            imageProduct:props.name,
            comboProduct:props.description,
            precioProduct:props.price
        })
    }
   
  
    return (
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent  className={classes.content}>
            <div className={classes.imagenBox}>
                <img className={classes.cover}
                src={props.imageProduct}
                title=""/>
            </div>
            <div className={classes.textBox}>
              <Typography variant="h5" component="p"className={classes.textGenero}>
                Combo : {props.comboProduct}
              </Typography>
              <Typography variant="h5" component="p"className={classes.textGenero}>
                Precio : {props.precioProduct}
              </Typography>
            </div>
          </CardContent>
        </div>
        {/* <div className={classes.pago}>
              <span className={classes.cantidad}>
                  <RemoveCircleIcon className={classes.icon}/>
              </span>
              <div>
                <InputBase className={classes.cantidad}/>
                <span>0</span>
              </div>
              <span className={classes.cantidad}>
                  <AddCircleIcon className={classes.icon}/>
              </span>
        </div> */}
        
      </Card>
    )
}