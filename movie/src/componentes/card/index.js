import React, {useEffect, useState} from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {cardStyle} from './cardStyle';
import axios from "axios";
import  {PREMIERES} from "../../config";

export default function Cards ({image, description}) {
    const classes = cardStyle();
   
    useEffect(()=>{
        const getData = async() => {
            const {data} = await axios.get(PREMIERES, {
                    description:"",
                    image:"",
             
            })
            
            console.log(data);
        };
        getData();
    }, []);

    return(
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <CardMedia
                        className={classes.cover}
                        image={image}
                        title=""
                    />
                    <Typography component="h5" variant="h5">
                        Género:{description}
                    </Typography>

                </CardContent>
            </div>
      
        </Card>
    )
} 