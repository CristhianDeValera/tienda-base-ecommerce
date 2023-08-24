
export const LoginLayout = ({ children, titulo, subtitulo }) => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100'>
            <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-md rounded-md md:flex-row md:space-y-0 mx-2'>
                <div className='flex flex-col justify-center p-8 md:p-14 sm:px-2'>
                    <span className='text-4xl font-bold text-center'>{titulo}</span>
                    <span className='font-light text-gray-400 pb-4 text-center'>{subtitulo}</span>
                    <form>
                        {children}
                    </form>
                </div>
            </div>
        </div>
    )
}

