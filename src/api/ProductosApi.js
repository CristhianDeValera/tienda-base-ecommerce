import axios from "axios";

export const ProductosApi = axios.create({
    baseURL: 'https://fakestoreapi.com/products'
});

export const listProductsApi = () => ProductosApi.get();

