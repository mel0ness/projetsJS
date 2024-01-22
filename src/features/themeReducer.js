import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ID: "Light"
} 

const {actions, reducer} = createSlice({
    name: "theme",
initialState,
reducers: {
Light : {
    reducer: (draft) => {
        draft.ID = "Light";
    }
},
Dark : {
    reducer: (draft) => {
        draft.ID = "Dark";
    }
}
}
})

export const {Light, Dark} = actions;

export default reducer;