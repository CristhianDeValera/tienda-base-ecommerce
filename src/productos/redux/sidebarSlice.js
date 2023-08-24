
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    setSidebar: false,
};

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        openSidebar: (state, { payload }) => {
            state.setSidebar = payload
        }
    }
});

export const {
    openSidebar
} = sidebarSlice.actions;
export default sidebarSlice.reducer

