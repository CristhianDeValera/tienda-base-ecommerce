
import React from 'react'
import { Link } from 'react-router-dom';

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { useToCart } from '../hooks/useToCart';

export const CartItem = ({ item }) => {
    const { id, title, image, price, amount } = item;

    const [, , , removeProductCart, incrementCantidad, decrementCantidad] = useToCart();

    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">

            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <img className='max-w-[80px]' src={image} />

                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        <Link
                            to={`prenda/${id}`}
                            className='text-sm font-medium max-w-[240px] text-primary hover:underline'
                        >
                            {title}
                        </Link>
                        <div
                            onClick={() => removeProductCart(id)}
                            className='text-xl cursor-pointer'
                        >
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
                        </div>
                    </div>
                    <div className='flex gap-x-2 h-[36px] text-sm'>
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium'>
                            <div
                                onClick={() => decrementCantidad(id)}
                                className='flex-1 flex justify-center items-center cursor-pointer h-full'>
                                <IoMdRemove />
                            </div>
                            <div className='h-full flex justify-center items-center px-2'>
                                {amount}
                            </div>
                            <div
                                onClick={() => incrementCantidad(id)}
                                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className='flex-1 flex items-center justify-around'>
                            {`s/${price.toFixed(2)}`}
                        </div>
                        <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                            {`s/${parseFloat(price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}






