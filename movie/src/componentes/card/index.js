import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {cardStyle} from './cardStyle';
import { useHistory } from "react-router-dom"




export default function Cards (props) {
    const classes = cardStyle();
    const history = useHistory();
    const handleMovie =() => {
        history.push("/",{
            imageMovies: props.image,
            descriptionMovies: props.description
        })
    }

    return(

            <Card className={classes.root} onClick={handleMovie}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <img
                        className={classes.cover}
                        src={props.imageMovies}
                        title=""
                    />
                    <Typography component="h5" variant="h5">
                        Género:{props.descriptionMovies}
                    </Typography>

                </CardContent>
            </div>
      
        </Card>
    )

        
    
} 