
import { Link } from 'react-router-dom'
import IMGLOGIN from '../../assets/adult.jpg'
import { LoginLayout } from '../layout/LoginLayout'

export const LoginPage = () => {
    return (
        <LoginLayout
            titulo="Bienvenido a Vara"
            subtitulo="Correo y contraseña son obligatorios"
        >
            <div>
                <label htmlFor='idemail' className='block mb-2 text-sm font-medium text-gray-700'>Correo:</label>
                <input type='email' id='idemail' name='email' className='border rounded-lg block w-full p-2.5 border-gray-400 placeholder-gray-400 ' placeholder='Inserte su correo' />
            </div>
            <div className='pt-4'>
                <label htmlFor='idpassword' className='block mb-2 text-sm font-medium text-gray-700'>Contraseña:</label>
                <input type='password' id='idpassword' name='password' className='border rounded-lg block w-full p-2.5 border-gray-400 placeholder-gray-400 ' placeholder='Contraseña' />
            </div>


            <div className='flex flex-col pt-6'>
                <button type='submit' className='w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-md p-2 text-center'>Iniciar</button>
            </div>
            <Link to='/cuenta/register' className='font-sm flex justify-center text-gray-500 hover:underline cursor-pointer pt-2 text-center'>¿No tienes cuenta? Crear cuenta</Link>

            <Link to='/' className='font-sm flex justify-center text-gray-500 hover:underline cursor-pointer pt-2 text-center'>Pagina principal</Link>
        </LoginLayout>
    )
}


