import { configureStore } from '@reduxjs/toolkit';
// import { productoSlice } from './slices/producto/productoSlice';
import { productoSlice } from '../productos/redux/productoSlice'
import { sidebarSlice } from '../productos/redux/sidebarSlice';

export const store = configureStore({
    reducer: {
        producto: productoSlice.reducer,
        sidebar: sidebarSlice.reducer
    },
});

