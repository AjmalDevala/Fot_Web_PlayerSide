import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import showScoutModal from "./showScoutModal";

export default configureStore({
    reducer:{
        auth: authReducer,
        showScout: showScoutModal
    }
})