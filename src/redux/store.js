import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import editPlayerModal from "./editPlayerModal";

export default configureStore({
    reducer:{
        auth: authReducer,
        editProfile: editPlayerModal
    }
})