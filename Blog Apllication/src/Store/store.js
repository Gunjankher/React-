import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice";

const store = configureStore({

redcures :{
auth : authSlice
}

})


export default store