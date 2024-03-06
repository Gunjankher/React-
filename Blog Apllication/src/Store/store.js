import { configureStore } from "@reduxjs/toolkit";
// import authSlice from "../Store/authslice";
try {
    const authSlice = await import("./authslice");
    // Now you can use authSlice here
    console.log(authSlice);
} catch (error) {
    // Handle the import error here
    console.error("An error occurred during import:", error);
}



const store = configureStore({

redcures :{
auth : authSlice
}

})


export default store