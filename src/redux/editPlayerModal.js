import { createSlice } from "@reduxjs/toolkit";

export const editPlayerModal = createSlice({
    name:"editProfile",
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

export const {switchOn, switchOff} = editPlayerModal.actions;
export default editPlayerModal.reducer;