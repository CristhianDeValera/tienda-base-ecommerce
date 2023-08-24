import { BsPlus, BsEyeFill } from "react-icons/bs"
import { ProductsDetails } from './ProductsDetails'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToCart } from "../hooks/useToCart";


export const Product = ({ product }) => {

    const { id, image, category, title, price } = product;
    const [, , addProductCart, , , ,] = useToCart();

    return (
        <>
            <div className="">
                <div className="h-[300px] mb-4 relative overflow-hidden group transition flex justify-center">
                    <div className="w-full h-full flex justify-center items-center bg-white shadow-md">
                        <div className="w-[200px] mx-auto flex justify-center items-center">
                            <img
                                className="max-h-[160px] group-hover:scale-110 transition duration-500"
                                src={image}
                                alt={title}
                            />
                        </div>
                    </div>
                    <div className="absolute top-6 right-11 p-1 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Link
                            to={`/prenda/${title}`}
                        >
                            <BsEyeFill
                                className="text-3xl text-orange-400 cursor-pointer"
                            />
                        </Link>
                    </div>

                    <div className="absolute bottom-10 bg__degradado opacity-0 group-hover:opacity-100 transition-all duration-500 ">
                        <button
                            onClick={() => addProductCart(product, id)}
                            className="border border-x-blue-100 cursor-pointer py-2 px-16 md:px-10 text-black">
                            Agregar producto
                        </button>
                    </div>
                </div>

                <div>
                    <div className="text-sm capitalize text-gray-500">{category}</div>
                    <Link to={`/prenda/${title}`}>
                        <h2 className="font-semibold mb-0">{title}</h2>
                    </Link>
                    <h2 className="font-semibold">s/.{price}</h2>
                </div>
            </div>

        </>
    )
}


