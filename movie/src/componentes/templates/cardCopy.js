import React from "react";
import { moviesContainer } from "./cardCopyStyle"
import Cards from "../card";


export default function dataContainer ({premieres}) {
    const classes = moviesContainer();
    return(
       <moviesContainer className={classes.container}>
           {premieres.map(p=> (
                  <Cards
                  image={p.image}
                  description={p.description}/>
           )

           )}
       </moviesContainer>
    )
} 