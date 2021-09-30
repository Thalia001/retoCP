import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { headerStyle } from './headerStyle';
import logo from '../../img/logomovie.png';
import { Link } from "react-router-dom";
import AppLoginPopup from "../login";

export default function Header () {
    const classes = headerStyle();
    return(
        <>
            <div className={classes.root}>
                <div className={classes.menu}>
                    <img src={logo} className={classes.logo}/>
                </div>
                <AppBar position="static" className={classes.menuItem}>
                    <Toolbar className={classes.items}>
                        <Link  to={{pathname:"/"}} variant="h6" className={classes.title}>
                            HOME
                        </Link>
                        <Link to={{pathname:"/dulceria"}} variant="h6" className={classes.title}>
                            DULCERIA 
                        </Link>
                        <AppLoginPopup/>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
} 