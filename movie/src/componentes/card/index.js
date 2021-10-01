import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {cardStyle} from './cardStyle';
import { useHistory } from "react-router-dom";





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
        <Button container  className={classes.container} onClick={()=> {history.push('/inicia-sesion')}}>
            <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <div className={classes.imagenBox}>
                        <img
                            className={classes.cover}
                            src={props.imageMovies}
                            title=""
                        />
                    </div>
                    <div className={classes.textBox}>
                    <Typography component="h5" variant="h5" className={classes.textGenero}>
                        Género: {props.descriptionMovies}
                    </Typography>
                    </div>

                </CardContent>
            </div>
      
            </Card>
       </Button>
    )
        
    
} 