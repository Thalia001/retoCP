import React, { useContext, useState } from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useHistory } from "react-router-dom";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Cart (props) {

    const history = useHistory();
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;


    const tooglefalse = () => {
      setMenu(false);
    };

    const reduce = id =>{
      carrito.forEach(item =>{
        if(item.id === id){
          item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
        }
        setCarrito([...carrito])
      })
    };
    const sumar = id =>{
      carrito.forEach(item =>{
        if(item.id === id){
          item.cantidad +=1;
        }
        setCarrito([...carrito])
      })
    }
    const removeProducto = id =>{
      if(window.confirm("¿Quieres suspender el producto?")){
        carrito.forEach((item, index)=>{
          if(item.id === id){
            item.cantidad = 1;
            carrito.splice(index, 1)
          }
        })
        setCarrito([...carrito])
      }
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    const handleProduct = () => {
      history.push("/", {
          imageProduct:props.name,
          comboProduct:props.description,
          precioProduct:props.price
      })
  }

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carritoClose" onClick={tooglefalse}>
          <CancelIcon className="icon"/>
        </div>
        <h2>Carrito de compras</h2>
        <div className="carritoCenter">
    { carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> : <>
        { carrito.map((producto) => (
        <div className="carritoItem">
          <img className="imagen" src={producto.name}/>
          <div>
            <h3>{producto.description}</h3>
            <p className="price">S/ {producto.price}</p>
          </div>
          <div>
            <AddCircleOutlineIcon className="icon2" onClick={() => sumar(producto.id)}/>
            <p className="cantidad">{producto.cantidad}</p>
            <RemoveCircleOutlineIcon className="icon2" onClick={() => reduce(producto.id)}/>
          </div>
          <div className="removeItem" onClick={() => removeProducto(producto.id)}>
            <DeleteIcon className="icon3"/>
          </div>
          
        </div>
      ))

    };
  </>
  } 
  </div>
        <div className="carritoFooter">
        <h3>Total S/{total}</h3>
        <button className="btn" onClick={tooglefalse}>
        <Link to={{pathname: "/pago"}} className="link"> PAGAR </Link>
          </button>
        </div>
      </div>
      </div>
     
  );
};