import {configureStore} from "@reduxjs/toolkit";
import  getReducer  from "../features/get/getSlice";

export const store = configureStore({
    reducer: {
        tasks: getReducer
    }
});
