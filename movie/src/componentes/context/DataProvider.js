import React, { createContext, useEffect, useState } from "react";
import {CANDYSTORE} from "../../config";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [productos,setProductos] = useState([]);
    const [menu, setMenu] = useState(false);
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const producto = CANDYSTORE;
        console.log("2",producto);
        if(producto) {
            setProductos(producto)
        }else{
            setProductos([])
        }
    }, [] );

    const addCarrito = (name) => {
        const check = carrito.every(items => {
            return items.name !== name;
        })
        if(check){
            const data = productos.filter(producto => {
                return producto.name === name
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto se ha añadido al carrito")
        }
      
    } 
    useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

    useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])

    const value = {
        productos:[productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito:[carrito],
        total: [total, setTotal]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}