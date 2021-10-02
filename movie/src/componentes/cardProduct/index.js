import React, {useState, useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import clsx from "clsx";
import Typography from '@material-ui/core/Typography';
import {candyStyle} from './productStyle';
import { useHistory } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {
  CircularProgress,
  Button,
} from "@material-ui/core";
import { DataContext } from "../context/DataProvider";


export default function CardsProducts(props, {name}) {

    const [loading, setLoading] = useState(false);
    const [added, setAdded] = useState(false);

    const classes = candyStyle();
    const history = useHistory();


    // const submit = async () => {
    //   setLoading(true);
    //   setLoading(false);
    //   setAdded(true);
    // };
    const handleProduct = () => {
        history.push("/", {
            imageProduct:props.name,
            comboProduct:props.description,
            precioProduct:props.price
        })
    }

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;
   
  
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
                Precio : S/ {props.precioProduct}
              </Typography>
            </div>
          </CardContent>
        </div>
        <div className={classes.boxButton}>
          <Button
          variant="contained"
          className={clsx(
            classes.addToCartButton,
            classes.addToCartColor
          )}
          onClick={() => addCarrito(name)}
          >
            {added ? (
                    <CheckIcon
                      style={{
                        height: "22px",
                        width: "22px",
                        color: "#FFF",
                        marginRight: "15px",
                        fontSize:"14px",
                      }}
                    />
                  ) : (
                    <ShoppingBasketIcon className={classes.buttonIcons} />
                  )}
                   Agregar al carrito
                   {loading ? (
                    <CircularProgress
                      style={{
                        height: "15px",
                        width: "15px",
                        color: "red",
                        marginLeft: "20px",
                      }}
                    />
                  ): (
                    ""
                  )}
          </Button>

        </div>
     
        
      </Card>
    )
}