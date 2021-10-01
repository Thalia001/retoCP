import React, {useEffect, useState} from "react";
import Cards from "../../componentes/card";
import axios from "axios";
import {PREMIERES} from "../../config";
import { useHistory } from "react-router-dom";



export default function Home (props) {
    let history = useHistory();
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
            <div style={{width:"100%", display:"inline"}}>
            {allDataMovie.map((movie) => (

                <Cards imageMovies={movie.image} descriptionMovies={movie.description}{...props} />
            ))}
            </div>
            
        </>
    )
} 