import { createSlice } from "@reduxjs/toolkit";

export const showScoutModal = createSlice({
    name:"showScout",
    initialState:{
        show:false,
    },
    reducers:{
        switchOn : (state)=>{
            state.show = true;
        },
        switchOff: (state)=>{
            state.show = false;
        }
    }
})

export const {switchOn, switchOff} = showScoutModal.actions;
export default showScoutModal.reducer;