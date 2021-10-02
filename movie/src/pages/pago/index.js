import React from 'react';
import {paymentStyle} from "./pagoStyle";
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Payment() {
  const classes = paymentStyle();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <div>
      <Typography
            variant="h2"
            component="h5"
            gutterBottom
            className={classes.Title}
            style={{
              fontSize: "25px",
              fontWeight: 900,
              lineHeight: "23.7px",
              color: "black",
              marginBottom: "15px",
              textAlign:"center",
              padding:"20px 0 0 0",
            }}
          >
            Realiza el Pago
          </Typography>
          <Typography
              variant="h2"
              component="span"
              gutterBottom
              className={classes.subtittle}
            >
              ¡Por favor completa tus datos!
            </Typography>
      </div>
      <div>
        <form>
        <label className={classes.label}>Número de tarjeta</label>
            <input
              type={"text"}
              placeholder={"Número de tarjeta"}
              className={classes.input}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
              maxLength="16"
            />
        <label className={classes.label}>Fecha de Expiración</label>
          <div className={classes.options}>
            <select className={classes.input2}>
                    <option value="01">Enero</option>
                    <option value="02">Febrero </option>
                    <option value="03">Marzo</option>
                    <option value="04">Abril</option>
                    <option value="05">Mayo</option>
                    <option value="06">Junio</option>
                    <option value="07">Julio</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setiembre</option>
                    <option value="10">Octubre</option>
                    <option value="11">Noviembre</option>
                    <option value="12">Diciembre</option>
            </select>
            <select className={classes.input2}>
                    <option value="16"> 2016</option>
                    <option value="17"> 2017</option>
                    <option value="18"> 2018</option>
                    <option value="19"> 2019</option>
                    <option value="20"> 2020</option>
                    <option value="21"> 2021</option>
            </select>
          </div>
          <label className={classes.label}>Código CVV</label>
          <input
              type={"text"}
              placeholder={"Código CVV"}
              className={classes.input3}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
              maxLength="3"
            />
          <label className={classes.label}>Correo electrónico</label>
          <input
              type={"text"}
              placeholder={"Correo electrónico"}
              className={classes.input}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
              
          />
          <label className={classes.label}>Nombre</label>
          <input
              type={"text"}
              placeholder={"Nombre Completo"}
              className={classes.input}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
          />
          <label className={classes.label}>Documento de Identidad</label>
          <div className={classes.options2}>
          <input
              type={"text"}
              placeholder={"Indique su documento"}
              className={classes.input5}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
            />
            <input
              type={"text"}
              placeholder={"Número completo"}
              className={classes.input5}
              // onChange={handleChange}
              // value={values.email}
              name="email"
              id={"username"}
              autoComplete="off"
              autoFocus
            />
          </div>
          <div className={classes.total}><h3>Total S/</h3></div>
          <div className={classes.btn}>
          <Button
          variant="contained"
          className={clsx(
            classes.addToCartButton,
            classes.addToCartColor
          )}
          onClick={()=> {history.push("/thank-you")}}
          > 
          PAGAR
          </Button>
          </div>
        </form>
      </div>

   
    </div>
  );
}