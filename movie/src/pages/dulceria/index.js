import React, {useEffect, useState} from "react";
import CardsProducts from "../../componentes/cardProduct";
import axios from "axios";
import {CANDYSTORE} from "../../config";

export default function Dulceria (props) {
    const [allProductsCandys, setAllProductsCandys] = useState([]);

    useEffect(()=> {
        const allProducts = async() => {
            await axios.get(CANDYSTORE).then((response) => {
                setAllProductsCandys(response.data.items)
            })
            console.log("allProducts", allProducts);
        };
        allProducts();
    }, []);



    return(
        <>
            <div style={{width:"100%", display:"inline"}}>
            {allProductsCandys.map((product) => (

                <CardsProducts imageProduct={product.name} comboProduct={product.description} precioProduct={product.price}{...props} />
            ))}
            </div>
            
        </>
    )
} 