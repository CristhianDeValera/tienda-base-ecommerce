import { createSlice } from '@reduxjs/toolkit';




const initialState = {
    listProducts: {
        loading: false,
        data: [],
        error: ""
    },
    totalproducto: {
        loading: false,
        data: []
    },
    cartShopping: {
        totalamount: 0,
        numberproduct: [],
        totalproduct: 0,
    }
};

export const productoSlice = createSlice({
    name: 'producto',
    initialState,
    reducers: {
        listProducts_loading: (state) => {
            state.listProducts.loading = true;
            state.listProducts.data = [];
            state.listProducts.error = "";
        },
        listProducts_exito: (state, { payload }) => {
            state.listProducts.loading = false;
            state.listProducts.data = payload;
            state.listProducts.error = "";
        },
        listProducts_error: (state) => {
            state.listProducts.loading = false;
            state.listProducts.data = [];
            state.listProducts.error = payload;
        },
        listProducts_limpiar: (state) => {
            state.listProducts.loading = false;
            state.listProducts.data = [];
            state.listProducts.error = "";
        },


        totalproducto_loading: (state) => {
            state.totalproducto.loading = true;
            state.totalproducto.data = [];
        },
        totalproducto_exito: (state, { payload }) => {
            state.totalproducto.loading = false;
            state.totalproducto.data = payload;
        },
        totalproducto_limpiar: (state) => {
            state.totalproducto.loading = false;
            state.totalproducto.data = [];
        },


        amountTotalProducto: (state, { payload }) => {
            state.cartShopping.totalamount = payload;
        },
        numberProducto: (state, { payload }) => {
            state.cartShopping.numberproduct = payload;
        },
        cleanNumberProducto: (state) => {
            state.cartShopping.numberproduct = [];
            state.cartShopping.totalamount = 0;
            state.cartShopping.totalproduct = 0;
        },
        montoFinalProducto: (state, { payload }) => {
            state.cartShopping.totalproduct = payload;
        },
    }
});



export const {
    listProducts_loading,
    listProducts_exito,
    listProducts_error,
    listProducts_limpiar,

    totalproducto_loading,
    totalproducto_exito,
    totalproducto_limpiar,

    amountTotalProducto,
    numberProducto,
    cleanNumberProducto,
    montoFinalProducto,
} = productoSlice.actions;
export default productoSlice.reducer


