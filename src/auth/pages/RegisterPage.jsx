import { Link } from "react-router-dom"
import { LoginLayout } from "../layout/LoginLayout"

export const RegisterPage = () => {
    return (
        <LoginLayout
            titulo="Crear cuenta usuario"
            subtitulo="Correo y contraseña son obligatorios"
        >
            <div>
                <label htmlFor='idnombre' className='block mb-2 text-sm font-medium text-gray-700'>Nombre completo:</label>
                <input type='text' id='idnombre' name='email' className='border rounded-lg block w-full p-2.5 border-gray-400 placeholder-gray-400 ' placeholder='Inserte su nombre completo' />
            </div>
            <div className='pt-4'>
                <label htmlFor='idemailregistro' className='block mb-2 text-sm font-medium text-gray-700'>Correo:</label>
                <input type='email' id='idemailregistro' name='email' className='border rounded-lg block w-full p-2.5 border-gray-400 placeholder-gray-400 ' placeholder='Inserte su correo' />
            </div>
            <div className='pt-4'>
                <label htmlFor='idpassword' className='block mb-2 text-sm font-medium text-gray-700'>Contraseña:</label>
                <input type='password' id='idpassword' name='password' className='border rounded-lg block w-full p-2.5 border-gray-400 placeholder-gray-400 ' placeholder='Contraseña' />
            </div>

            <div className='flex flex-col pt-6'>
                <button type='submit' className='w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-md p-2 text-center'>Crear cuenta</button>
            </div>
            <Link to='/cuenta/login' className='font-sm text-gray-500 hover:underline cursor-pointer pt-2 text-center flex justify-center'>¿Ya tienes cuenta? Ingresar</Link>
        </LoginLayout>
    )
}


