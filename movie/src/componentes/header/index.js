import React, {useContext } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { headerStyle } from './headerStyle';
import logo from '../../img/logomovie.png';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from "../context/DataProvider"; 


export default function Header () {
    const classes = headerStyle();

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
  
  
    const toogleMenu = () =>{
      setMenu(!menu)
    }
   
    

    
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
                        <Link to={{pathname:"/inicia-sesion"}} variant="h6" className={classes.title}>
                            INICIA SESION 
                        </Link>
                    </Toolbar>
                </AppBar>
                <div className={classes.menu3} onClick={toogleMenu}>
                   <ShoppingCartIcon className={classes.iconCart}/>
                   <span className={classes.itemTOtal}>0</span>
                </div>
                
            </div>
        </>
    )
} 