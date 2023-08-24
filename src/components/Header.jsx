

import { Link } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'

import ICONO from '../assets/logoropa.png'
import { useState } from 'react'
import { useSidebar } from '../productos/hooks/useSidebar'

export const Header = () => {

    const [psetSidebar, ptotalamountproduc, , , showSidebar] = useSidebar();

    return (
        <header className="bg-white md:py-4 sm:py-2 shadow-md fixed w-full z-100 transition-all z-50">
            <div className='container mx-auto flex items-center justify-between h-full'>
                <Link to={'/'}>
                    <div>
                        <img className='w-[7rem]' src={ICONO} alt='' />
                    </div>
                </Link>
                <div
                    onClick={() => showSidebar(!psetSidebar)}
                    className='cursor-pointer flex relative'>
                    <BsBag className='text-2xl' />
                    <div className='absolute bg-red-500 right-0 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                        {ptotalamountproduc}
                    </div>
                </div>
            </div>
        </header>
    )
}


