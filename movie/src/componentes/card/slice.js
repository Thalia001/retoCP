import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {PREMIERES} from "../../config";

export const moviesSlice = createSlice({
    name:"premieres",
    initialState:{
        description:[],
        image: []
    },
    
})