import React, {useEffect, useState} from "react";
import Cards from "../../componentes/card";
import axios from "axios";
import {PREMIERES} from "../../config"

export default function Home (props) {
    const [allDataMovie, setAllDataMovie] = useState([]);

    useEffect(()=>{
        const allData = async() => {
                await axios.get(PREMIERES).then((response) => {
                    setAllDataMovie(response.data.premieres);
                    // console.log("data",response.data.premieres)
            })
            console.log("allData", allData);
        };
        allData();
    }, []);

    return(
        <>
            {allDataMovie.map((movie) => (
                <Cards imageMovies={movie.image} descriptionMovies={movie.description}{...props}/>
            ))}
   
            
        </>
    )
} 